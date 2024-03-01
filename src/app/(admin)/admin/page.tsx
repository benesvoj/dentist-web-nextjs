'use client'

import './ui/styles.css'
import {FormInput} from '@/app/(admin)/admin/ui/FormInput'
import {ButtonGroup} from '@/app/ui/ButtonGroup/ButtonGroup'
import {Button} from '@/app/ui/Button/Button'
import {useRouter} from 'next/navigation'
import React from 'react'

export default function Page() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/admin/dashboard')
  }

  return(
    <div className="flex justify-center items-center h-full">
      <form
        className='bg-white p-10 rounded-lg shadow-lg w-[400px]'
        onSubmit={handleSubmit}
      >
        <FormInput label={'login'} type={'text'} />
        <FormInput label={'password'} type={'password'} />
        <ButtonGroup className='mt-4'>
          <Button label='Vrátit zpět' type={'button'} variant='secondary' onClick={() => router.push('/')} />
          <Button type='submit' label='Přihlásit se' />
        </ButtonGroup>
      </form>
    </div>
  )
}