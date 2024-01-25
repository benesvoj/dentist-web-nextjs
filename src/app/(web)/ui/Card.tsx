import Image from 'next/image'

type CardProps = {
  children?: React.ReactNode
  heading?: string
  avatar?: string
}

export const Card = ({children, heading, avatar}: CardProps) => {
  const cardStyle =
    'bg-white overflow-hidden shadow rounded-lg w-96 dark:border-neutral-800 dark:bg-zinc-800/30 ' +
    'dark:from-inherit h-fit border border-transparent transition-colors hover:border-gray-300 ' +
    'hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:text-slate-300'

  return (
    <div className={cardStyle}>
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
