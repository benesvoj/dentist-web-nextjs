'use client'

import {Button} from '@/components/ui/button'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {usePriceListContext} from '@/context/PriceListContext'
import {useEffect, useState} from 'react'
import {fetchPriceListItemById, removePriceListItem} from '@/api/priceListApi'
import {PriceListRaw} from '@/lib/definition'
import {useSettingContext} from '@/context/SettingsContext'
import {DeleteDialog} from '@/app/(admin)/admin/ui/DeleteDialog'
import {DotsVerticalIcon} from '@radix-ui/react-icons'
import {PriceListItemDialog} from '@/app/(admin)/admin/dashboard/pricelist/ui/PriceListItemDialog'
import {translation} from '@/locales/cs/translation'

export default function Page() {
  const {reloadPriceListData, priceListData} = usePriceListContext()
  const [isCreating, setIsCreating] = useState(false)
  const [priceListItem, setPriceListItem] = useState<PriceListRaw | null>(null)
  const {isDeleteDialogOpen, setIsDeleteDialogOpen, isDialogOpen, setIsDialogOpen} = useSettingContext()
  const [idForRemoval, setIdForRemoval] = useState<string>('')

  useEffect(() => {
    reloadPriceListData()
  }, [])

  const fetchPriceListItem = async (id: string) => {
    setPriceListItem(await fetchPriceListItemById(id))
  }

  const handleEdit = (id: string) => {
    setIsCreating(false)
    setIsDialogOpen(!isDialogOpen)
    fetchPriceListItem(id)
  }

  const handleCreating = () => {
    setIsCreating(true)
    setIsDialogOpen(!isDialogOpen)
  }

  const handleRemoval = (id: string) => {
    setIdForRemoval(id)
    setIsDeleteDialogOpen(!isDeleteDialogOpen)
  }

  const handleConfirmedRemoval = () => {
    removePriceListItem(idForRemoval)
      .then(() => {
        setIsDeleteDialogOpen(!isDeleteDialogOpen)
        reloadPriceListData()
      })
      .catch((error) => {
        console.error('Error removing price list item:', error)
      })
  }


  return (
    <>
      <HeadNav title={translation.admin.priceList.heading}>
        <Button onClick={handleCreating}><PlusCircleIcon className="h-5 md:mr-4" />{translation.admin.buttons.add}</Button>
      </HeadNav>
      <Card className="w-[600px] m-4">
        <CardHeader>
          <CardTitle>{translation.admin.priceList.tableHeading}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{translation.admin.priceList.itemName}</TableHead>
                <TableHead>{translation.admin.priceList.itemPrice}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {priceListData.map(({id, title, price}) => (
                <TableRow key={id}>
                  <TableCell>{title}</TableCell>
                  <TableCell>{price}</TableCell>
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
                        {id && <DropdownMenuItem onClick={() => handleEdit(id)}>{translation.admin.buttons.edit}</DropdownMenuItem>}
                        {id && <DropdownMenuItem
                          onClick={() => handleRemoval(id)}>{translation.admin.buttons.delete}</DropdownMenuItem>}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {isDialogOpen && <PriceListItemDialog isCreating={isCreating} priceListItem={priceListItem} />}
      {isDeleteDialogOpen && <DeleteDialog handleConfirmedRemoval={handleConfirmedRemoval} />}
    </>
  )
}