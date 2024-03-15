'use client'
import {createContext, ReactNode, useContext, useState} from 'react'
import {PriceListRaw} from '@/lib/definition'
import {fetchPriceList} from '@/api/priceListApi'

interface SettingsContextProps {
  isDeleteDialogOpen: boolean
  setIsDeleteDialogOpen: (value: boolean) => void
}

const SettingContext = createContext<SettingsContextProps | undefined>(undefined)

export const SettingProvider = ({children}: {children: ReactNode}) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)

  return (
    <SettingContext.Provider value={{isDeleteDialogOpen, setIsDeleteDialogOpen}}>
      {children}
    </SettingContext.Provider>
  )
}

export const useSettingContext = () => {
  const context = useContext(SettingContext)

  if (context === undefined) {
    throw new Error('usePriceListContext must be used within a PriceListProvider')
  }
  return context
}
