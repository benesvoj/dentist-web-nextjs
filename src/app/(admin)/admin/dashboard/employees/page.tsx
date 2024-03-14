'use client'

import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Employees} from '@/lib/definition'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {useEffect} from 'react'
import {Button} from '@/components/ui/button'
import {NewEmployeeDialog} from '@/app/(admin)/admin/dashboard/employees/ui/NewEmployeeDialog'
import {useEmployeeContext} from '@/app/(admin)/admin/context/EmployeeContext'

export default function Page() {
  const {employeesData, isDialogOpen, setIsDialogOpen, reloadData, positionsData} = useEmployeeContext()

  useEffect(() => {
    reloadData()
  }, [])

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
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isDialogOpen && <NewEmployeeDialog />}
    </>
  )
}