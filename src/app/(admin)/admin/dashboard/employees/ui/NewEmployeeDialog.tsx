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

export const NewEmployeeDialog = ({isOpen, onOpenChange}: {
  isOpen: boolean,
  onOpenChange: (isOpen: boolean) => void
}) => {
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
      onOpenChange(!isOpen)
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button onClick={() => console.log('click close button')} type="button" variant="secondary">
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

const schema = z.object({
  titleBefore: z.string().max(50),
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  titleAfter: z.string().max(50),
  position: z.string().min(3).max(50),
})