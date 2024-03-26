'use client'

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {NewPositionTypeDialog} from '@/app/(admin)/admin/dashboard/settings/ui/NewPositionTypeDialog'
import {useEmployeeContext} from '@/context/EmployeeContext'
import {useEffect} from 'react'
import {useSettingContext} from '@/context/SettingsContext'
import {translation} from '@/locales/cs/translation'

export const EmployeeTypeCard = () => {
  const {reloadPositionData, positionsData} = useEmployeeContext()
  const {isDialogOpen, setIsDialogOpen} = useSettingContext()

  useEffect(() => {
    reloadPositionData()
  }, [])

  return (
    <>
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">{translation.admin.settings.positionTypes.title}
            <Button variant="ghost" className="p-2" onClick={() => setIsDialogOpen(!isDialogOpen)}><PlusCircleIcon
              className="w-4 h-4" /></Button>
          </CardTitle>
          <CardDescription>{translation.admin.settings.positionTypes.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{translation.admin.settings.positionTypes.code}</TableHead>
                <TableHead>{translation.admin.settings.positionTypes.name}</TableHead>
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
      {isDialogOpen && <NewPositionTypeDialog />}
    </>
  )
}