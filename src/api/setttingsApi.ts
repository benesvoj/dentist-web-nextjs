'use server'

import {unstable_noStore as noStore} from 'next/cache'
import {sql} from '@vercel/postgres'
import {ContentSetup, Settings} from '@/lib/definition'

export async function fetchSettings() {
  noStore()

  try {
    const data = await sql<Settings>`SELECT * FROM "settings"`
    return data.rows[0]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch settings data.')
  }
}

export async function updateSettings(settings: Settings) {
  noStore()

  try {
    await sql<Settings>`
    INSERT INTO "settings" ("address", "email", "phone", "title", "description", "image")
    VALUES (${settings.address}, ${settings.email}, ${settings.phone}, ${settings.title}, ${settings.description}, ${settings.image}) 
    ON CONFLICT (address) DO 
        UPDATE SET "email" = ${settings.email}, "phone" = ${settings.phone}, "title" = ${settings.title}, "description" = ${settings.description}, "image" = ${settings.image}`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to insert or update settings.')
  }
}

export async function fetchContentSetup() {
  noStore()

  try {
    const data = await sql<ContentSetup>`SELECT * FROM "contentSetup"`
    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch content setup data.')
  }
}

export async function updateContentSetup(contentSetup: ContentSetup[]) {
  noStore()

  try {
    for (const item of contentSetup) {
      await sql<ContentSetup>`
    UPDATE "contentSetup" 
    SET "isVisible" = ${item.isVisible}
    WHERE "name" = ${item.name}`
    }
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to insert or update content setup.')
  }
}