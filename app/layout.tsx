import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kyle Thornton'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='min-h-screen bg-gradient-to-b from-slate-50 to-gray-300'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
