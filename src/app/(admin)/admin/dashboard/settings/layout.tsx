import {EmployeeProvider} from '@/context/EmployeeContext'
import {CooperationProvider} from '@/context/CooperationContext'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <CooperationProvider>
      <EmployeeProvider>
        {children}
      </EmployeeProvider>
    </CooperationProvider>
  )
}