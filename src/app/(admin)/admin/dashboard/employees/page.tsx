'use client'
import {HeadNav} from '@/app/(admin)/admin/dashboard/ui/HeadNav'
import {ButtonGroup} from '@/app/ui/ButtonGroup/ButtonGroup'
import {Button} from '@/app/ui/Button/Button'
import {employees} from '@/app/(web)/lib/website'
import {IconButton} from '@/app/(admin)/admin/dashboard/ui/IconButton'
import {PencilSquareIcon, TrashIcon} from '@heroicons/react/24/outline'
import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  const handleEmployeeEdit = () => {
    setIsOpen(true)
    console.log('openState', isOpen)
  }

  const DialogComponent = () => {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(prevState => !prevState)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Editace zaměstnance
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Na následujícím formuláří je možné zeditovat zaměstnance.
                    </p>
                  </div>

                  <div className="mt-4">
                    <Button
                      type="button"
                      onClick={() => setIsOpen(prevState => !prevState)}
                      label='Uložit'
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    )
  }

  return (
    <>
      <HeadNav title="Seznam zamestnancu a jejich detail">
        <ButtonGroup>
          <Button label="Pridat zaznam" type="button" />
        </ButtonGroup>
      </HeadNav>
      <div className="mt-4 p-8">
        <table className="w-full border-slate-600 border-2">
          <thead>
          <tr className="flex w-full p-4">
            <th>ID</th>
            <th>Celé jméno</th>
            <th>Pozice</th>
            <th>Detail</th>
          </tr>
          </thead>
          <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="p-4 flex justify-between items-center border-2">
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.description}</td>
              <td>
                <ButtonGroup>
                  <IconButton icon={<PencilSquareIcon />} onClick={handleEmployeeEdit} />
                  <IconButton icon={<TrashIcon />} />
                </ButtonGroup>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      {isOpen && <DialogComponent />}
    </>
  )
}