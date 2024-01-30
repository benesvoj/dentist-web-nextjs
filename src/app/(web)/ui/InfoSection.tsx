import {insuranceCompanies, officeHours, services} from '@/app/(web)/lib/website'
import {Card} from '@/app/(web)/ui/Card'
import {OfficeHoursTable} from '@/app/(web)/ui/OfficeHoursTable'
import Link from 'next/link'
import Image from 'next/image'

export const InfoSection = () => {
  const data = officeHours ? officeHours : []

  return (
    <div className={'flex flex-row space-x-4 space-y-4 flex-wrap justify-center'}>
      <Card heading={'Informace pro pacienty'}>
        NOVÍ PACIENTI:
        <p>Nové pacienty z kapacitních důvodů nepřijímáme.</p>
        <p>
          Pokud se nemůžete dostavit na termín ošetření nebo se chcete objednat a nedovoláte se,
          prosíme o informaci prostřednictvím SMS!
        </p>
      </Card>
      <Card heading={'Ordinační doba'}>
        <OfficeHoursTable rows={data} />
        <p className={'font-bold py-2'}>Provozní doba začíná hodinu před ordinační dobou.</p>
        <p className={'font-bold'}>Omezený provoz ordinace z důvodu mateřské dovolené.</p>
      </Card>
    </div>
  )
}