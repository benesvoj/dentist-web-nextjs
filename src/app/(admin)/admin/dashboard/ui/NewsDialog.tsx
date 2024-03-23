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
import {useDashboardContext} from '@/context/DashboardContext'
import {translation} from '@/locales/cs/translation'
import {addNews} from '@/api/dashboardApi'
import {Textarea} from '@/components/ui/textarea'
import {News} from '@/lib/definition'

type NewsDialogProps = {
  isCreating: boolean
  data: News | null
}

export const NewsDialog = ({isCreating, data}: NewsDialogProps) => {
  const {isDialogOpen, setIsDialogOpen, loadNewsData} = useDashboardContext()

  const today = new Date().toISOString().split('T')[0]

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: isCreating ? {
      dateFrom: today,
      dateTo: today,
      message: ''
    } : {
      dateFrom: data?.dateFrom || today,
      dateTo: data?.dateTo || today,
      message: data?.message || ''
    },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    addNews({
      dateFrom: values.dateFrom,
      dateTo: values.dateTo,
      message: values.message,
    }).then(() => {
      setIsDialogOpen(!isDialogOpen)
      loadNewsData()
    })
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{translation.admin.dashboard.news.addNew}</DialogTitle>
          <DialogDescription>{translation.admin.dashboard.news.addNewDescription}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <FormField name="dateFrom" control={form.control} render={({field}) => (
                <FormItem>
                  <FormLabel>
                    {translation.admin.dashboard.news.dateFrom}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                </FormItem>
              )} />
              <FormField name="dateTo" control={form.control} render={({field}) => (
                <FormItem>
                  <FormLabel>
                    {translation.admin.dashboard.news.dateTo}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                </FormItem>
              )} />
            </div>
            <FormField name="message" control={form.control} render={({field}) => (
              <FormItem>
                <FormLabel>
                  {translation.admin.dashboard.news.message}
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
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
  dateFrom: z.string(),
  dateTo: z.string(),
  message: z.string(),
})