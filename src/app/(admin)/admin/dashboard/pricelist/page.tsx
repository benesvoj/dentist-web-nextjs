'use client'

import {Button} from '@/components/ui/button'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {DotsVerticalIcon} from '@radix-ui/react-icons'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {usePriceListContext} from '@/context/PriceListContext'
import {NewPriceListItemDialog} from '@/app/(admin)/admin/dashboard/pricelist/ui/NewPriceListItemDialog'
import {useEffect} from 'react'

export default function Page() {
  const {isDialogOpen, setIsDialogOpen, reloadPriceListData, priceListData} = usePriceListContext()

  useEffect(() => {
    reloadPriceListData()
  }, [])

  return (
    <>
      <HeadNav title="Ceník">
        <Button onClick={() => setIsDialogOpen(!isDialogOpen)}><PlusCircleIcon className="h-5 md:mr-4" />Přidat záznam</Button>
      </HeadNav>
      <Card className="w-[600px] m-4">
        <CardHeader>
          <CardTitle>Seznam polozek</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
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
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[160px] bg-white">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {isDialogOpen && <NewPriceListItemDialog />}
    </>
  )
}