import {redirect} from 'next/navigation'

export async function navigateToPage(page: string) {
  redirect(page)
}