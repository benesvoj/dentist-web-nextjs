'use client'

import {Form, FormControl, FormField, FormItem, FormLabel} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {z} from 'zod'
import {useRouter} from 'next/navigation'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {employees} from '@/app/(web)/lib/website'
import {routes} from '@/app/(admin)/admin/dashboard/utils/routes'
import {addEmployee} from '@/lib/employeeApi'

export default function Page() {
  const router = useRouter()
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      titleBefore: 'MDDr.',
      firstName: 'Lucie',
      lastName: 'Solná',
      titleAfter: '',
      position: 'Zubní lékař',
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
      console.log('employee added')
    })

    router.push(routes.employees)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[500px] rounded p-4 border-2 shadow">
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
        <Button type="submit" variant="outline">Potvrdit</Button>
      </form>
    </Form>
  )
}

const schema = z.object({
  titleBefore: z.string(),
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  titleAfter: z.string(),
  position: z.string().min(3).max(50),
})