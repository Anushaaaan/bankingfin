"use client"

import { useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, PlusIcon, TrendingUpIcon, WalletIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewChart } from "@/components/overview-chart"
import { ExpensesByCategoryChart } from "@/components/expenses-by-category-chart"
import { TransactionsList } from "@/components/transactions-list"
import { BudgetProgress } from "@/components/budget-progress"
import { SavingsGoals } from "@/components/savings-goals"
import { AddTransactionDialog } from "@/components/add-transaction-dialog"

export function DashboardPage() {
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-blue-800 dark:text-blue-400">
            Finance Dashboard
          </h1>
          <p className="text-muted-foreground">Manage your finances and track your spending</p>
        </div>
        <Button
          onClick={() => setIsAddTransactionOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Transaction
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <WalletIcon className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,580.00</div>
            <p className="text-xs text-muted-foreground">+₹1,245.00 from last month</p>
          </CardContent>
        </Card>
        <Card className="card-hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income</CardTitle>
            <ArrowUpIcon className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹4,395.00</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="card-hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2,150.00</div>
            <p className="text-xs text-muted-foreground">-3.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="card-hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">51.1%</div>
            <p className="text-xs text-muted-foreground">+4.3% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-4 md:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="budgets">Budgets</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 card-hover-effect">
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>Your income and expenses for the past 6 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <OverviewChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3 card-hover-effect">
              <CardHeader>
                <CardTitle>Expenses by Category</CardTitle>
                <CardDescription>Where your money is going this month</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpensesByCategoryChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 card-hover-effect">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <TransactionsList limit={5} />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3 card-hover-effect">
              <CardHeader>
                <CardTitle>Budget Progress</CardTitle>
                <CardDescription>Your spending against monthly budgets</CardDescription>
              </CardHeader>
              <CardContent>
                <BudgetProgress />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="transactions" className="space-y-4">
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>A complete history of your financial activities</CardDescription>
            </CardHeader>
            <CardContent>
              <TransactionsList showAll={true} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="budgets" className="space-y-4">
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>Monthly Budgets</CardTitle>
              <CardDescription>Track your spending against category budgets</CardDescription>
            </CardHeader>
            <CardContent>
              <BudgetProgress showAll={true} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="goals" className="space-y-4">
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>Savings Goals</CardTitle>
              <CardDescription>Track progress towards your financial goals</CardDescription>
            </CardHeader>
            <CardContent>
              <SavingsGoals />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddTransactionDialog open={isAddTransactionOpen} onOpenChange={setIsAddTransactionOpen} />
    </div>
  )
}
