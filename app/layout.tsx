import Avatar from './components/avatar'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next 13 Blog',
  description: 'A blog built with Next.js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-800 dark:text-white ${inter.className}`}>
        <Navbar />
        <Avatar />
        {children}
      </body>
    </html>
  )
}
