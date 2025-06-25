"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionsList } from "@/components/transactions-list"
import { useState } from "react"
import { AddTransactionDialog } from "@/components/add-transaction-dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export function TransactionsPage() {
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-blue-800 dark:text-blue-400">Transactions</h1>
          <p className="text-muted-foreground">View and manage all your financial transactions</p>
        </div>
        <Button
          onClick={() => setIsAddTransactionOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Transaction
        </Button>
      </div>

      <Card className="card-hover-effect">
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>A complete history of your financial activities</CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionsList showAll={true} />
        </CardContent>
      </Card>

      <AddTransactionDialog open={isAddTransactionOpen} onOpenChange={setIsAddTransactionOpen} />
    </div>
  )
}
