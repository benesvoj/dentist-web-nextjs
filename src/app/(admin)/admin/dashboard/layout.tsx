import SideNav from '@/app/(admin)/admin/dashboard/ui/SideNav'
import {EmployeeProvider} from '@/context/EmployeeContext'
import {PriceListProvider} from '@/context/PriceListContext'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow mx-3 my-4 md:mx-2 px-3 py-4 md:px-2 md:overflow-y-auto bg-gray-50 h-4/5">
        <EmployeeProvider>
            {children}
        </EmployeeProvider>
      </div>
    </div>
  )
}
