import {PersonCard} from '@/app/(web)/cooperation/ui/PersonCard'
import React from 'react'
import {CooperationProps, CooperationTypeEnum} from '@/app/(web)/lib/types'
import Image from 'next/image'
import {Cooperation, CooperationType} from '@/lib/definition'

type CooperationSectionProps = {
  cooperationType: CooperationType
  cooperationData: Cooperation[]
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

export const CooperationSection = ({cooperationType, cooperationData}: CooperationSectionProps) => {
  return (
    <>
      <Heading>{cooperationType.name}</Heading>
      <div className={'flex gap-4'}>
        {cooperationData
          .filter((item) => item.cooperationTypeId === cooperationType.id)
          .map((item) => (
            <PersonCard
              key={item.id}
              title={item.name}
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
