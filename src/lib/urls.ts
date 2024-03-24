import {UrlsProps} from '@/app/(web)/lib/types'

export const urls: UrlsProps[] = [
  {id: 1, title: 'Uvod', url: '/', contentPage: 'home', description: 'Úvodní stránka ordinace zubního lékaře'},
  {id: 2, title: 'Služby', url: '/services', contentPage: 'services', description: 'Služby ordinace zubního lékaře'},
  {id: 3, title: 'Ceník', url: '/price-list', contentPage: 'priceList', description: 'Ceník ordinace zubního lékaře včetně úhrad zdravotních pojišťoven'},
  {
    id: 4, title: 'Doporučujeme', url: '/recommendation', contentPage: 'recommendation', subPages: [
      {id: 41, title: 'Pro děti', url: '/recommendation/for-children', description: 'Doporučujeme pro děti'},
      {id: 42, title: 'Pro dospělé', url: '/recommendation/for-adults', description: 'Doporučujeme pro dospělé'},
    ],
  },
  {id: 5, title: 'Náš tým', url: '/our-team', contentPage: 'ourTeam'},
  {id: 6, title: 'Spolupracujeme', url: '/cooperation', contentPage: 'cooperation'},
  {id: 7, title: 'Kontakt', url: '/contact', contentPage: 'contact'},
  {id: 8, title: 'Aktuality', url: '/news', contentPage: 'news'},
]
