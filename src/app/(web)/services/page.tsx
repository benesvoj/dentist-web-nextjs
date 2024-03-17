'use client'
import {urls} from '@/app/(web)/lib/urls'
import {services} from '@/app/(web)/lib/website'
import Image from 'next/image'
import {PageBody} from '@/app/(web)/ui/PageBody'
import {ServiceItem} from '@/app/(web)/ui/ServiceItem'
import {ServicesProvider, useServiceContext} from '@/context/ServicesContext'
import {useEffect} from 'react'

export default function Services() {
  const {servicesData, reloadServicesData} = useServiceContext()

  useEffect(() => {
    reloadServicesData()
  }, [])

  return (
    <ServicesProvider>
      <PageBody title={urls[1].title} flexCol>
        {servicesData.map(({id, title, image, description}) => (
          <div key={id} className={'flex flex-nowrap p-4 space-x-4'}>
            <ServiceItem title={title} image={image} hasFilter />
            <div className={'w-1/2 text-sm'}>{description}</div>
          </div>
        ))}
      </PageBody>
    </ServicesProvider>
  )
}
