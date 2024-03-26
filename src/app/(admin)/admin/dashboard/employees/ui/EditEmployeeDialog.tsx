'use client'

import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormControl, FormField, FormItem, FormLabel} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useEmployeeContext} from '@/context/EmployeeContext'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {Employee} from '@/lib/definition'
import {translation} from '@/locales/cs/translation'
// TODO: it is not working always correctly, need to make review
export const EditEmployeeDialog = ({employee}: {employee: Employee}) => {
  const {isEditDialogOpen, setIsEditDialogOpen, positionsData, reloadData} = useEmployeeContext()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      titleBefore: employee?.titleBefore || '',
      firstName: employee?.firstName || '',
      lastName: employee?.lastName || '',
      titleAfter: employee?.titleAfter || '',
      position: employee?.position || '',
    },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
   console.log('storing edited values', values)
    reloadData()
    // TODO: implement updateEmployee function
  }

  return (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{translation.admin.employees.dialog.editEmployee}</DialogTitle>
          <DialogDescription>{translation.admin.employees.dialog.description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="titleBefore" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.admin.employees.dialog.titleBefore}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="firstName" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.admin.employees.dialog.firstName}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="lastName" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.admin.employees.dialog.lastName}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="titleAfter" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.admin.employees.dialog.titleAfter}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="position" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.admin.employees.dialog.position}
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={translation.admin.employees.dialog.selectPosition} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {positionsData.map(({value, label}, index) => (
                      <SelectItem key={index} value={value}>{label}</SelectItem>),
                    )}
                  </SelectContent>
                </Select>
              </FormItem>
            )} />
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  {translation.admin.buttons.cancel}
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">{translation.admin.buttons.save}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

// TODO: missing error validation in the form

const schema = z.object({
  titleBefore: z.string().max(50),
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  titleAfter: z.string().max(50),
  position: z.string().min(3).max(50),
})