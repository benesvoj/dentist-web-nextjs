import './ui/styles.css'
import type {Metadata} from 'next'
import {SettingProvider} from '@/context/SettingsContext'

export const metadata: Metadata = {
  title: 'Administrace',
  description: 'Administrace aplikace pro správu webu',
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
      <SettingProvider>
        {children}
      </SettingProvider>
  )
}