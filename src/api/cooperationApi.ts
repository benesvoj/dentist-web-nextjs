'use server'

import {unstable_noStore as noStore} from 'next/cache'
import {sql} from '@vercel/postgres'
import {Cooperation, CooperationType} from '@/lib/definition'

export async function fetchCooperation() {
  noStore()

  try {
    const data = await sql<Cooperation>`SELECT * FROM cooperation`

    return data.rows
  } catch (error) {
    console.error('Failed to fetch cooperation data:', error)
    throw new Error('Failed to fetch cooperation data.')
  }
}

export async function fetchCooperationById(id: string) {
  noStore()

  try {
    const data = await sql<Cooperation>`SELECT * FROM cooperation WHERE id = ${id}`
    return data.rows[0]
  } catch (error) {
    console.error('Failed to fetch cooperation data:', error)
    throw new Error('Failed to fetch cooperation data.')
  }
}

export async function addCooperation(cooperation: Cooperation) {
  noStore()

  try {
    await sql`INSERT INTO cooperation ("name", "address", "phone", "email", "www", "description", "cooperationTypeId") VALUES (${cooperation.name}, ${cooperation.address}, ${cooperation.phone}, ${cooperation.email}, ${cooperation.www}, ${cooperation.description}, ${cooperation.cooperationTypeId})`
  } catch (error) {
    console.error('Failed to add cooperation:', error)
    throw new Error('Failed to add cooperation.')
  }
}

export async function updateCooperation(cooperation: Cooperation) {
  noStore()

  try {
    await sql`UPDATE cooperation SET "name" = ${cooperation.name}, "address" = ${cooperation.address}, "phone" = ${cooperation.phone}, "email" = ${cooperation.email}, "www" = ${cooperation.www}, "description" = ${cooperation.description}, "cooperationTypeId" = ${cooperation.cooperationTypeId} WHERE id = ${cooperation.id}`
  } catch (error) {
    console.error('Failed to update cooperation:', error)
    throw new Error('Failed to update cooperation.')
  }

}

export async function deleteCooperation(id: string) {
  noStore()

  try {
    await sql`DELETE FROM cooperation WHERE id = ${id}`
  } catch (error) {
    console.error('Failed to delete cooperation:', error)
    throw new Error('Failed to delete cooperation.')
  }
}

export async function fetchCooperationTypes() {
  noStore()

  try {
    const data = await sql<CooperationType>`SELECT * FROM "cooperationTypes"`
    return data.rows
  } catch (error) {
    console.error('Failed to fetch cooperation type data:', error)
    throw new Error('Failed to fetch cooperation type data.')
  }
}

export async function addCooperationType(cooperationType: CooperationType) {
  noStore()

  try {
    await sql`INSERT INTO "cooperationTypes" ("name", "nameShort") VALUES (${cooperationType.name}, ${cooperationType.nameShort})`
  } catch (error) {
    console.error('Failed to add cooperation type:', error)
    throw new Error('Failed to add cooperation type.')
  }
}

export async function deleteCooperationType(id: string) {
  noStore()

  try {
    await sql`DELETE FROM "cooperationTypes" WHERE id = ${id}`
  } catch (error) {
    console.error('Failed to delete cooperation type:', error)
    throw new Error('Failed to delete cooperation type.')
  }
}