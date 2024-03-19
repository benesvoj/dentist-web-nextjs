import Image from 'next/image'

type LogoProps = {
  title: string
  subtitle: string
  image?: string
}

export const Logo = ({title, subtitle, image}: LogoProps) => {
  return (
    <>
      <Image
        src={image || '/lsdent_logo_icon.png'}
        alt={title || 'Logo'}
        width={0}
        height={0}
        sizes={'100wh'}
        priority
        className="rounded-full w-1/4 h-auto"
      />
      <div className="flex-col">
        <h1 className="font-semibold text-3xl">{title}</h1>
        <div className="text-sm">{subtitle}</div>
      </div>
    </>
  )
}
