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
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {addEmployee} from '@/api/employeeApi'
import {useEmployeeContext} from '@/context/EmployeeContext'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {Textarea} from '@/components/ui/textarea'
import {useSettingContext} from '@/context/SettingsContext'

export const NewEmployeeDialog = () => {
  const {reloadData, positionsData} = useEmployeeContext()
  const {isDialogOpen, setIsDialogOpen} = useSettingContext()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      titleBefore: '',
      firstName: '',
      lastName: '',
      titleAfter: '',
      position: '',
      note: '',
    },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    addEmployee({
      titleBefore: values.titleBefore,
      firstName: values.firstName,
      lastName: values.lastName,
      titleAfter: values.titleAfter,
      position: values.position,
      note: values.note,
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
                <FormMessage />
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
                <FormMessage />
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
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="position" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Pozice
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Vyberte pozici" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {positionsData.map(({value, label}, index) => (
                      <SelectItem key={index} value={value}>{label}</SelectItem>),
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="note" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Poznámka
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit">Potvrdit</Button>
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
  note: z.string().max(1000),
})