'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

type PersonCardProps = {
  title: string
  subtitle?: string
  address: string
  phone?: string
  email?: string
  www?: string
  image?: string
}

type IconImageProps = {
  image: string
  alt?: string
}

// TODO: hovering effect an all icon components (phone, email, www)

export const PersonCard = (props: PersonCardProps) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const IconImageStyle = {
    filter: isHover
      ? 'invert(82%) sepia(59%) saturate(507%) hue-rotate(4deg) brightness(89%) contrast(88%)'
      : 'invert(100%) sepia(100%) saturate(1%) hue-rotate(164deg) brightness(107%) contrast(102%)',
  }

  const IconImage = (props: IconImageProps) => (
    <Image
      src={props.image}
      alt={props.alt || 'Kontaktní údaj'}
      width={20}
      height={20}
      style={IconImageStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )

  // console.log(isHover)

  return (
    <div className="group h-80 w-80 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h3 className="absolute z-10 text-3xl font-bold group-hover:hidden">{props.title}</h3>
          <Image
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src="/lsdent_logo_icon.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">{props.title}</h3>
            <p className="text-lg">{props.subtitle}</p>
            <p className="text-base">{props.address}</p>
            <div className={'flex space-x-4 py-4'}>
              {props.phone && (
                <Link href={'tel:' + props.phone}>
                  <IconImage image={'/phone-solid.svg'} />
                </Link>
              )}
              {props.email && (
                <Link href={'mailto:' + props.email}>
                  <IconImage image={'/envelope-solid.svg'} />
                </Link>
              )}
              {props.www && (
                <Link href={'https://' + props.www} target={'_blank'} rel={'noreferrer'}>
                  <IconImage image={'/globe-solid.svg'} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
