
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AdvancedAnimations from "@/components/advanced-animations"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "Revolutionary AI-powered marketing suite for modern businesses. Create, optimize, and scale your campaigns with unprecedented precision.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdvancedAnimations>{children}</AdvancedAnimations>
      </body>
    </html>
  )
}
