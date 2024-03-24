'use client'

import {translation} from '@/locales/cs/translation'
import {Button} from '@/components/ui/button'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {useDashboardContext} from '@/context/DashboardContext'
import {NewsDialog} from '@/app/(admin)/admin/dashboard/ui/NewsDialog'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {DotsVerticalIcon} from '@radix-ui/react-icons'
import {useSettingContext} from '@/context/SettingsContext'
import {DeleteDialog} from '@/app/(admin)/admin/ui/DeleteDialog'
import {useEffect, useState} from 'react'
import {deleteNews} from '@/api/dashboardApi'
import {News} from '@/lib/definition'
import {PageSetupCard} from '@/app/(admin)/admin/dashboard/ui/PageSetupCard'

export default function Page() {
  const {isDialogOpen, setIsDialogOpen, newsData, loadNewsData} = useDashboardContext()
  const {isDeleteDialogOpen, setIsDeleteDialogOpen, contentSetupData, loadContentSetupData} = useSettingContext()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [itemToEdit, setItemToEdit] = useState<News | null>(null)

  useEffect(() => {
    loadNewsData()
    loadContentSetupData()
  }, [])

  const handleEdit = (id: string) => {
    setIsCreating(false)

    const data = newsData.find((item) => item.id === id)
    if (data) {
      setItemToEdit(data)
    }

    setIsDialogOpen(!isDialogOpen)
  }

  const handleDelete = (id: string) => {
    setIsDeleteDialogOpen(!isDeleteDialogOpen)
    setSelectedId(id)
  }

  const handleConfirmedRemoval = () => {

    if (!selectedId) {
      throw new Error('No cooperation ID for removal.')
    }

    deleteNews(selectedId)
      .then(() => {
        loadNewsData()
        setSelectedId(null)
        setIsDeleteDialogOpen(!isDeleteDialogOpen)
      })
      .catch((error) => {
        console.error('Failed to delete cooperation:', error)
        throw new Error('Failed to delete cooperation.')
      })
  }

  const handleCreating = () => {
    setIsCreating(true)
    setIsDialogOpen(!isDialogOpen)
  }

  return (
    <>
      <HeadNav title={translation.admin.dashboard.heading} />
      <div className="flex flex-wrap gap-4 mt-4">
        <Card className="w-2/3">
          <CardHeader className="flex flex-row justify-between">
            <div className="space-y-2">
              <CardTitle>{translation.admin.dashboard.news.title}</CardTitle>
              <CardDescription>{translation.admin.dashboard.news.description}</CardDescription>
            </div>
            <Button variant="ghost" className="p-2 w-8 h-8" onClick={handleCreating}>
              <PlusCircleIcon className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">{translation.admin.dashboard.news.dateFrom}</TableHead>
                  <TableHead className="w-[120px]">{translation.admin.dashboard.news.dateTo}</TableHead>
                  <TableHead>{translation.admin.dashboard.news.message}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {newsData.map(({id, dateFrom, dateTo, message}) => (
                  <TableRow key={id}>
                    <TableCell>{dateFrom}</TableCell>
                    <TableCell>{dateTo}</TableCell>
                    <TableCell>{message}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                          >
                            <DotsVerticalIcon className="h-4 w-4" />
                            <span className="sr-only">{translation.admin.buttons.openMenu}</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px] bg-white">
                          {id && <DropdownMenuItem
                            onClick={() => handleEdit(id)}>{translation.admin.buttons.edit}</DropdownMenuItem>}
                          {id &&
                            <DropdownMenuItem
                              onClick={() => handleDelete(id)}>{translation.admin.buttons.delete}</DropdownMenuItem>}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <PageSetupCard data={contentSetupData} loadData={loadContentSetupData} />
      </div>
      {isDialogOpen && <NewsDialog isCreating={isCreating} data={itemToEdit} />}
      {isDeleteDialogOpen && <DeleteDialog handleConfirmedRemoval={handleConfirmedRemoval} />}
    </>
  )
}
