import {UUID} from 'node:crypto'

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
  id: number
  title: string
  description: string
  image: string
}

export type UrlsProps = {
  id: number
  title: string
  url?: string
  description?: string
  subPages?: UrlsProps[]
  contentPage?: string
}

export type ExperienceProps = {
  id: string
  from: string | number
  to: string | number
  text: string
}

export type EmployeeProps = {
  id: string
  name: string
  position: 'zubní lékař' | 'zubní hygienistka' | 'sestra'
  experience?: ExperienceProps[]
  description?: string
  image?: string
}

export type PriceListProps = {
  id: string
  title: string
  price: string
}

export type CooperationTypeEnum = 'lab' | 'orto' | 'stoma' | 'para' | 'dentalhygiene'

export type CooperationProps = {
  id: string
  type: CooperationTypeEnum
  title: string
  description?: string
  address: string
  phone?: string
  email?: string
  www?: string
}

export type CooperationConfigProps = {
  id: string
  title: string
  data: CooperationProps[]
  type: CooperationTypeEnum
}
