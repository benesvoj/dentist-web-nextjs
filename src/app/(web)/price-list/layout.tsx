import {PriceListProvider} from '@/context/PriceListContext'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <PriceListProvider>
      {children}
    </PriceListProvider>
  )
}