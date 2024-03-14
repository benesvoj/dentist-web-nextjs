'use client'
import {createContext, ReactNode, useContext, useState} from 'react'
import {EmployeePositionTypesProps, Employee} from '@/lib/definition'
import {fetchEmployeePositionTypes, fetchEmployees} from '@/api/employeeApi'

//TODO: probrat s Ludkem contexty

interface EmployeeContextProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  employeesData: Employee[];
  setEmployeesData: (data: Employee[]) => void;
  reloadData: () => Promise<void>;
  reloadPositionData: () => Promise<void>;
  positionsData: EmployeePositionTypesProps[];
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (isDeleteDialogOpen: boolean) => void;
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isEditDialogOpen: boolean) => void;
}

const EmployeeContext = createContext<EmployeeContextProps | undefined>(undefined)

export const EmployeeProvider = ({children}: {children: ReactNode}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [employeesData, setEmployeesData] = useState<Employee[]>([])
  const [positionsData, setPositionsData] = useState<EmployeePositionTypesProps[]>([])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false)

  const reloadData = async () => {
    const data = await fetchEmployees()
    setEmployeesData(data)
  }

  const reloadPositionData = async () => {
    const data = await fetchEmployeePositionTypes()
    setPositionsData(data)
  }

  return (
    <EmployeeContext.Provider value={{
      isDialogOpen,
      setIsDialogOpen,
      employeesData,
      setEmployeesData,
      reloadData,
      reloadPositionData,
      positionsData,
      isDeleteDialogOpen,
      setIsDeleteDialogOpen,
      isEditDialogOpen,
      setIsEditDialogOpen,
    }}>
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
