import './ui/styles.css'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Administrace',
  description: 'Administrace aplikace pro správu webu'
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full h-80'>
      {children}
    </div>
  )
}