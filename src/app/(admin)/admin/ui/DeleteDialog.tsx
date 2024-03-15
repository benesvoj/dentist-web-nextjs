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
import {translation} from '@/locales/cs/translation'

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
          <DialogTitle>{translation.admin.deleteDialog.title}</DialogTitle>
          <DialogDescription>{translation.admin.deleteDialog.description}</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">{translation.admin.buttons.cancel}</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleConfirmedRemoval}>{translation.admin.buttons.delete}</Button>
          </DialogFooter>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}