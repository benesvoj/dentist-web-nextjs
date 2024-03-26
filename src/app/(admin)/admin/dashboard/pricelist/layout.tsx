import {PriceListProvider} from '@/context/PriceListContext'
import {SettingProvider} from '@/context/SettingsContext'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <SettingProvider>
      <PriceListProvider>
        {children}
      </PriceListProvider>
    </SettingProvider>
  )
}