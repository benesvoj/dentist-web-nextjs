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
import {translation} from '@/locales/cs/translation'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useCooperationContext} from '@/context/CooperationContext'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {addCooperation, fetchCooperationById, updateCooperation} from '@/api/cooperationApi'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {useEffect, useState} from 'react'
import {Cooperation} from '@/lib/definition'

type CooperationItemDialogProps = {
  isCreating: boolean
  cooperationItem?: Cooperation | null
}

export const CooperationItemDialog = ({isCreating, cooperationItem}: CooperationItemDialogProps) => {
  const {
    loadCooperationData,
    isDialogOpen,
    setIsDialogOpen,
    cooperationTypes,
    loadCooperationTypes,
  } = useCooperationContext()

  useEffect(() => {
    loadCooperationTypes()
  }, [])

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: isCreating ? {
        name: '',
        address: '',
        phone: '',
        email: '',
        www: '',
        description: '',
        cooperationTypeId: '',
      }
      : {
        name: cooperationItem?.name || '',
        address: cooperationItem?.address || '',
        phone: cooperationItem?.phone || '',
        email: cooperationItem?.email || '',
        www: cooperationItem?.www || '',
        description: cooperationItem?.description || '',
        cooperationTypeId: cooperationItem?.cooperationTypeId || '',
      },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    isCreating ? (
      addCooperation({
        name: values.name,
        address: values.address,
        phone: values.phone,
        email: values.email,
        www: values.www,
        description: values.description,
        cooperationTypeId: values.cooperationTypeId,
      })
    ) : (
      updateCooperation({
        id: cooperationItem?.id,
        name: values.name,
        address: values.address,
        phone: values.phone,
        email: values.email,
        www: values.www,
        description: values.description,
        cooperationTypeId: values.cooperationTypeId,
      })
    )

    setIsDialogOpen(!isDialogOpen)
    loadCooperationData()
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{isCreating ? translation.admin.dialog.newItem : translation.admin.dialog.editItem}</DialogTitle>
          <DialogDescription>{translation.admin.dialog.description}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="name" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.general.title}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="address" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.general.address}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="phone" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.general.phone}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="email" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.general.email}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="www" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.general.webUrl}</FormLabel>
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
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="cooperationTypeId" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>{translation.admin.cooperation.cooperationType}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Vyberte zamereni" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cooperationTypes.map(({id, name}) => (
                      <SelectItem key={id} value={id || ''}>{name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your
                </FormDescription>
                <FormMessage />
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
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  email: z.string(),
  www: z.string(),
  description: z.string(),
  cooperationTypeId: z.string(),
})