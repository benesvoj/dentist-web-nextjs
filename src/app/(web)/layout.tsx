import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './ui/globals.css'
import React from 'react'
import {Header} from '@/app/(web)/ui/Header'
import {Footer} from '@/app/(web)/ui/Footer'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'LS dent, s.r.o.',
  description: 'Praktický zubní lékař v Opavě',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
