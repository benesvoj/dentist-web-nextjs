'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {usePriceListContext} from '@/context/PriceListContext'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {addPriceListItem, fetchPriceList, updatePriceListItem} from '@/api/priceListApi'
import {PriceListRaw} from '@/lib/definition'
import {useSettingContext} from '@/context/SettingsContext'
import {translation} from '@/locales/cs/translation'

type PriceLIstItemDialogProps= {
  isCreating: boolean,
  priceListItem?: PriceListRaw | null
}

export const PriceListItemDialog = ({isCreating, priceListItem}: PriceLIstItemDialogProps) => {
  const {priceListData, reloadPriceListData} = usePriceListContext()
  const {isDialogOpen, setIsDialogOpen} = useSettingContext()


  const maxValue = priceListData.length

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:  isCreating ? {
      title: '',
      price: '',
      order: Number(maxValue + 1),
    }
    : {
        title: priceListItem?.title,
        price: priceListItem?.price,
        order: priceListItem?.order,
      }
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    isCreating ? (
      addPriceListItem({
        title: values.title,
        price: values.price,
        order: Number(values.order),
      }).then(() => {
        setIsDialogOpen(!isDialogOpen)
        reloadPriceListData()
      }).catch((error) => {
        console.error('Error adding price list item:', error)
      })
      ) : (
        updatePriceListItem({
          title: values.title,
          price: values.price,
          order: Number(values.order),
          id: priceListItem?.id
        }).then(() => {
          setIsDialogOpen(!isDialogOpen)
          reloadPriceListData()
        }).catch((error) => {
          console.error('Error updating price list item:', error)
        })
    )
  }

  const heading = isCreating ? translation.admin.priceList.dialog.newPriceListItem : translation.admin.priceList.dialog.editPriceListItem

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{translation.admin.priceList.dialog.description}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="title" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>Nazev</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="price" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>Cena</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="order" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>Poradi polozky v seznamu</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">{translation.admin.buttons.cancel}</Button>
              </DialogClose>
              <Button type="submit">{translation.admin.buttons.save}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

const schema = z.object({
  title: z.string().max(255),
  price: z.string(),
  order: z.number(),
})