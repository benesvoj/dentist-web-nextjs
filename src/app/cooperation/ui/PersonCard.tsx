import Image from 'next/image'
import Link from 'next/link'

type PersonCardProps = {
  title: string
  subtitle?: string
  address: string
  phone?: string
  email?: string
  www?: string
  image?: string
}

export const PersonCard = (props: PersonCardProps) => {
  return (
    <div className="group h-80 w-80 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="absolute z-10 text-3xl font-bold group-hover:hidden">{props.title}</h3>
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src="/lsdent_logo_icon.png"
            alt=""
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
                  <Image src={'/phone-solid.svg'} alt={'phone'} width={20} height={20} />
                </Link>
              )}
              {props.email && (
                <Link href={'mailto:' + props.email}>
                  <Image src={'/envelope-solid.svg'} alt={'phone'} width={20} height={20} />
                </Link>
              )}
              {props.www && (
                <Link href={'https://' + props.www} target={'_blank'} rel={'noreferrer'}>
                  <Image src={'/globe-solid.svg'} alt={'phone'} width={20} height={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
