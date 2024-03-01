import React from 'react'

type HeadNavProps = {
  title: string
  children?: React.ReactNode
}

export const HeadNav = (props: HeadNavProps) => {
  return (
    <>
      <div className="flex justify-between w-full items-center px-4 mb-4">
        <h1 className="text-xl font-semibold">{props.title}</h1>
        {props.children}
      </div>
      <hr className='px-4' />
    </>
  )
}