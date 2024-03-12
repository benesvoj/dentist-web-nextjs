import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'
import {createPool} from '@vercel/postgres'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}