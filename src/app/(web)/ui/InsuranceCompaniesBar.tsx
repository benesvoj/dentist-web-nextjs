import {insuranceCompanies} from '@/app/(web)/lib/website'
import Link from 'next/link'
import Image from 'next/image'
import {Card} from '@/app/(web)/ui/Card'

export const InsuranceCompaniesBar = () => {

  // filter={"grayscale(1)"}
  // transition={"filter 0.5s"}
  // _hover={{
  //   filter: "grayscale(0)",
  // }}

  const imageFilter = 'grayScale(1)'

  return (
    <Card heading={'Pojišťovny'}>
      <p>Ordinace je smluvním poskytovatelem pro tyto zdravotní pojišťovny.</p>
      <div className={'flex flex-row flex-wrap gap-4 justify-center py-4 items-center'}>
        {insuranceCompanies.map(({title, url, logo}, index) => (
          <Link href={url} key={index} target="_blank">
            <Image
              src={logo}
              alt={title}
              width={0}
              height={0}
              sizes={'50wh'}
              className="w-28 h-auto filter grayscale hover:filter-none"
            />
          </Link>
        ))}
      </div>
    </Card>
  )
}