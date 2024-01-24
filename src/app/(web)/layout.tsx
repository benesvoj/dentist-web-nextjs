import React from 'react'
import {Header} from '@/app/(web)/ui/Header'
import {Footer} from '@/app/(web)/ui/Footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
