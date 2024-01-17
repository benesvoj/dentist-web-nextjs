import {PageHeading} from '@/app/ui/PageHeading'

type PageBodyProps = {
  title: string
  children?: React.ReactNode
  flexCol?: boolean
}

export const PageBody = ({title, children, flexCol}: PageBodyProps) => {
  const flexColClass = flexCol ? 'flex-col' : 'flex-row'

  return (
    <div className={'flex w-full h-max flex-col max-w-5xl'}>
      <PageHeading title={title} />
      {children && <div className={`flex w-full ${flexColClass} space-x-4`}>{children}</div>}
    </div>
  )
}
