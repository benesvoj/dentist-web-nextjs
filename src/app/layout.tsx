import type {Metadata} from 'next'
import {Roboto_Flex} from 'next/font/google'
import './ui/globals.css'
import React from 'react'

const font = Roboto_Flex({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'LS dent, s.r.o.',
  description: 'Praktický zubní lékař v Opavě',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="flex flex-col items-center justify-between p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
