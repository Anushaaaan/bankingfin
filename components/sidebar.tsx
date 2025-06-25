"use client"

import {
  HomeIcon,
  CreditCardIcon,
  DollarSignIcon,
  BarChart3Icon,
  PieChartIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      icon: <HomeIcon className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      href: "/transactions",
      icon: <CreditCardIcon className="h-5 w-5" />,
      label: "Transactions",
    },
    {
      href: "/budgets",
      icon: <DollarSignIcon className="h-5 w-5" />,
      label: "Budgets",
    },
    {
      href: "/goals",
      icon: <BarChart3Icon className="h-5 w-5" />,
      label: "Goals",
    },
    {
      href: "/reports",
      icon: <PieChartIcon className="h-5 w-5" />,
      label: "Reports",
    },
    {
      href: "/profile",
      icon: <UserIcon className="h-5 w-5" />,
      label: "Profile",
    },
    {
      href: "/settings",
      icon: <SettingsIcon className="h-5 w-5" />,
      label: "Settings",
    },
  ]

  return (
    <div className={cn("h-full bg-white dark:bg-slate-950 shadow-sm", className)}>
      <div className="flex flex-col h-full">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Image src={Logo} alt="Money Manager" width={30} height={30} className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold">Money Manager</h1>
          </div>
          <div className="space-y-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={pathname === route.href ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start py-5 mb-1 transition-colors"
                asChild
              >
                <Link href={route.href}>
                  {route.icon}
                  <span className="ml-2">{route.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-auto p-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <UserIcon className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Anuj Sharma</p>
              <p className="text-xs text-muted-foreground">Premium Account</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <LogOutIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
