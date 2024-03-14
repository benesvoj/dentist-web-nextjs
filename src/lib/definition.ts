export type Employee = {
  id?: string,
  titleBefore: string,
  firstName: string,
  lastName: string,
  titleAfter: string,
  position: string,
}

export interface EmployeePositionTypesProps {
  value: string
  label: string
}