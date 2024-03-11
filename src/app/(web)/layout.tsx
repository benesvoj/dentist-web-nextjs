'use client'

import React from 'react'
import {Header} from '@/app/(web)/ui/Header'
import {Footer} from '@/app/(web)/ui/Footer'
import {Separator} from '@radix-ui/react-separator'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-gray-100 rounded p-4 w-[1024px]">
      <Header />
      <Separator className="my-4" />
      {children}
      <Separator className="my-4" />
      <Footer />
    </div>
  )
}
