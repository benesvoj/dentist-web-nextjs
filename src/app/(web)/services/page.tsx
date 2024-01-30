import {urls} from '@/app/(web)/lib/urls'
import {services} from '@/app/(web)/lib/website'
import Image from 'next/image'
import {PageBody} from '@/app/(web)/ui/PageBody'
import {ServiceItem} from '@/app/(web)/ui/ServiceItem'

export default function Services() {
  return (
    <PageBody title={urls[1].title} flexCol>
      {services.map(({id, title, image, description}) => (
        <div key={id} className={'flex flex-nowrap p-4 space-x-4'}>
          <ServiceItem title={title} image={image} hasFilter />
          <div className={'w-1/2 text-sm'}>{description}</div>
        </div>
      ))}
    </PageBody>
  )
}
