import {PageBody} from '@/app/ui/PageBody'
import {urls} from '@/app/lib/urls'
import {priceList} from '@/app/lib/website'
import {Card} from '@/app/ui/Card'

export default function PriceList() {
  const cellStyle = 'py-1.5'
  return (
    <PageBody title={urls[2].title}>
      <table className={'border-2 border-amber-100'}>
        <thead>
          <tr>
            <td className={cellStyle}>Název výkonu</td>
            <td className={cellStyle}>Cena</td>
          </tr>
        </thead>
        <tbody>
          {priceList.map(({title, price}, index) => {
            return (
              <tr key={index}>
                <td className={cellStyle}>{title}</td>
                <td className={cellStyle}>{price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Card>
        Uvedené ceny jsou pouze orientační. Konečnou cenu ošetření stanovujeme až po vyšetření a
        stanovení léčebného plánu. Akceptujeme pouze platby v hotovosti.
      </Card>
    </PageBody>
  )
}
