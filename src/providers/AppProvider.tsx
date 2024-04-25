"use client"

import { ThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"

export function AppProvider({ children }: PropsWithChildren) {
  return(
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      {children}
    </ThemeProvider>
  )
}