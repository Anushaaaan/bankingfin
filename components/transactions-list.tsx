"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowUpIcon,
  CreditCardIcon,
  HomeIcon,
  ShoppingBagIcon,
  UtensilsIcon,
  CarIcon,
  HeartIcon,
  LightbulbIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  type: "income" | "expense"
  category: string
  icon: React.ReactNode
}

const transactions: Transaction[] = [
  {
    id: "t1",
    date: "2023-05-01",
    description: "Salary Deposit",
    amount: 4395,
    type: "income",
    category: "Income",
    icon: <ArrowUpIcon className="h-4 w-4 text-blue-600" />,
  },
  {
    id: "t2",
    date: "2023-05-02",
    description: "Rent Payment",
    amount: 850,
    type: "expense",
    category: "Housing",
    icon: <HomeIcon className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "t3",
    date: "2023-05-03",
    description: "Grocery Shopping",
    amount: 120,
    type: "expense",
    category: "Food",
    icon: <UtensilsIcon className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "t4",
    date: "2023-05-04",
    description: "Freelance Work",
    amount: 350,
    type: "income",
    category: "Income",
    icon: <ArrowUpIcon className="h-4 w-4 text-blue-600" />,
  },
  {
    id: "t5",
    date: "2023-05-05",
    description: "Gas Station",
    amount: 45,
    type: "expense",
    category: "Transportation",
    icon: <CarIcon className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "t6",
    date: "2023-05-06",
    description: "Online Shopping",
    amount: 78.5,
    type: "expense",
    category: "Shopping",
    icon: <ShoppingBagIcon className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "t7",
    date: "2023-05-07",
    description: "Electricity Bill",
    amount: 95,
    type: "expense",
    category: "Utilities",
    icon: <LightbulbIcon className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "t8",
    date: "2023-05-08",
    description: "Restaurant Dinner",
    amount: 65,
    type: "expense",
    category: "Food",
    icon: <UtensilsIcon className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "t9",
    date: "2023-05-09",
    description: "Movie Tickets",
    amount: 30,
    type: "expense",
    category: "Entertainment",
    icon: <HeartIcon className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "t10",
    date: "2023-05-10",
    description: "Credit Card Payment",
    amount: 200,
    type: "expense",
    category: "Debt",
    icon: <CreditCardIcon className="h-4 w-4 text-rose-500" />,
  },
]

interface TransactionsListProps {
  limit?: number
  showAll?: boolean
}

export function TransactionsList({ limit, showAll = false }: TransactionsListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const filteredTransactions = transactions
    .filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((transaction) =>
      filterType === "all"
        ? true
        : filterType === "income"
          ? transaction.type === "income"
          : transaction.type === "expense",
    )

  const limitedTransactions = filteredTransactions.slice(0, limit || filteredTransactions.length)

  return (
    <div className="space-y-4">
      {showAll && (
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sm:max-w-[250px]"
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="sm:max-w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="income">Income Only</SelectItem>
              <SelectItem value="expense">Expenses Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        {limitedTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800">
                {transaction.icon}
              </div>
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString()} • {transaction.category}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={transaction.type === "income" ? "text-blue-600 font-medium" : "text-rose-500 font-medium"}
              >
                {transaction.type === "income" ? "+" : "-"}₹{transaction.amount.toFixed(2)}
              </span>
              <Badge variant={transaction.type === "income" ? "outline" : "secondary"} className="ml-2">
                {transaction.type === "income" ? "Income" : "Expense"}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {limit && transactions.length > limit && (
        <div className="flex justify-center mt-4">
          <Button variant="outline">View All Transactions</Button>
        </div>
      )}
    </div>
  )
}
