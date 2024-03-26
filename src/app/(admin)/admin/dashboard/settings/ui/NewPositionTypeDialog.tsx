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
import {useSettingContext} from '@/context/SettingsContext'
import {translation} from '@/locales/cs/translation'

export const NewPositionTypeDialog = () => {
  const {reloadPositionData} = useEmployeeContext()
  const {isDialogOpen, setIsDialogOpen} = useSettingContext()

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
          <DialogTitle>{translation.admin.settings.positionTypes.dialog.title}</DialogTitle>
          <DialogDescription>{translation.admin.settings.positionTypes.dialog.description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="value" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.admin.settings.positionTypes.dialog.code}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="label" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.admin.settings.positionTypes.dialog.name}
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
  value: z.string().min(3).max(50),
  label: z.string().min(3).max(50),
})