import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {translation} from '@/locales/cs/translation'
import {Input} from '@/components/ui/input'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from '@/components/ui/form'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Separator} from '@/components/ui/separator'
import {Button} from '@/components/ui/button'
import {updateSettings} from '@/api/setttingsApi'
import {useEffect} from 'react'
import {OfficeHours} from '@/app/(admin)/admin/dashboard/settings/ui/OfficeHours'
import {useToast} from '@/components/ui/use-toast'
import {Settings} from '@/lib/definition'

type GeneralFormProps = {
  data: Settings
  loadData: () => void
}

export const GeneralForm = ({data: settingsData, loadData: loadSettingsData}: GeneralFormProps) => {
  const {toast} = useToast()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })


  useEffect(() => {
    form.reset({
      address: settingsData.address || '',
      email: settingsData.email || '',
      phone: settingsData.phone || '',
      title: settingsData.title || '',
      description: settingsData.description || '',
      image: settingsData.image || '',
    })
  }, [settingsData, form.reset])


  const onSubmit = (values: z.infer<typeof schema>) => {
    const updateValues = {
      address: values.address,
      email: values.email,
      phone: values.phone,
      title: values.title,
      description: values.description,
      image: values.image,
      officeHours: values.officeHours,
    }

    updateSettings(updateValues)
      .then(() => {
        loadSettingsData()
        toast({
          title: translation.admin.toast.success,
          description: translation.admin.toast.settingsUpdated,
        })
      })
      .catch((error) => {
          toast({
            title: translation.admin.toast.error,
            description: translation.admin.toast.failedToUpdateContentSetup,
          })
          console.error(error)
        },
      )
  }

  return (<>
    <Card>
      <CardHeader>
        <CardTitle>{translation.admin.settings.general.title}</CardTitle>
        <CardDescription>{translation.admin.settings.general.description}</CardDescription>
        <Separator />
      </CardHeader>
      <CardContent>
        <Form {...form} >
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex w-full justify-between gap-4">
              <div className="w-1/3">
                <FormField name="address" control={form.control} render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      {translation.general.address}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>{translation.general.addressDescription}</FormDescription>
                  </FormItem>
                )} />
                <FormField name="email" control={form.control} render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      {translation.general.email}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>{translation.general.emailDescription}</FormDescription>
                  </FormItem>
                )} />
                <FormField name="phone" control={form.control} render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      {translation.general.phone}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )} />
                <FormField name="title" control={form.control} render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      {translation.general.webTitle}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>{translation.general.webTitleDescription}</FormDescription>
                  </FormItem>
                )} />
                <FormField name="description" control={form.control} render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      {translation.general.webSubtitle}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>{translation.general.webSubtitleDescription}</FormDescription>
                  </FormItem>
                )} />
              </div>
              <div className="w-1/2">
                <OfficeHours />
              </div>
            </div>
            <Button type="submit">{translation.admin.buttons.save}</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  </>)
}

const schema = z.object({
  address: z.string(),
  email: z.string().email(),
  phone: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  officeHours: z.object({
    monday: z.object({
      morning: z.object({
        from: z.string(),
        to: z.string(),
      }),
      afternoon: z.object({
        from: z.string(),
        to: z.string(),
      }),
    }),
    tuesday: z.object({
      morning: z.object({
        from: z.string(),
        to: z.string(),
      }),
      afternoon: z.object({
        from: z.string(),
        to: z.string(),
      }),
    }),
    wednesday: z.object({
      morning: z.object({
        from: z.string(),
        to: z.string(),
      }),
      afternoon: z.object({
        from: z.string(),
        to: z.string(),
      }),
    }),
    thursday: z.object({
      morning: z.object({
        from: z.string(),
        to: z.string(),
      }),
      afternoon: z.object({
        from: z.string(),
        to: z.string(),
      }),
    }),
    friday: z.object({
      morning: z.object({
        from: z.string(),
        to: z.string(),
      }),
      afternoon: z.object({
        from: z.string(),
        to: z.string(),
      }),
    }),
    saturday: z.object({
      morning: z.object({
        from: z.string(),
        to: z.string(),
      }),
      afternoon: z.object({
        from: z.string(),
        to: z.string(),
      }),
    }),
    sunday: z.object({
      morning: z.object({
        from: z.string(),
        to: z.string(),
      }),
      afternoon: z.object({
        from: z.string(),
        to: z.string(),
      }),
    }),
  }),
})