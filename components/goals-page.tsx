"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SavingsGoals } from "@/components/savings-goals"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function GoalsPage() {
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-blue-800 dark:text-blue-400">Savings Goals</h1>
          <p className="text-muted-foreground">Set and track your financial goals</p>
        </div>
        <Button onClick={() => setIsAddGoalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Goal
        </Button>
      </div>

      <Card className="card-hover-effect">
        <CardHeader>
          <CardTitle>Your Savings Goals</CardTitle>
          <CardDescription>Track progress towards your financial goals</CardDescription>
        </CardHeader>
        <CardContent>
          <SavingsGoals />
        </CardContent>
      </Card>

      <Dialog open={isAddGoalOpen} onOpenChange={setIsAddGoalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Savings Goal</DialogTitle>
            <DialogDescription>Create a new financial goal to track your progress</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setIsAddGoalOpen(false)
            }}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Goal Name
                </Label>
                <Input id="name" className="col-span-3" placeholder="e.g., New Car, Vacation" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="target" className="text-right">
                  Target Amount
                </Label>
                <div className="col-span-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">₹</span>
                    <Input id="target" className="pl-7" placeholder="0.00" type="number" step="0.01" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="current" className="text-right">
                  Current Amount
                </Label>
                <div className="col-span-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">₹</span>
                    <Input id="current" className="pl-7" placeholder="0.00" type="number" step="0.01" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Target Date
                </Label>
                <Input id="date" type="date" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsAddGoalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Add Goal</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
