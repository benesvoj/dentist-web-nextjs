'use server'

import {unstable_noStore as noStore} from 'next/cache'
import {sql} from '@vercel/postgres'
import {ServiceItem} from '@/lib/definition'

export async function fetchServices() {
  noStore()

  try {
    const data = await sql<ServiceItem>`SELECT * FROM "services" ORDER BY "order" ASC`
    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch price list data.')
  }
}

export async function fetchServiceById(id: string) {
  noStore()

  try {
    const data = await sql<ServiceItem>`SELECT * FROM "services" WHERE "id" = ${id}`
    return data.rows[0]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch price list item.')
  }
}

export async function addServiceItem(item: ServiceItem) {
  noStore()

  try {
    console.log('Trying to add service item...')
    await sql<ServiceItem>`INSERT INTO "services" ("title", "description", "image", "order") VALUES (${item.title}, ${item.description}, ${item.image}, ${item.order})`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to add price list item.')
  }
}

export async function updateServiceItem(item: ServiceItem) {
  noStore()

  try {
    await sql<ServiceItem>`UPDATE "services" SET "title" = ${item.title}, "description" = ${item.description}, "image" = ${item.image}, "order" = ${item.order} WHERE "id" = ${item.id}`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to update price list item.')
  }
}

export async function removeServiceItem(id: string) {
  noStore()

  try {
    await sql<ServiceItem>`DELETE FROM "services" WHERE "id" = ${id}`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to remove service item.')
  }
}