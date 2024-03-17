'use client'
import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {useEffect} from 'react'
import {NewPositionTypeDialog} from '@/app/(admin)/admin/dashboard/settings/ui/NewPositionTypeDialog'
import {useEmployeeContext} from '@/context/EmployeeContext'

export default function Page() {
  const {isDialogOpen, setIsDialogOpen, reloadPositionData, positionsData} = useEmployeeContext()

  useEffect(() => {
    reloadPositionData()
  }, )

  return (
    <>
      <HeadNav title="Nastaveni" />
      <div className="m-4">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">Typy zamestnancu
              <Button variant="ghost" className="p-2" onClick={() => setIsDialogOpen(!isDialogOpen)}><PlusCircleIcon className="w-4 h-4" /></Button>
            </CardTitle>
            <CardDescription>Lorem ipsum</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kód</TableHead>
                  <TableHead>Název</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {positionsData.map(({value, label}, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {value}
                    </TableCell>
                    <TableCell>
                      {label}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      {isDialogOpen && <NewPositionTypeDialog />}
    </>
  )
}