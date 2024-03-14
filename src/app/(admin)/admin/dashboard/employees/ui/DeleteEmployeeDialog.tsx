import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {DialogBody} from 'next/dist/client/components/react-dev-overlay/internal/components/Dialog'
import {useEmployeeContext} from '@/app/(admin)/admin/context/EmployeeContext'
import {deleteEmployee} from '@/lib/employeeApi'

export const DeleteEmployeeDialog = ({id}: {id: string}) => {
  const {isDeleteDialogOpen, setIsDeleteDialogOpen, reloadData} = useEmployeeContext()

  const handleConfirmedRemoval = () => {
    console.log('Remove employee with id:', id)
    deleteEmployee(id)
    reloadData()
    setIsDeleteDialogOpen(false)
  }

  return (
    <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Smazani zazanamu</DialogTitle>
          <DialogDescription>Opravdu chcete smazat zaznam?</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Zrusit</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleConfirmedRemoval}>Smazat</Button>
          </DialogFooter>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}