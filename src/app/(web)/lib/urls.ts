import {UrlsProps} from '@/app/(web)/lib/types'

export const urls: UrlsProps[] = [
  {id: 1, title: 'Uvod', url: '/'},
  {id: 2, title: 'Služby', url: '/services'},
  {id: 3, title: 'Ceník', url: '/price-list'},
  {
    id: 4, title: 'Doporučujeme', url: '/recommendation', subPages: [
      {id: 41, title: 'Pro děti', url: '/recommendation/for-children', description: 'Doporučujeme pro děti'},
      {id: 42, title: 'Pro dospělé', url: '/recommendation/for-adults', description: 'Doporučujeme pro dospělé'},
    ],
  },
  {id: 5, title: 'Náš tým', url: '/our-team'},
  {id: 6, title: 'Spolupracujeme', url: '/cooperation'},
  {id: 7, title: 'Kontakt', url: '/contact'},
  {id: 8, title: 'Aktuality', url: '/news'},
]
