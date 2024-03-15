'use server'

import {unstable_noStore as noStore} from 'next/cache'
import {PriceListRaw} from '@/lib/definition'
import {sql} from '@vercel/postgres'

export async function fetchPriceList() {
  noStore()

  try {
    const data = await sql<PriceListRaw>`SELECT * FROM "priceList" ORDER BY "order" ASC`
    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch price list data.')
  }
}

export async function fetchPriceListItemById(id: string) {
  noStore()

  try {
    const data = await sql<PriceListRaw>`SELECT * FROM "priceList" WHERE "id" = ${id}`
    return data.rows[0]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch price list item.')
  }
}

export async function addPriceListItem(item: PriceListRaw) {
  noStore()

  try {
    console.log('Trying to add pricelist item...')
    await sql<PriceListRaw>`INSERT INTO "priceList" ("title", "price", "order") VALUES (${item.title}, ${item.price}, ${item.order})`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to add price list item.')
  }
}

export async function updatePriceListItem(item: PriceListRaw) {
  noStore()

  try {
    await sql<PriceListRaw>`UPDATE "priceList" SET "title" = ${item.title}, "price" = ${item.price}, "order" = ${item.order} WHERE "id" = ${item.id}`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to update price list item.')
  }
}

export async function removePriceListItem(id: string) {
  noStore()

  try {
    await sql<PriceListRaw>`DELETE FROM "priceList" WHERE "id" = ${id}`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to remove price list item.')
  }
}