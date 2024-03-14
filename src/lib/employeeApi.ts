'use server'

import {unstable_noStore as noStore} from 'next/cache'
import {sql} from '@vercel/postgres'
import {Employees} from '@/lib/definition'

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
  try {
    await sql`INSERT INTO employees ("titleBefore", "firstName", "lastName", "titleAfter", "position") VALUES (${employee.titleBefore}, ${employee.firstName}, ${employee.lastName}, ${employee.titleAfter}, ${employee.position})`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to add employee.')
  }
}