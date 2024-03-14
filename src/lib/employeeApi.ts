'use server'

import {unstable_noStore as noStore} from 'next/cache'
import {sql} from '@vercel/postgres'
import {EmployeePositionTypesProps, Employees} from '@/lib/definition'

export async function fetchEmployees() {
  noStore()

  try {
    const data = await sql<Employees>`SELECT * FROM employees`
    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch employee data.')
  }
}

export async function addEmployee(employee: Employees) {
  noStore()

  try {
    await sql`INSERT INTO employees ("titleBefore", "firstName", "lastName", "titleAfter", "position") VALUES (${employee.titleBefore}, ${employee.firstName}, ${employee.lastName}, ${employee.titleAfter}, ${employee.position})`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to add employee.')
  }
}

export async function fetchEmployeePositionTypes() {
  noStore()

  try {
    const data = await sql<{value: string; label: string}>`SELECT * FROM "employeePositionTypes"`
    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch employee position types.')
  }
}

export async function addEmployeePosition (position: EmployeePositionTypesProps) {
  noStore()

  try {
    await sql`INSERT INTO "employeePositionTypes" ("value", "label") VALUES (${position.value}, ${position.label})`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to add employee position type.')
  }
}