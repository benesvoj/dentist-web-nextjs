import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {Form, FormControl, FormField, FormItem, FormLabel} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useEmployeeContext} from '@/context/EmployeeContext'
import {addEmployeePosition} from '@/api/employeeApi'

export const NewPositionTypeDialog = () => {
  const {isDialogOpen, setIsDialogOpen, reloadPositionData} = useEmployeeContext()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      value: '',
      label: '',
    },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    addEmployeePosition({
      value: values.value,
      label: values.label,
    }).then(() => {
      setIsDialogOpen(!isDialogOpen)
      reloadPositionData()
  })
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Nova pracovni pozice</DialogTitle>
          <DialogDescription>Vyplnte povinna pole</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="value" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Kód
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="label" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  Název
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
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

const schema = z.object({
  value: z.string().min(3).max(50),
  label: z.string().min(3).max(50),
})