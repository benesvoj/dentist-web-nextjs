'use client'

import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {fetchEmployees} from '@/lib/employeeApi'
import {Employees} from '@/lib/definition'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {useEffect, useState} from 'react'
import {Button} from '@/components/ui/button'
import {NewEmployeeDialog} from '@/app/(admin)/admin/dashboard/employees/ui/NewEmployeeDialog'

export default function Page() {
  const [employeesData, setEmployeesData] = useState<Employees[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  const loadData = async () => {
    const data = await fetchEmployees()
    setEmployeesData(data)
  }

  useEffect(() => {
    loadData()
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
              <TableCell>{position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isDialogOpen && <NewEmployeeDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} loadData={loadData} />}
    </>
  )
}