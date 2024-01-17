type PageHeadingProps = {
  title: string
}

export function PageHeading({title}: PageHeadingProps) {
  return (
    <div className={'w-full p-4 rounded'} style={{backgroundColor: '#cec53e'}}>
      <h2 className={'text-2xl text-white'}>{title}</h2>
    </div>
  )
}
