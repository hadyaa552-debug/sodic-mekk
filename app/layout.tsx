import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"

const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "SODIC | VYE • East Vale • June (Caesar)",
  description: "SODIC Developments — A leading real estate developer in Egypt. VYE New Zayed, East Vale Mostakbal City, June North Coast.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
