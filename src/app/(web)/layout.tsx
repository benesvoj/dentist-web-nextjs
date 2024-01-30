import React from 'react'
import {Header} from '@/app/(web)/ui/Header'
import {Footer} from '@/app/(web)/ui/Footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
