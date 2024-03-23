'use client'

import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {fetchCooperationTypes} from '@/api/cooperationApi'
import {fetchNews} from '@/api/dashboardApi'
import {News} from '@/lib/definition'

interface DashboardContextProps {
  isDialogOpen: boolean
  setIsDialogOpen: (value: boolean) => void
  newsData: News[]
  loadNewsData: () => void
}

const DashboardContext = createContext<DashboardContextProps | undefined>(undefined)

export const DashboardProvider = ({children}: {children: ReactNode}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [newsData, setNewsData] = useState<News[]>([])

  const loadNewsData = async() => {
    const data = await fetchNews()
    setNewsData(data)
  }

  return (
    <DashboardContext.Provider value={{isDialogOpen, setIsDialogOpen, newsData, loadNewsData}}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  const context = useContext(DashboardContext)

  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardProvider')
  }
  return context
}
