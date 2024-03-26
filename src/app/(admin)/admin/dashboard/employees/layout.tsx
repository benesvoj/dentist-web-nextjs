import {EmployeeProvider} from '@/context/EmployeeContext'
import {SettingProvider} from '@/context/SettingsContext'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <SettingProvider>
      <EmployeeProvider>
        {children}
      </EmployeeProvider>
    </SettingProvider>
  )
}