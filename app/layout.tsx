import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Money Management Dashboard",
  description: "Advanced money management application with React and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <Sidebar className="hidden md:block w-64 border-r" />
            <div className="flex-1 overflow-auto">
              <div className="md:hidden p-4 border-b flex items-center">
                <MobileSidebar />
                <div className="ml-4 flex items-center">
                  <span className="font-bold">Money Manager</span>
                </div>
              </div>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
