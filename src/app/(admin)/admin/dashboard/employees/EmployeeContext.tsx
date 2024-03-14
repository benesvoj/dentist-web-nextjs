'use client'
import {createContext, ReactNode, useContext, useState} from 'react'
import {Employees} from '@/lib/definition'
import {fetchEmployees} from '@/lib/employeeApi'

//TODO: probrat s Ludkem contexty

interface EmployeeContextProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  employeesData: Employees[];
  setEmployeesData: (data: Employees[]) => void;
  reloadData: () => Promise<void>;
}

const EmployeeContext = createContext<EmployeeContextProps | undefined>(undefined)

export const EmployeeProvider = ({children}: {children: ReactNode}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [employeesData, setEmployeesData] = useState<Employees[]>([])

  const reloadData = async () => {
    const data = await fetchEmployees()
    setEmployeesData(data)
  }

  return (
    <EmployeeContext.Provider value={{isDialogOpen, setIsDialogOpen, employeesData, setEmployeesData, reloadData}}>
      {children}
    </EmployeeContext.Provider>
  )
}

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext)

  if (context === undefined) {
    throw new Error('useEmployeeContext must be used within a EmployeeProvider')
  }
  return context
}
