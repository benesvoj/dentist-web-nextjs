import Image from 'next/image'

type CardProps = {
  children?: React.ReactNode
  heading?: string
  avatar?: string
  isFullWidth?: boolean
}

export const Card = ({children, heading, avatar, isFullWidth}: CardProps) => {

  const isFullWidthStyle = isFullWidth ? 'w-full max-w-5xl' : 'w-96'

  const cardStyle =
    `bg-white shadow rounded-lg ${isFullWidthStyle} dark:border-neutral-800 dark:bg-zinc-800/30 ` +
    'dark:from-inherit h-fit border border-transparent transition-colors hover:border-gray-300 ' +
    'hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:text-slate-300 relative'

  return (
    <div className={cardStyle}>
      <Image
      className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg dark:bg-zinc-800/30 dark:shadow-none'
        src={'/tooth-solid.svg'} alt={'tooth'} width={32} height={32} />
      <div className="px-4 py-5 sm:p-6 flex flex-col">
        {avatar && (
          <div className={'w-full flex justify-center'}>
            <Image
              className={'w-32 h-32 mb-3 rounded-full shadow-lg'}
              src={avatar}
              alt={heading || 'Avatar'}
              width={32}
              height={32}
            />
          </div>
        )}
        {heading && <h2 className="font-semibold text-2xl text-center pb-4">{heading}</h2>}
        {children}
      </div>
    </div>
  )
}
