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
import {useCooperationContext} from '@/context/CooperationContext'
import {addCooperationType} from '@/api/cooperationApi'
import {translation} from '@/locales/cs/translation'

export const NewCooperationTypeDialog = () => {
  const {isDialogOpen, setIsDialogOpen, loadCooperationTypes} = useCooperationContext()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      nameShort: '',
    },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    addCooperationType({
      name: values.name,
      nameShort: values.nameShort,
    }).then(() => {
      setIsDialogOpen(!isDialogOpen)
      loadCooperationTypes()
    })
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{translation.admin.settings.cooperationTypes.title}</DialogTitle>
          <DialogDescription>{translation.admin.settings.cooperationTypes.description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="name" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.general.title}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="nameShort" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.general.titleShort}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
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

const schema = z.object({
  name: z.string().min(3).max(50),
  nameShort: z.string().min(3).max(10),
})