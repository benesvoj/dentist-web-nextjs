'use client'

import './ui/styles.css'
import {FormInput} from '@/app/(admin)/admin/ui/FormInput'
import {ButtonGroup} from '@/app/ui/ButtonGroup/ButtonGroup'
import {Button} from '@/app/ui/Button/Button'
import {useRouter} from 'next/navigation'
import React from 'react'
import {routes} from '@/app/(admin)/admin/dashboard/utils/routes'
import {authenticate} from '@/lib/actions'
import {useFormStatus, useFormState} from 'react-dom'
import {ExclamationCircleIcon} from '@heroicons/react/24/solid'

export default function Page() {
  const router = useRouter()

  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  const {pending} = useFormStatus()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(routes.dashboard)
  }

  return (
    <div className="flex justify-center items-center h-full">
      <form
        className="bg-white p-10 rounded-lg shadow-lg w-[400px]"
        onSubmit={handleSubmit}
        action={dispatch}
      >
        <FormInput label={'login'} type={'text'} />
        <FormInput label={'password'} type={'password'} />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <ButtonGroup className="mt-4">
          <Button label="Vrátit zpět" type="button" variant="secondary" onClick={() => router.push(routes.home)} />
          <Button type="submit" label="Přihlásit se" aria-disabled={pending} />
        </ButtonGroup>
      </form>
    </div>
  )
}