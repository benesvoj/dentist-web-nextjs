import {ServicesSection} from '@/app/(web)/ui/ServicesSection'
import {InfoSection} from '@/app/(web)/ui/InfoSection'
import {InsuranceCompaniesBar} from '@/app/(web)/ui/InsuranceCompaniesBar'

export default function Home() {

  return (
    <div className='flex flex-col gap-4'>
      <ServicesSection />
      <InfoSection />
      <InsuranceCompaniesBar />
    </div>
  )
}
