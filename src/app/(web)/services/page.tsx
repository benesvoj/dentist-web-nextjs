import {urls} from '@/app/(web)/lib/urls'
import {services} from '@/app/(web)/lib/website'
import Image from 'next/image'
import {PageBody} from '@/app/(web)/ui/PageBody'

export default function Contact() {
  const imageFilter =
    'invert(82%) sepia(59%) saturate(507%) hue-rotate(4deg) brightness(89%) contrast(88%)'

  return (
    <PageBody title={urls[1].title} flexCol>
      {services.map(({title, image, description}, index) => (
        <div key={index} className={'flex flex-nowrap p-4 space-x-4'}>
          <div className={'w-1/2 flex items-center justify-center flex-col'}>
            {image && (
              <Image
                src={image}
                alt={title}
                width={50}
                height={50}
                style={{filter: `${imageFilter}`}}
              />
            )}
            <h3>{title}</h3>
          </div>
          <div className={'w-1/2 text-sm'}>{description}</div>
        </div>
      ))}
    </PageBody>
  )
}
