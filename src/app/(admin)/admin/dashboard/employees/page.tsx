'use client'

import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Employee} from '@/lib/definition'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {useEffect, useState} from 'react'
import {Button} from '@/components/ui/button'
import {NewEmployeeDialog} from '@/app/(admin)/admin/dashboard/employees/ui/NewEmployeeDialog'
import {useEmployeeContext} from '@/context/EmployeeContext'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {DotsVerticalIcon} from '@radix-ui/react-icons'
import {EditEmployeeDialog} from '@/app/(admin)/admin/dashboard/employees/ui/EditEmployeeDialog'
import {deleteEmployee, fetchEmployeeById} from '@/api/employeeApi'
import {useSettingContext} from '@/context/SettingsContext'
import {translation} from '@/locales/cs/translation'
import {DeleteDialog} from '@/app/(admin)/admin/ui/DeleteDialog'
import {useToast} from '@/components/ui/use-toast'

export default function Page() {
  const {
    employeesData,
    reloadData: loadEmployeesData,
    reloadPositionData,
    positionsData,
    isEditDialogOpen,
    setIsEditDialogOpen,
  } = useEmployeeContext()
  const {isDeleteDialogOpen, setIsDeleteDialogOpen, isDialogOpen, setIsDialogOpen} = useSettingContext()

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [employee, setEmployee] = useState<Employee | null>(null)

  const {toast} = useToast()

  useEffect(() => {
    loadEmployeesData()
    reloadPositionData()
  }, [])

  const fetchEmployee = async (id: string) => {
    setEmployee(await fetchEmployeeById(id))
  }

  const handleEdit = (id: string) => {
    setIsEditDialogOpen(!isEditDialogOpen)
    fetchEmployee(id)
  }

  const handleDelete = (id: string) => {
    setIsDeleteDialogOpen(!isDeleteDialogOpen)
    setSelectedId(id)
  }

  const handleConfirmedRemoval = () => {

    if (!selectedId) {
      throw new Error('No ID for removal.')
    }

    deleteEmployee(selectedId)
      .then(() => {
        loadEmployeesData()
        setSelectedId(null)
        setIsDeleteDialogOpen(!isDeleteDialogOpen)
        toast({
          title: translation.admin.employees.toast.employeeDeleted,
          description: translation.admin.employees.toast.employeeDeletedDescription,
        })
      })
      .catch((error) => {
        console.error('Failed to delete employee:', error)
        throw new Error('Failed to delete employee.')
      })
  }

  return (
    <>
      <HeadNav title={translation.admin.employees.heading}>
        <Button onClick={() => setIsDialogOpen(!isDialogOpen)}><PlusCircleIcon className="h-5 md:mr-4" />{translation.admin.buttons.add}</Button>
      </HeadNav>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{translation.admin.employees.table.fullName}</TableHead>
            <TableHead>{translation.admin.employees.table.position}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employeesData.map(({id, titleBefore, firstName, lastName, titleAfter, position}: Employee) => (
            <TableRow key={id}>
              <TableCell>{titleBefore} {firstName} {lastName} {titleAfter}</TableCell>
              <TableCell>
                {positionsData.find(({value}) => value === position)?.label || position}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                      <DotsVerticalIcon className="h-4 w-4" />
                      <span className="sr-only">{translation.admin.buttons.openMenu}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[160px] bg-white">
                    {/*TODO: add zkusenosti*/}
                    <DropdownMenuItem>{translation.admin.employees.buttons.addExperience}</DropdownMenuItem>
                    {id && <DropdownMenuItem onClick={() => handleEdit(id)}>{translation.admin.buttons.edit}</DropdownMenuItem>}
                    {id && <DropdownMenuItem onClick={() => handleDelete(id)}>{translation.admin.buttons.delete}</DropdownMenuItem>}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isDialogOpen && <NewEmployeeDialog />}
      {isDeleteDialogOpen && <DeleteDialog handleConfirmedRemoval={handleConfirmedRemoval} />}
      {isEditDialogOpen && employee && <EditEmployeeDialog employee={employee} />}
    </>
  )
}