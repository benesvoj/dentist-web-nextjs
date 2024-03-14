'use client'

import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Employees} from '@/lib/definition'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {useEffect, useState} from 'react'
import {Button} from '@/components/ui/button'
import {NewEmployeeDialog} from '@/app/(admin)/admin/dashboard/employees/ui/NewEmployeeDialog'
import {useEmployeeContext} from '@/app/(admin)/admin/context/EmployeeContext'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {DotsVerticalIcon} from '@radix-ui/react-icons'
import {DeleteEmployeeDialog} from '@/app/(admin)/admin/dashboard/employees/ui/DeleteEmployeeDialog'

export default function Page() {
  const {employeesData, isDialogOpen, setIsDialogOpen, reloadData, positionsData, isDeleteDialogOpen, setIsDeleteDialogOpen} = useEmployeeContext()
  const [idToRemove, setIdToRemove] = useState<string>('')

  useEffect(() => {
    reloadData()
  }, [])

  const handleDelete = (id: string) => {
    console.log('delete', id)
    setIsDeleteDialogOpen(!isDeleteDialogOpen)
    setIdToRemove(id)
  }

  return (
    <>
      <HeadNav title="Seznam zamestnancu a jejich detail">
        <Button onClick={() => setIsDialogOpen(!isDialogOpen)}><PlusCircleIcon className="h-5 md:mr-4" /> Add
          new</Button>
      </HeadNav>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Celé jméno</TableHead>
            <TableHead>Pozice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employeesData.map(({id, titleBefore, firstName, lastName, titleAfter, position}: Employees) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
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
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[160px] bg-white">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    {id && <DropdownMenuItem onClick={() => handleDelete(id)}>Delete</DropdownMenuItem>}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isDialogOpen && <NewEmployeeDialog />}
      {isDeleteDialogOpen && <DeleteEmployeeDialog id={idToRemove} />}
    </>
  )
}