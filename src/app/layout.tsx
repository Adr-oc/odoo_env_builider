import React from "react"
import type { Metadata } from 'next'
import { ThemeProvider } from "next-themes"
 
// These styles apply to every route in the application
import '@/styles/globals.css'
 
export const metadata: Metadata = {
  title: 'Odoo Env Builder',
  description: 'Herramienta para construir entornos de Odoo',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}