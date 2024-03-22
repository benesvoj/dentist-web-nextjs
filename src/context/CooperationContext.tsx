'use client'

import {createContext, ReactNode, useContext, useState} from 'react'
import {Cooperation, CooperationType} from '@/lib/definition'
import {fetchCooperation, fetchCooperationTypes} from '@/api/cooperationApi'

interface CooperationContextProps {
  cooperationData: Cooperation[]
  loadCooperationData: () => void
  cooperationTypes: CooperationType[]
  loadCooperationTypes: () => void
  isDialogOpen: boolean
  setIsDialogOpen: (value: boolean) => void
}

const CooperationContext = createContext<CooperationContextProps | undefined>(undefined)

export const CooperationProvider = ({children}: {children: ReactNode}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [cooperationData, setCooperationData] = useState<Cooperation[]>([])
  const [cooperationTypes, setCooperationTypes] = useState<CooperationType[]>([])

  const loadCooperationTypes = async() => {
    const data = await fetchCooperationTypes()
    setCooperationTypes(data)
  }

  const loadCooperationData = async () => {
    const data = await fetchCooperation()
    setCooperationData(data)
  }

  return (
    <CooperationContext.Provider value={{cooperationData, loadCooperationData, cooperationTypes, loadCooperationTypes, isDialogOpen, setIsDialogOpen}}>
      {children}
    </CooperationContext.Provider>
  )
}

export const useCooperationContext = () => {
  const context = useContext(CooperationContext)

  if (context === undefined) {
    throw new Error('useCooperationContext must be used within a CooperationProvider')
  }
  return context
}
