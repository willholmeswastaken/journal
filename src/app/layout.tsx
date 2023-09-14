import { MainNav } from '@/components/main-nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { MobileNav } from '@/components/mobile-nav'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen dark bg-background font-sans antialiased', inter.className)}>
        <div className="flex flex-col">
          <header className="container z-40 bg-background">
            <div className="flex h-20 items-center justify-between py-6">
              <MainNav />
              <MobileNav />
            </div>
          </header>
        </div>
        {children}

        <SiteFooter />
      </body>
    </html>
  )
}
