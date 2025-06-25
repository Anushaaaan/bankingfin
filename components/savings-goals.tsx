"use client"

import type React from "react"

import { Progress } from "@/components/ui/progress"
import { HomeIcon, PlaneIcon, CarIcon, GraduationCapIcon, HeartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SavingsGoal {
  id: string
  name: string
  icon: React.ReactNode
  target: number
  current: number
  percentComplete: number
  targetDate: string
}

const goals: SavingsGoal[] = [
  {
    id: "g1",
    name: "Emergency Fund",
    icon: <HomeIcon className="h-4 w-4" />,
    target: 10000,
    current: 6500,
    percentComplete: 65,
    targetDate: "2023-12-31",
  },
  {
    id: "g2",
    name: "Vacation",
    icon: <PlaneIcon className="h-4 w-4" />,
    target: 3000,
    current: 1200,
    percentComplete: 40,
    targetDate: "2023-08-15",
  },
  {
    id: "g3",
    name: "New Car",
    icon: <CarIcon className="h-4 w-4" />,
    target: 20000,
    current: 5000,
    percentComplete: 25,
    targetDate: "2024-06-30",
  },
  {
    id: "g4",
    name: "Education",
    icon: <GraduationCapIcon className="h-4 w-4" />,
    target: 15000,
    current: 3750,
    percentComplete: 25,
    targetDate: "2024-09-01",
  },
  {
    id: "g5",
    name: "Wedding",
    icon: <HeartIcon className="h-4 w-4" />,
    target: 25000,
    current: 8000,
    percentComplete: 32,
    targetDate: "2024-05-15",
  },
]

export function SavingsGoals() {
  return (
    <div className="space-y-6">
      {goals.map((goal) => (
        <div key={goal.id} className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800">
                {goal.icon}
              </div>
              <div>
                <h4 className="font-medium">{goal.name}</h4>
                <p className="text-xs text-muted-foreground">
                  Target date: {new Date(goal.targetDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Add Funds
            </Button>
          </div>
          <div className="space-y-1">
            <Progress value={goal.percentComplete} />
            <div className="flex justify-between text-sm">
              <span className="font-medium">₹{goal.current.toLocaleString()}</span>
              <span className="text-muted-foreground">₹{goal.target.toLocaleString()} goal</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
