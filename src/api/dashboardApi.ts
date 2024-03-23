'use server'

import {unstable_noStore as noStore} from 'next/cache'
import {sql} from '@vercel/postgres'
import {News} from '@/lib/definition'

export async function fetchNews() {
  noStore()

  try {
    const data = await sql<News>`SELECT * FROM news`

    return data.rows
  } catch (error) {
    console.error('Failed to fetch news data:', error)
    throw new Error('Failed to fetch news data.')
  }
}

export async function addNews(news: News) {
  noStore()

  try {
    await sql`INSERT INTO news ("dateFrom", "dateTo", "message") VALUES (${news.dateFrom}, ${news.dateTo}, ${news.message})`
  } catch (error) {
    console.error('Failed to add news:', error)
    throw new Error('Failed to add news.')
  }
}

export async function fetchNewsById(id: string) {
  noStore()

  try {
    const data = await sql<News>`SELECT * FROM news WHERE id = ${id}`

    return data.rows[0]
  } catch (error) {
    console.error('Failed to fetch news by ID:', error)
    throw new Error('Failed to fetch news by ID.')
  }

}

export async function updateNews(news: News) {
  noStore()

  try {
    await sql`UPDATE news SET "dateFrom" = ${news.dateFrom}, "dateTo" = ${news.dateTo}, "message" = ${news.message} WHERE id = ${news.id}`
  } catch (error) {
    console.error('Failed to update news:', error)
    throw new Error('Failed to update news.')
  }
}

export async function deleteNews(id: string) {
  noStore()

  try {
    await sql`DELETE FROM news WHERE id = ${id}`
  } catch (error) {
    console.error('Failed to delete news:', error)
    throw new Error('Failed to delete news.')
  }
}