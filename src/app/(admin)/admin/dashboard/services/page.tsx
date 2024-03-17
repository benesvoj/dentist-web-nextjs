'use client'

import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Button} from '@/components/ui/button'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import Image from 'next/image'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {DotsVerticalIcon} from '@radix-ui/react-icons'
import {translation} from '@/locales/cs/translation'
import {useSettingContext} from '@/context/SettingsContext'
import {DeleteDialog} from '@/app/(admin)/admin/ui/DeleteDialog'
import {ServiceDialog} from '@/app/(admin)/admin/dashboard/services/ui/ServiceDialog'
import {useEffect, useState} from 'react'
import {useServiceContext} from '@/context/ServicesContext'
import {fetchServiceById} from '@/api/servicesApi'
import {ServiceItem} from '@/lib/definition'

export default function Page() {
  const {isDeleteDialogOpen, setIsDeleteDialogOpen, isDialogOpen, setIsDialogOpen} = useSettingContext()
  const {servicesData, reloadServicesData} = useServiceContext()
  const [isCreating, setIsCreating] = useState(false)
  const [serviceItem, setServiceItem] = useState<ServiceItem | null>(null)

  useEffect(() => {
    reloadServicesData()
  }, [])

  const fetchServiceItem = async (id: string) => {
    setServiceItem(await fetchServiceById(id))
  }

  const handleEdit = (id: string) => {
    setIsCreating(false)
    setIsDialogOpen(!isDialogOpen)
    fetchServiceItem(id)
  }

  const handleCreating = () => {
    setIsCreating(true)
    setIsDialogOpen(!isDialogOpen)
  }

  const handleRemove = (id: string) => {
    setIsDeleteDialogOpen(!isDeleteDialogOpen)
  }

  return (
    <>
      <HeadNav title={translation.admin.services.heading}>
        <Button onClick={handleCreating}><PlusCircleIcon className="h-5 md:mr-4" />{translation.admin.buttons.add}</Button>
      </HeadNav>
      <Card className="w-1/2 m-4">
        <CardHeader>
          <CardTitle>{translation.admin.services.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{translation.admin.services.table.nameAndDescription}</TableHead>
                <TableHead>{translation.admin.services.table.icon}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {servicesData.map(({id, title, description, image}) => (
                <TableRow key={id}>
                  <TableCell>
                    <p className="font-semibold">{title}</p>
                    <p>{description}</p>
                  </TableCell>
                  <TableCell>
                    {image !== '' ? <Image src={image} alt={title} width={32} height={32} /> : 'no image'}
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
                        {id && <DropdownMenuItem
                          onClick={() => handleEdit(id.toString())}>{translation.admin.buttons.edit}</DropdownMenuItem>}
                        {id && <DropdownMenuItem
                          onClick={() => handleRemove('abcd')}>{translation.admin.buttons.delete}</DropdownMenuItem>}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {isDialogOpen && <ServiceDialog isCreating={isCreating} serviceItem={serviceItem} />}
      {isDeleteDialogOpen && <DeleteDialog handleConfirmedRemoval={() => console.log('delete')} />}
    </>
  )
}