'use client'

import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {fetchEmployees} from '@/lib/employeeApi'
import {Employees} from '@/lib/definition'
import Link from 'next/link'
import {PlusIcon} from '@heroicons/react/24/solid'
import {routes} from '@/app/(admin)/admin/dashboard/utils/routes'
import {useEffect} from 'react'

export default function Page() {
  let employeesData: Employees[] = []

  useEffect(() => {
    const loadData = async () => {
      employeesData = await fetchEmployees()
    }
    console.log({
      POSTGRES_URL: process.env.POSTGRES_URL,
      POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
      NEXT_PUBLIC_POSTGRES_URL: process.env.NEXT_PUBLIC_POSTGRES_URL,
    })
    loadData()
  }, [])


  return (
    <>
      <HeadNav title="Seznam zamestnancu a jejich detail">
        <Link
          href={routes.createEmployee}
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Novy zamestanec</span>{' '}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
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
      {/*{isOpen && <NewEmployeeDialog />}*/}
    </>
  )
}