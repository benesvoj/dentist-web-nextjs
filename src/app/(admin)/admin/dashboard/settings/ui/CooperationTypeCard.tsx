'use client'

import {useEffect} from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {useCooperationContext} from '@/context/CooperationContext'
import {NewCooperationTypeDialog} from '@/app/(admin)/admin/dashboard/settings/ui/NewCooperationTypeDialog'
import {translation} from '@/locales/cs/translation'
import {useSettingContext} from '@/context/SettingsContext'

export const CooperationTypeCard = () => {
  const {loadCooperationTypes: loadData, cooperationTypes: data} = useCooperationContext()
  const {isDialogOpen, setIsDialogOpen}  = useSettingContext()

  useEffect(() => {
    loadData()
  },[] )

  return(
    <>
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">{translation.admin.settings.cooperationTypes.title}
            <Button variant="ghost" className="p-2" onClick={() => setIsDialogOpen(!isDialogOpen)}><PlusCircleIcon className="w-4 h-4" /></Button>
          </CardTitle>
          <CardDescription>{translation.admin.settings.cooperationTypes.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{translation.admin.settings.cooperationTypes.table.name}</TableHead>
                <TableHead>{translation.admin.settings.cooperationTypes.table.nameShort}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map(({id, name, nameShort}) => (
                <TableRow key={id}>
                  <TableCell>
                    {name}
                  </TableCell>
                  <TableCell>
                    {nameShort}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {isDialogOpen && <NewCooperationTypeDialog />}
    </>
  )
}