import {
  CursorArrowRippleIcon,
  CogIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  InformationCircleIcon, BeakerIcon, SparklesIcon, UsersIcon,
} from '@heroicons/react/24/outline'

export const adminUrl = '/admin/dashboard'

export const links = [
  {name: 'Úvod', href: adminUrl, icon: HomeIcon, contentPage: 'dashboard'},
  {name: 'Služby', href: `${adminUrl}/services`, icon: BeakerIcon, contentPage: 'services'},
  {name: 'Ceník', href: `${adminUrl}/pricelist`, icon: DocumentDuplicateIcon, contentPage: 'priceList'},
  {name: 'Spolupráce', href: `${adminUrl}/cooperation`, icon: CursorArrowRippleIcon, contentPage: 'cooperation'},
  {name: 'Doporučení', href: `${adminUrl}/recommendation`, icon: SparklesIcon, contentPage: 'recommendation'},
  {name: 'Zaměstnanci', href: `${adminUrl}/employees`, icon: UsersIcon, contentPage: 'ourTeam'},
  {name: 'Nastavení', href: `${adminUrl}/settings`, icon: CogIcon, contentPage: 'settings'},
]