'use client'

import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Button} from '@/components/ui/button'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Cooperation} from '@/lib/definition'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {DotsVerticalIcon} from '@radix-ui/react-icons'
import {translation} from '@/locales/cs/translation'
import {useCooperationContext} from '@/context/CooperationContext'
import {useEffect, useState} from 'react'
import {CooperationItemDialog} from '@/app/(admin)/admin/dashboard/cooperation/ui/CooperationItemDialog'
import {useSettingContext} from '@/context/SettingsContext'
import {DeleteDialog} from '@/app/(admin)/admin/ui/DeleteDialog'
import {deleteCooperation} from '@/api/cooperationApi'

export default function Page() {
  const {
    cooperationData,
    loadCooperationData,
    cooperationTypes,
  } = useCooperationContext()
  const {
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    setIsDialogOpen,
    isDialogOpen,
  } = useSettingContext()
  const [isCreating, setIsCreating] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [itemToEdit, setItemToEdit] = useState<Cooperation | null>(null)

  useEffect(() => {
    loadCooperationData()
  }, [])

  const handleCreating = () => {
    setIsCreating(true)
    setIsDialogOpen(!isDialogOpen)
  }

  const handleDelete = (id: string) => {
    setIsDeleteDialogOpen(!isDeleteDialogOpen)
    setSelectedId(id)
  }

  const handleConfirmedRemoval = () => {

    if (!selectedId) {
      throw new Error('No cooperation ID for removal.')
    }

    deleteCooperation(selectedId)
      .then(() => {
        loadCooperationData()
        setSelectedId(null)
        setIsDeleteDialogOpen(!isDeleteDialogOpen)
      })
      .catch((error) => {
        console.error('Failed to delete cooperation:', error)
        throw new Error('Failed to delete cooperation.')
      })
  }

  const handleEdit = (id: string) => {
    setIsCreating(false)
    const data = cooperationData.find((item) => item.id === id)
    if (data) {
      setItemToEdit(data)
    }
    setIsDialogOpen(!isDialogOpen)
  }

  return (
    <>
      <HeadNav title={translation.admin.cooperation.heading}>
        <Button onClick={handleCreating}><PlusCircleIcon className="h-5 md:mr-4" />{translation.admin.buttons.add}
        </Button>
      </HeadNav>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{translation.general.title}</TableHead>
            <TableHead>{translation.general.address}</TableHead>
            <TableHead>{translation.general.phone}</TableHead>
            <TableHead>{translation.general.email}</TableHead>
            <TableHead>{translation.general.webUrl}</TableHead>
            <TableHead>{translation.general.description}</TableHead>
            <TableHead>{translation.admin.settings.cooperationTypes.title}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cooperationData.map(({
                                  id,
                                  name,
                                  address,
                                  phone,
                                  email,
                                  www,
                                  description,
                                  cooperationTypeId,
                                }: Cooperation) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell>{address}</TableCell>
              <TableCell>{phone}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{www}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>{cooperationTypes.find((value) => value.id === cooperationTypeId)?.name ?? ''}</TableCell>
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
                    {id && <DropdownMenuItem
                      onClick={() => handleEdit(id)}>{translation.admin.buttons.edit}</DropdownMenuItem>}
                    {id &&
                      <DropdownMenuItem
                        onClick={() => handleDelete(id)}>{translation.admin.buttons.delete}</DropdownMenuItem>}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isDialogOpen && <CooperationItemDialog isCreating={isCreating} cooperationItem={itemToEdit} />}
      {isDeleteDialogOpen && <DeleteDialog handleConfirmedRemoval={handleConfirmedRemoval} />}
    </>
  )
}