'use client'
import {PageBody} from '@/app/(web)/ui/PageBody'
import {urls} from '@/app/(web)/lib/urls'
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {PriceListProvider, usePriceListContext} from '@/context/PriceListContext'
import {useEffect} from 'react'

export default function PriceList() {
  const {priceListData, reloadPriceListData} = usePriceListContext()

  useEffect(() => {
    reloadPriceListData()
  }, [])

  return (
    <>
      <PageBody title={urls[2].title}>
        <Table>
          <TableCaption>Uvedené ceny jsou pouze orientační. Konečnou cenu ošetření stanovujeme až po vyšetření a
            stanovení léčebného plánu. Akceptujeme pouze platby v hotovosti.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Název výkonu</TableHead>
              <TableHead>Cena</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {priceListData.map(({id, title, price}) => (
              <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell>{price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PageBody>
    </>
  )
}
