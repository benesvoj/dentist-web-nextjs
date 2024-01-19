import {cooperation} from '@/app/lib/website'
import {PersonCard} from '@/app/cooperation/ui/PersonCard'
import React from 'react'
import {CooperationProps, CooperationTypeEnum} from '@/app/lib/types'

type CooperationSectionProps = {
  title: string
  data: CooperationProps[]
  type: CooperationTypeEnum
}

const Heading = ({children}: {children: React.ReactNode}) => <h3 className={'my-4'}>{children}</h3>

export const CooperationSection = ({title, data, type}: CooperationSectionProps) => {
  return (
    <>
      <Heading>{title}</Heading>
      <div className={'flex gap-4'}>
        {data
          .filter((item) => item.type === type)
          .map((item, index) => (
            <PersonCard
              key={index}
              title={item.title}
              address={item.address}
              subtitle={item.description}
              phone={item.phone}
              email={item.email}
              www={item.www}
            />
          ))}
      </div>
    </>
  )
}
