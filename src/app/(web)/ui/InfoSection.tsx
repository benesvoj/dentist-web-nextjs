import {officeHours} from '@/app/(web)/lib/website'
import {OfficeHoursTable} from '@/app/(web)/ui/OfficeHoursTable'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {InfoCard} from '@/app/ui/InfoCard/InfoCard'

export const InfoSection = () => {
  const data = officeHours ? officeHours : []

  return (
    <div className="flex justify-between">
      <InfoCard
        title="Info pro pacienty"
      >
        <p>Nové pacienty z kapacitních důvodů nepřijímáme.</p>
        <p>
          Pokud se nemůžete dostavit na termín ošetření nebo se chcete objednat a nedovoláte se,
          prosíme o informaci prostřednictvím SMS!
        </p>
      </InfoCard>

      <InfoCard
        title="Ordinační doba">
        <OfficeHoursTable rows={data} />
      </InfoCard>

    </div>
  )
}