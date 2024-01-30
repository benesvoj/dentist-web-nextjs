import Image from 'next/image'

type ServiceItemProps = {
  title: string
  image?: string
  hasFilter?: boolean
}

export const ServiceItem = ({image, title, hasFilter }: ServiceItemProps) => {
  const imageFilter =
    'invert(82%) sepia(59%) saturate(507%) hue-rotate(4deg) brightness(89%) contrast(88%)'

  return (
    <div className={'flex items-center justify-center flex-col w-1/2'}>
      {image && (
        <Image
          src={image}
          alt={title}
          width={50}
          height={50}
          style={hasFilter ? {filter: `${imageFilter}`} : {filter: 'none'}}
        />
      )}
      <h3 className="text-center">{title}</h3>
    </div>
  )
}