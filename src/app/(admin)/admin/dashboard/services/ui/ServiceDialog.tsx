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
import {PriceListRaw, ServiceItem} from '@/lib/definition'
import {Textarea} from '@/components/ui/textarea'
import {translation} from '@/locales/cs/translation'
import {useServiceContext} from '@/context/ServicesContext'
import {addServiceItem, updateServiceItem} from '@/api/servicesApi'
import {useSettingContext} from '@/context/SettingsContext'

type ServiceDialogProps = {
  isCreating: boolean,
  serviceItem?: ServiceItem | null
}

export const ServiceDialog = ({isCreating, serviceItem}: ServiceDialogProps) => {
  const {servicesData, reloadServicesData} = useServiceContext()
  const {isDialogOpen, setIsDialogOpen} = useSettingContext()

  const maxValue = servicesData.length

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: isCreating ? {
        title: '',
        description: '',
        image: '/tooth-solid.svg',
        order: Number(maxValue + 1),
      }
      : {
        title: serviceItem?.title,
        description: serviceItem?.description,
        image: serviceItem?.image,
        order: serviceItem?.order,
      },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values),
    isCreating ? (
      addServiceItem({
        title: values.title,
        description: values.description,
        image: values.image,
        order: Number(values.order),
      }).then(() => {
        setIsDialogOpen(!isDialogOpen)
        reloadServicesData()
      }).catch((error) => {
        console.error('Error adding price list item:', error)
      })
    ) : (
      updateServiceItem({
        title: values.title,
        description: values.description,
        image: values.image,
        order: Number(values.order),
      }).then(() => {
        setIsDialogOpen(!isDialogOpen)
        reloadServicesData()
      }).catch((error) => {
        console.error('Error updating price list item:', error)
      })
    )
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{isCreating ? translation.admin.dialog.newItem : translation.admin.dialog.editItem}</DialogTitle>
          <DialogDescription>{translation.admin.dialog.description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="title" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.general.title}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="description" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.general.description}</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="order" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.general.order}</FormLabel>
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
  description: z.string(),
  image: z.string(),
  order: z.number(),
})