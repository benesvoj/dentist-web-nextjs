'use client'

import {createContext, ReactNode, useContext, useState} from 'react'
import {ContentSetup, Settings} from '@/lib/definition'
import {fetchServices} from '@/api/servicesApi'
import {fetchContentSetup, fetchSettings} from '@/api/setttingsApi'

interface SettingsContextProps {
  isDeleteDialogOpen: boolean
  setIsDeleteDialogOpen: (value: boolean) => void
  isDialogOpen: boolean
  setIsDialogOpen: (value: boolean) => void
  settingsData: Settings
  loadSettingsData: () => void
  contentSetupData: ContentSetup[]
  loadContentSetupData: () => void
}

const SettingContext = createContext<SettingsContextProps | undefined>(undefined)

export const SettingProvider = ({children}: {children: ReactNode}) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [settingsData, setSettingsData] = useState<Settings>({} as Settings)
  const [contentSetupData, setContentSetupData] = useState<ContentSetup[]>([])

  const loadSettingsData = async () => {
    const data = await fetchSettings()
    setSettingsData(data)
  }

  const loadContentSetupData = async () => {
    const data = await fetchContentSetup()
    setContentSetupData(data)
  }

  return (
    <SettingContext.Provider value={{isDeleteDialogOpen, setIsDeleteDialogOpen, isDialogOpen, setIsDialogOpen, settingsData, loadSettingsData, contentSetupData, loadContentSetupData}}>
      {children}
    </SettingContext.Provider>
  )
}

export const useSettingContext = () => {
  const context = useContext(SettingContext)

  if (context === undefined) {
    throw new Error('useSettingsContext must be used within a SettingsProvider')
  }
  return context
}
