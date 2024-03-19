export type Employee = {
  id?: string,
  titleBefore: string,
  firstName: string,
  lastName: string,
  titleAfter: string,
  position: string,
  note: string
}

export interface EmployeePositionTypesProps {
  value: string
  label: string
}

export interface PriceListRaw {
  id?: string,
  title: string,
  price: string,
  order: number,
}

export interface ServiceItem {
  id?: string
  title: string
  description: string
  image: string
  order: number
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface Settings {
  address: string
  email: string
  phone: string
  title: string
  description: string
  image: string
}