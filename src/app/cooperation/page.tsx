import {PageBody} from '@/app/ui/PageBody'
import {urls} from '@/app/lib/urls'
import {cooperation} from '@/app/lib/website'
import {Card} from '@/app/ui/Card'

// TODO card flip twailwind css???
// TODO simplify the code

export default function Cooperation() {
  return (
    <PageBody title={urls[5].title} flexCol>
      <h3>Laboratoře</h3>
      <div className={'flex'}>
        {cooperation
          .filter((item) => item.type === 'lab')
          .map((item, index) => (
            <Card heading={item.title} key={index}>
              <h4>{item.description}</h4>
              <p>Adresa: {item.address}</p>
              <p>Telefon: {item.phone}</p>
              <p>Email: {item.email}</p>
              <p>Web: {item.www}</p>
            </Card>
          ))}
      </div>
      <h3>Stomatochirurgie</h3>
      <div className={'flex'}>
        {cooperation
          .filter((item) => item.type === 'stoma')
          .map((item, index) => (
            <Card heading={item.title} key={index}>
              <h4>{item.description}</h4>
              <p>Adresa: {item.address}</p>
              <p>Telefon: {item.phone}</p>
              <p>Email: {item.email}</p>
              <p>Web: {item.www}</p>
            </Card>
          ))}
      </div>
      <h3>Ortodoncie</h3>
      <div className={'flex'}>
        {cooperation
          .filter((item) => item.type === 'orto')
          .map((item, index) => (
            <Card heading={item.title} key={index}>
              <h4>{item.description}</h4>
              <p>Adresa: {item.address}</p>
              <p>Telefon: {item.phone}</p>
              <p>Email: {item.email}</p>
              <p>Web: {item.www}</p>
            </Card>
          ))}
      </div>
      <h3>Paradontologie</h3>
      <div className={'flex'}>
        {cooperation
          .filter((item) => item.type === 'para')
          .map((item, index) => (
            <Card heading={item.title} key={index}>
              <h4>{item.description}</h4>
              <p>Adresa: {item.address}</p>
              <p>Telefon: {item.phone}</p>
              <p>Email: {item.email}</p>
              <p>Web: {item.www}</p>
            </Card>
          ))}
      </div>
      <h3>Dentální hygiena</h3>
      <div className={'flex'}>
        {cooperation
          .filter((item) => item.type === 'dentalhygiene')
          .map((item, index) => (
            <Card heading={item.title} key={index}>
              <h4>{item.description}</h4>
              <p>Adresa: {item.address}</p>
              <p>Telefon: {item.phone}</p>
              <p>Email: {item.email}</p>
              <p>Web: {item.www}</p>
            </Card>
          ))}
      </div>
    </PageBody>
  )
}
