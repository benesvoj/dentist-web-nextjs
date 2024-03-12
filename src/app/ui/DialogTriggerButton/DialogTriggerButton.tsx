'use client'
import {ReactElement, ReactNode} from 'react'

export function DialogTriggerButton({onClick, children}: {onClick?: () => void; children: ReactNode}): ReactElement {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}