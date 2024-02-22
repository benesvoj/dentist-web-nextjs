import React from 'react'

export const ButtonGroup = ({children}: {children: React.ReactNode}) => {
  return(
    <div className='w-full flex justify-end gap-4 my-4'>
      {children}
    </div>
  )
}