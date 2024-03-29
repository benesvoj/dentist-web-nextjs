import Link from 'next/link'
import {PowerIcon} from '@heroicons/react/24/outline'
import NavLinks from '@/app/(admin)/admin/dashboard/ui/NavLinks'
import {adminUrl} from '@/app/(admin)/admin/dashboard/utils/urls'
import {signOut} from '@/auth'
import {translation} from '@/locales/cs/translation'

export default function SideNav() {
  return (
    <div className="flex h-4/5 flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href={adminUrl}
      >
        <div className="w-32 text-white md:w-40">{/*<AcmeLogo />*/}</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
        action={async () => {
          'use server'
          await signOut()
        }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">{translation.general.logout}</div>
          </button>
        </form>
      </div>
    </div>
  )
}
