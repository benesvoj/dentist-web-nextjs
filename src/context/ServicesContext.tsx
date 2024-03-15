'use client'
import {createContext, ReactNode, useContext, useState} from 'react'
import {PriceListRaw, ServiceItem} from '@/lib/definition'
import {fetchPriceList} from '@/api/priceListApi'
import {fetchServices} from '@/api/servicesApi'

interface ServicesContextProps {
  servicesData: ServiceItem[]
  reloadServicesData: () => void
}

const ServicesContext = createContext<ServicesContextProps | undefined>(undefined)

export const ServicesProvider = ({children}: {children: ReactNode}) => {
  const [servicesData, setServicesData] = useState<ServiceItem[]>([])

  const reloadServicesData = async () => {
    const data = await fetchServices()
    setServicesData(data)
  }

  return (
    <ServicesContext.Provider value={{servicesData: servicesData, reloadServicesData}}>
      {children}
    </ServicesContext.Provider>
  )
}

export const useServiceContext = () => {
  const context = useContext(ServicesContext)

  if (context === undefined) {
    throw new Error('useServiceContext must be used within a ServiceProvider')
  }
  return context
}
