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