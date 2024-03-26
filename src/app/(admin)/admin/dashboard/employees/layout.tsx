import {EmployeeProvider} from '@/context/EmployeeContext'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <EmployeeProvider>
      {children}
    </EmployeeProvider>
  )
}