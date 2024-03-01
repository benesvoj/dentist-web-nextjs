import {clsx} from 'clsx'

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Modal = ({children, className, ...props}: ModalProps) => {
  return(
    <div className={clsx('fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center', className)} {...props}>
      {children}
    </div>
  )
}