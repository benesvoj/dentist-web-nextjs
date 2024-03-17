import {ServicesProvider} from '@/context/ServicesContext'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <ServicesProvider>
      {children}
    </ServicesProvider>
  )
}