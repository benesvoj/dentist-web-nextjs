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
import {useEmployeeContext} from '@/context/EmployeeContext'
import {deleteEmployee} from '@/api/employeeApi'
import {useSettingContext} from '@/context/SettingsContext'

type DeleteDialogProps = {
  id?: string
  handleConfirmedRemoval: () => void
}

export const DeleteDialog = ({handleConfirmedRemoval}: DeleteDialogProps) => {
  const {isDeleteDialogOpen, setIsDeleteDialogOpen} = useSettingContext()

  return (
    <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Smazani zaznamu</DialogTitle>
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