import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DebugInfo } from "@/components/debug-info"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Studiumbase - Online Assessment Platform",
  description: "Create, share, and take assessments at scale",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          {modal}
          <DebugInfo />
        </ThemeProvider>
      </body>
    </html>
  )
}
