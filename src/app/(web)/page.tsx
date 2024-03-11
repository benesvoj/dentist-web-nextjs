import {ServicesSection} from '@/app/(web)/ui/ServicesSection'
import {InfoSection} from '@/app/(web)/ui/InfoSection'
import {InsuranceCompaniesBar} from '@/app/(web)/ui/InsuranceCompaniesBar'

export default function Home() {

  return (
    <>
      {/*<div className={'w-4/5 h-80 bg-blue-500 m-4'}></div>*/}
      <ServicesSection />
      <InfoSection />
      <InsuranceCompaniesBar />
    </>
  )
}
