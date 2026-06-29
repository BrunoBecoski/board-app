import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
  title: "Board App",
  description: "Board de roadmap público",
}

const interFont = Inter({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={interFont.className}>
      <body className="bg-navy-950 text-navy-50 antialiased">{children}</body>
    </html>
  )
}
