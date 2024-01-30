import {PersonCard} from '@/app/(web)/cooperation/ui/PersonCard'
import React from 'react'
import {CooperationProps, CooperationTypeEnum} from '@/app/(web)/lib/types'
import Image from 'next/image'

type CooperationSectionProps = {
  title: string
  data: CooperationProps[]
  type: CooperationTypeEnum
}

const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <h3 className={'mt-8 text-center text-2xl font-semibold'}>{children}</h3>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-black border-0 rounded dark:bg-gray-700" />
        <div className="px-4">
          <Image src={'/tooth-solid.svg'} alt={'Tooth'} width={24} height={24} />
        </div>
        <hr className="w-64 h-1 my-8 bg-black border-0 rounded dark:bg-gray-700" />
      </div>
    </>
  )
}

export const CooperationSection = ({title, data, type}: CooperationSectionProps) => {
  return (
    <>
      <Heading>{title}</Heading>
      <div className={'flex gap-4'}>
        {data
          .filter((item) => item.type === type)
          .map((item) => (
            <PersonCard
              key={item.id}
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
