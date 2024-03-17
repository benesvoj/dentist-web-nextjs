import {
  CursorArrowRippleIcon,
  CogIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  InformationCircleIcon, BeakerIcon, SparklesIcon, UsersIcon,
} from '@heroicons/react/24/outline'

export const adminUrl = '/admin/dashboard'

export const links = [
  {name: 'Úvod', href: adminUrl, icon: HomeIcon},
  {name: 'Služby', href: `${adminUrl}/services`, icon: BeakerIcon},
  {name: 'Ceník', href: `${adminUrl}/pricelist`, icon: DocumentDuplicateIcon},
  {name: 'Kontaktní informace', href: `${adminUrl}/contact`, icon: InformationCircleIcon},
  {name: 'Spolupráce', href: `${adminUrl}/cooperation`, icon: CursorArrowRippleIcon},
  {name: 'Doporučení', href: `${adminUrl}/recommendation`, icon: SparklesIcon},
  {name: 'Zaměstnanci', href: `${adminUrl}/employees`, icon: UsersIcon},
  {name: 'Nastavení', href: `${adminUrl}/settings`, icon: CogIcon},
]