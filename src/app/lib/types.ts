export type OfficeHoursProps = {
  day: string
  morning?: string | undefined
  afternoon?: string | undefined
}

export type InsuranceCompaniesProps = {
  title: string
  url: string
  logo: string
}

export type ServicesProps = {
  title: string
  description: string
  image: string
}

export type UrlsProps = {
  title: string
  url?: string
}

type ExpressionsProps = {
  from: string | number
  to: string | number
  text: string
}

export type EmployeeProps = {
  name: string
  position: 'zubní lékař' | 'zubní hygienistka' | 'sestra'
  experience?: ExpressionsProps[]
  description?: string
  image?: string
}

export type PriceListProps = {
  title: string
  price: string
}

export type CooperationProps = {
  type: 'lab' | 'orto' | 'stoma' | 'para' | 'dentalhygiene'
  title: string
  description?: string
  address: string
  phone?: string
  email?: string
  www?: string
}
