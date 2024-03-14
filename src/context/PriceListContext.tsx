'use client'
import {createContext, ReactNode, useContext, useState} from 'react'
import {PriceListRaw} from '@/lib/definition'
import {fetchPriceList} from '@/api/priceListApi'

interface PriceListContextProps {
  isDialogOpen: boolean
  setIsDialogOpen: (value: boolean) => void
  priceListData: PriceListRaw[]
  reloadPriceListData: () => void
}

const PriceListContext = createContext<PriceListContextProps | undefined>(undefined)

export const PriceListProvider = ({children}: {children: ReactNode}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [priceListData, setPriceListData] = useState<PriceListRaw[]>([])

  const reloadPriceListData = async () => {
    const data = await fetchPriceList()
    setPriceListData(data)
  }

  return (
    <PriceListContext.Provider value={{isDialogOpen, setIsDialogOpen, priceListData, reloadPriceListData}}>
      {children}
    </PriceListContext.Provider>
  )
}

export const usePriceListContext = () => {
  const context = useContext(PriceListContext)

  if (context === undefined) {
    throw new Error('usePriceListContext must be used within a PriceListProvider')
  }
  return context
}
