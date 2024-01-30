import {services} from '@/app/(web)/lib/website'
import {ServiceItem} from '@/app/(web)/ui/ServiceItem'

export const ServicesSection = () => {
  return (
    <div className="flex flex-row space-x-4 justify-between">
      {services.map(({id, title, image}) => (
        <ServiceItem title={title} image={image} key={id} hasFilter />
      ))}
    </div>
  )
}