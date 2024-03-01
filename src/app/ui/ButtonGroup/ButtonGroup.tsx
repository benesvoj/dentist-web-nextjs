import React from 'react'
import {clsx} from 'clsx'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const ButtonGroup = ({children, className}: ButtonGroupProps) => {
  return(
    <div className={clsx('w-100 flex justify-end gap-4', className)}>
      {children}
    </div>
  )
}