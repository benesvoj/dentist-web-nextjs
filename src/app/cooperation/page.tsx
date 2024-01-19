import {PageBody} from '@/app/ui/PageBody'
import {urls} from '@/app/lib/urls'
import {cooperation, CooperationConfig} from '@/app/lib/website'
import {Card} from '@/app/ui/Card'
import {PersonCard} from '@/app/cooperation/ui/PersonCard'
import Link from 'next/link'
import Image from 'next/image'
import React, {ReactNode} from 'react'
import {CooperationSection} from '@/app/cooperation/ui/CooperationSection'

// TODO card flip tailwind css??? https://www.youtube.com/watch?v=SJnRnQdjR0w
// TODO simplify the code

const SectionHeading = ({children}: {children: React.ReactNode}) => (
  <h3 className={'my-4'}>{children}</h3>
)

export default function Cooperation() {
  return (
    <PageBody title={urls[5].title} flexCol>
      {CooperationConfig.map((item, index) => (
        <CooperationSection key={index} title={item.title} data={item.data} type={item.type} />
      ))}
    </PageBody>
  )
}
