'use client'

import './ui/styles.css'
import {FormInput} from '@/app/(admin)/admin/ui/FormInput'
import {ButtonGroup} from '@/app/ui/ButtonGroup/ButtonGroup'
import {Button} from '@/app/ui/Button/Button'
import {useRouter} from 'next/navigation'
import React from 'react'
import {authenticate} from '@/lib/actions'
import {useFormStatus, useFormState} from 'react-dom'
import {AtSymbolIcon, ExclamationCircleIcon, KeyIcon} from '@heroicons/react/24/solid'
import {routes} from '@/utils/routes'
import {translation} from '@/locales/cs/translation'

export default function Page() {
  const router = useRouter()

  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  const {pending} = useFormStatus()

  return (
    <div className="flex justify-center items-center h-full">
      <form
        className="bg-white p-10 rounded-lg shadow-lg w-[400px]"
        action={dispatch}
      >
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
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
          <Button label={translation.general.returnBackOnWeb} type="button" variant="secondary" onClick={() => router.push(routes.home)} />
          <Button type="submit" label={translation.general.login} aria-disabled={pending} />
        </ButtonGroup>
      </form>
    </div>
  )
}