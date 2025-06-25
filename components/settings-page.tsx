"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"

export function SettingsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-blue-800 dark:text-blue-400">Settings</h1>
        <p className="text-muted-foreground">Customize your app experience and preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how the app looks and feels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="theme" className="text-base">
                  Theme
                </Label>
                <p className="text-sm text-muted-foreground">Select light or dark mode</p>
              </div>
              <ThemeToggle />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="animations" className="text-base">
                  Animations
                </Label>
                <p className="text-sm text-muted-foreground">Enable or disable animations</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="budget-alerts" className="text-base">
                  Budget Alerts
                </Label>
                <p className="text-sm text-muted-foreground">Get notified when you're close to budget limits</p>
              </div>
              <Switch id="budget-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="payment-reminders" className="text-base">
                  Payment Reminders
                </Label>
                <p className="text-sm text-muted-foreground">Receive reminders for upcoming payments</p>
              </div>
              <Switch id="payment-reminders" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle>Currency</CardTitle>
            <CardDescription>Set your preferred currency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select defaultValue="inr">
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                  <SelectItem value="usd">US Dollar ($)</SelectItem>
                  <SelectItem value="eur">Euro (€)</SelectItem>
                  <SelectItem value="gbp">British Pound (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="format">Number Format</Label>
              <Select defaultValue="indian">
                <SelectTrigger id="format">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="indian">Indian (1,00,000.00)</SelectItem>
                  <SelectItem value="international">International (100,000.00)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle>Data & Privacy</CardTitle>
            <CardDescription>Manage your data and privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="data-collection" className="text-base">
                  Data Collection
                </Label>
                <p className="text-sm text-muted-foreground">Allow anonymous usage data collection</p>
              </div>
              <Switch id="data-collection" />
            </div>
            <div className="pt-2">
              <Button variant="outline" className="w-full">
                Export Your Data
              </Button>
            </div>
            <div>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
