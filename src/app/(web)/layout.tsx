import React from 'react'
import {Header} from '@/app/(web)/ui/Header'
import {Footer} from '@/app/(web)/ui/Footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-gray-100 rounded p-4">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
