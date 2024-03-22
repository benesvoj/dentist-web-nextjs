import {CooperationProvider} from '@/context/CooperationContext'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <CooperationProvider>
      {children}
    </CooperationProvider>
  )
}