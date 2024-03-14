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
import {addEmployee} from '@/lib/employeeApi'
import {useEmployeeContext} from '@/app/(admin)/admin/context/EmployeeContext'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {employeePositionTypes} from '@/types/types'

export const NewEmployeeDialog = () => {
  const {isDialogOpen, setIsDialogOpen, reloadData} = useEmployeeContext()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      titleBefore: '',
      firstName: '',
      lastName: '',
      titleAfter: '',
      position: '',
    },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    addEmployee({
      titleBefore: values.titleBefore,
      firstName: values.firstName,
      lastName: values.lastName,
      titleAfter: values.titleAfter,
      position: values.position,
    }).then(() => {
      setIsDialogOpen(!isDialogOpen)
      reloadData()
    })
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Novy zamestanec</DialogTitle>
          <DialogDescription>Vyplnte povinna pole</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="titleBefore" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Titul pred
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="firstName" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Jmeno
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="lastName" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Prijmeni
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="titleAfter" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Titul za
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="position" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Pozice
                </FormLabel>
                {/*<Input {...field} />*/}
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Vyberte pozici" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {employeePositionTypes.map(({id, value, label}) => (
                      <SelectItem key={id} value={value}>{label}</SelectItem>),
                    )}
                  </SelectContent>
                </Select>
              </FormItem>
            )} />
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">Potvrdit</Button>
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