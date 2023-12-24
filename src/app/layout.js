import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seekify | Search Enginer',
  description: 'Search Enginer for DSA End-Semester Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="business">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
