'use client'

import {createContext, ReactNode, useContext, useState} from 'react'

interface SettingsContextProps {
  isDeleteDialogOpen: boolean
  setIsDeleteDialogOpen: (value: boolean) => void
  isDialogOpen: boolean
  setIsDialogOpen: (value: boolean) => void
}

const SettingContext = createContext<SettingsContextProps | undefined>(undefined)

export const SettingProvider = ({children}: {children: ReactNode}) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  return (
    <SettingContext.Provider value={{isDeleteDialogOpen, setIsDeleteDialogOpen, isDialogOpen, setIsDialogOpen}}>
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
