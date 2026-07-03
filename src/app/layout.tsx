import { Metadata } from "next"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { Inter } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: "%s | Product Roadmap",
    default: "Product Roadmap",
  },
  description:
    "Siga o progresso do desenvolvimento de recurso da nossa plataforma",
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
      <body className="bg-navy-950 text-navy-50 antialiased">
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  )
}
