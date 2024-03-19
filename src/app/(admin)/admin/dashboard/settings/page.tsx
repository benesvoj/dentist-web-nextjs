import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {EmployeeTypeCard} from '@/app/(admin)/admin/dashboard/settings/ui/EmployeeTypeCard'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {translation} from '@/locales/cs/translation'
import {GeneralForm} from '@/app/(admin)/admin/dashboard/settings/ui/GeneralForm'

export default function Page() {

  return (
    <>
      <HeadNav title="Nastaveni" />
      <div className="m-4">
        <Tabs defaultValue="general" className="width-[400px]">
          <TabsList>
            <TabsTrigger value={'general'}>{translation.admin.settings.general.title}</TabsTrigger>
            <TabsTrigger value={'codeTables'}>{translation.admin.settings.codeTables}</TabsTrigger>
          </TabsList>
          <TabsContent value={'general'}>
            <GeneralForm />
          </TabsContent>
          <TabsContent value={'codeTables'}>
            <EmployeeTypeCard />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}