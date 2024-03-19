'use client'

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {translation} from '@/locales/cs/translation'
import {Input} from '@/components/ui/input'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from '@/components/ui/form'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Separator} from '@/components/ui/separator'
import {Button} from '@/components/ui/button'
import {useSettingContext} from '@/context/SettingsContext'
import {updateSettings} from '@/api/setttingsApi'
import {useEffect} from 'react'


export const GeneralForm = () => {
  const {loadSettingsData, settingsData} = useSettingContext()

  useEffect(() => {
    loadSettingsData()
  }, [])

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: settingsData ? {
      address: settingsData.address,
      email: settingsData.email,
      phone: settingsData.phone,
      title: settingsData.title,
      description: settingsData.description,
      image: settingsData.image,
      } : {
      address: '',
      email: '',
      phone: '',
      title: '',
      description: '',
      image: '',
    },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    updateSettings({
      address: values.address,
      email: values.email,
      phone: values.phone,
      title: values.title,
      description: values.description,
      image: values.image,
    })
      .then(() => loadSettingsData())
      .catch((error) => {
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
          <form className="w-1/2 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
})