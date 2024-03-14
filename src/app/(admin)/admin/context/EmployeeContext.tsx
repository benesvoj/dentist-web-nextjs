'use client'
import {createContext, ReactNode, useContext, useState} from 'react'
import {EmployeePositionTypesProps, Employees} from '@/lib/definition'
import {addEmployeePosition, fetchEmployeePositionTypes, fetchEmployees} from '@/lib/employeeApi'

//TODO: probrat s Ludkem contexty

interface EmployeeContextProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  employeesData: Employees[];
  setEmployeesData: (data: Employees[]) => void;
  reloadData: () => Promise<void>;
  reloadPositionData: () => Promise<void>;
  positionsData: EmployeePositionTypesProps[];
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (isDeleteDialogOpen: boolean) => void;
}

const EmployeeContext = createContext<EmployeeContextProps | undefined>(undefined)

export const EmployeeProvider = ({children}: {children: ReactNode}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [employeesData, setEmployeesData] = useState<Employees[]>([])
  const [positionsData, setPositionsData] = useState<EmployeePositionTypesProps[]>([])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)

  const reloadData = async () => {
    const data = await fetchEmployees()
    setEmployeesData(data)
  }

  const reloadPositionData = async () => {
    const data = await fetchEmployeePositionTypes()
    setPositionsData(data)
  }

  return (
    <EmployeeContext.Provider value={{isDialogOpen, setIsDialogOpen, employeesData, setEmployeesData, reloadData, reloadPositionData, positionsData, isDeleteDialogOpen, setIsDeleteDialogOpen}}>
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
