import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {translation} from '@/locales/cs/translation'
import {Switch} from '@/components/ui/switch'
import {Button} from '@/components/ui/button'
import {useEffect} from 'react'
import {urls} from '@/lib/urls'
import {ContentSetup} from '@/lib/definition'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from '@/components/ui/form'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {updateContentSetup} from '@/api/setttingsApi'
import {useToast} from '@/components/ui/use-toast'

type PageSetupCardProps = {
  data: ContentSetup[]
  loadData: () => void
}

export const PageSetupCard = ({data: contentSetupData, loadData: loadContentSetupData}: PageSetupCardProps) => {
  const {toast} = useToast()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    form.reset({
        home: !!contentSetupData.find((content) => content.name === 'home' && content.isVisible),
        services: !!contentSetupData.find((content) => content.name === 'services' && content.isVisible),
        priceList: !!contentSetupData.find((content) => content.name === 'priceList' && content.isVisible),
        ourTeam: !!contentSetupData.find((content) => content.name === 'ourTeam' && content.isVisible),
        cooperation: !!contentSetupData.find((content) => content.name === 'cooperation' && content.isVisible),
        contact: !!contentSetupData.find((content) => content.name === 'contact' && content.isVisible),
        news: !!contentSetupData.find((content) => content.name === 'news' && content.isVisible),
        recommendation: !!contentSetupData.find((content) => content.name === 'recommendation' && content.isVisible),
    })
  }, [contentSetupData, form. reset])

  function onSubmit(values: z.infer<typeof schema>) {
    const updatedContentSetup = Object.entries(values).map(([key, value]) => ({
      name: key,
      isVisible: value,
    }))

    updateContentSetup(updatedContentSetup)
      .then(() => {
          loadContentSetupData()
          toast({
            title: translation.admin.toast.success,
            description: translation.admin.toast.contentSetupUpdated,
          })
        },
      )
      .catch((error) => {
        toast({
          title: translation.admin.toast.error,
          description: translation.admin.toast.failedToUpdateContentSetup,
        })
        console.error('Failed to update content setup', error)
      })
  }

  return (
    <Card className="min-w-[500px]">
      <CardHeader>
        <CardTitle>{translation.admin.dashboard.pageSetup.heading}</CardTitle>
        <CardDescription>{translation.admin.dashboard.pageSetup.subHeading}</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <CardContent className="grid gap-6">
            {urls
              .filter((item) => item.contentPage !== undefined)
              .map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name={item.contentPage as 'services' | 'priceList' | 'ourTeam' | 'cooperation' | 'contact' | 'news' | 'recommendation'}
                    render={({field}) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>{item.title}</FormLabel>
                          <FormDescription>
                            {item.description}
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ),
              )}
          </CardContent>
          <CardFooter>
            <Button variant="outline" type="submit" className="w-full">
              {translation.admin.buttons.savePreferences}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

const schema = z.object({
  home: z.boolean(),
  services: z.boolean(),
  priceList: z.boolean(),
  ourTeam: z.boolean(),
  cooperation: z.boolean(),
  contact: z.boolean(),
  news: z.boolean(),
  recommendation: z.boolean(),
})