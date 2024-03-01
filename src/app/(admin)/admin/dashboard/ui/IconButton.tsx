import React from 'react'
import {clsx} from 'clsx'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  onClick?: () => void
}

export const IconButton = ({icon, onClick, className, ...props}: IconButtonProps) => {
  return(
    <div className='hover:border-2 border-2-transparent'>
      <button onClick={onClick} className={clsx('w-6', className)} {...props}>
        {icon}
      </button>
    </div>
  )
}