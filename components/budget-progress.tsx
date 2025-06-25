"use client"

import type React from "react"

import { Progress } from "@/components/ui/progress"
import { HomeIcon, UtensilsIcon, CarIcon, HeartIcon, LightbulbIcon, ShoppingBagIcon } from "lucide-react"

interface Budget {
  id: string
  category: string
  icon: React.ReactNode
  allocated: number
  spent: number
  remaining: number
  percentUsed: number
}

const budgets: Budget[] = [
  {
    id: "b1",
    category: "Housing",
    icon: <HomeIcon className="h-4 w-4" />,
    allocated: 1000,
    spent: 850,
    remaining: 150,
    percentUsed: 85,
  },
  {
    id: "b2",
    category: "Food",
    icon: <UtensilsIcon className="h-4 w-4" />,
    allocated: 500,
    spent: 450,
    remaining: 50,
    percentUsed: 90,
  },
  {
    id: "b3",
    category: "Transportation",
    icon: <CarIcon className="h-4 w-4" />,
    allocated: 400,
    spent: 300,
    remaining: 100,
    percentUsed: 75,
  },
  {
    id: "b4",
    category: "Entertainment",
    icon: <HeartIcon className="h-4 w-4" />,
    allocated: 300,
    spent: 200,
    remaining: 100,
    percentUsed: 67,
  },
  {
    id: "b5",
    category: "Utilities",
    icon: <LightbulbIcon className="h-4 w-4" />,
    allocated: 350,
    spent: 250,
    remaining: 100,
    percentUsed: 71,
  },
  {
    id: "b6",
    category: "Shopping",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    allocated: 200,
    spent: 100,
    remaining: 100,
    percentUsed: 50,
  },
]

interface BudgetProgressProps {
  showAll?: boolean
}

export function BudgetProgress({ showAll = false }: BudgetProgressProps) {
  const displayBudgets = showAll ? budgets : budgets.slice(0, 4)

  return (
    <div className="space-y-4">
      {displayBudgets.map((budget) => (
        <div key={budget.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800">
                {budget.icon}
              </div>
              <span className="font-medium">{budget.category}</span>
            </div>
            <div className="text-sm font-medium">
              ₹{budget.spent} / ₹{budget.allocated}
            </div>
          </div>
          <div className="space-y-1">
            <Progress value={budget.percentUsed} className={budget.percentUsed > 90 ? "bg-rose-100" : ""} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{budget.percentUsed}% used</span>
              <span>₹{budget.remaining} remaining</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
