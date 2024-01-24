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

export type ExperienceProps = {
  from: string | number
  to: string | number
  text: string
}

export type EmployeeProps = {
  name: string
  position: 'zubní lékař' | 'zubní hygienistka' | 'sestra'
  experience?: ExperienceProps[]
  description?: string
  image?: string
}

export type PriceListProps = {
  title: string
  price: string
}

export type CooperationTypeEnum = 'lab' | 'orto' | 'stoma' | 'para' | 'dentalhygiene'

export type CooperationProps = {
  type: CooperationTypeEnum
  title: string
  description?: string
  address: string
  phone?: string
  email?: string
  www?: string
}

export type CooperationConfigProps = {
  title: string
  data: CooperationProps[]
  type: CooperationTypeEnum
}
