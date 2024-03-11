import {officeHours} from '@/app/(web)/lib/website'
import {OfficeHoursTable} from '@/app/(web)/ui/OfficeHoursTable'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {InfoCard} from '@/app/ui/InfoCard/InfoCard'

export const InfoSection = () => {
  const data = officeHours ? officeHours : []

  return (
    <div className="flex gap-4 my-4 p-24">
      <InfoCard
        title="Info pro pacienty"
      >
        <p>Nové pacienty z kapacitních důvodů nepřijímáme.</p>
        <p>
          Pokud se nemůžete dostavit na termín ošetření nebo se chcete objednat a nedovoláte se,
          prosíme o informaci prostřednictvím SMS!
        </p>
      </InfoCard>
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>
            Ordinační doba
          </CardTitle>
        </CardHeader>
        <CardContent>
          <OfficeHoursTable rows={data} />
          <p className={'font-bold py-2'}>Provozní doba začíná hodinu před ordinační dobou.</p>
          <p className={'font-bold'}>Omezený provoz ordinace z důvodu mateřské dovolené.</p>
        </CardContent>
      </Card>
      {/*<InfoCard heading={'Informace pro pacienty'}>*/}
      {/*  NOVÍ PACIENTI:*/}
      {/*  <p>Nové pacienty z kapacitních důvodů nepřijímáme.</p>*/}
      {/*  <p>*/}
      {/*    Pokud se nemůžete dostavit na termín ošetření nebo se chcete objednat a nedovoláte se,*/}
      {/*    prosíme o informaci prostřednictvím SMS!*/}
      {/*  </p>*/}
      {/*</InfoCard>*/}
      {/*<InfoCard heading={'Ordinační doba'}>*/}
      {/*  <OfficeHoursTable rows={data} />*/}
      {/*  <p className={'font-bold py-2'}>Provozní doba začíná hodinu před ordinační dobou.</p>*/}
      {/*  <p className={'font-bold'}>Omezený provoz ordinace z důvodu mateřské dovolené.</p>*/}
      {/*</InfoCard>*/}
    </div>
  )
}