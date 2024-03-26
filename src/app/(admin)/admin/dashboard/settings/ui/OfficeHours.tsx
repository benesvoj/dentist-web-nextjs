import {Label} from '@/components/ui/label'
import {translation} from '@/locales/cs/translation'
import {Input} from '@/components/ui/input'

type Weekdays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

const weekdays: Weekdays[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

type OfficeHoursRowProps = {
  day: Weekdays
}

export const OfficeHours = () => {
  return (
    <>
      <p>{translation.admin.officeHours.title}</p>
      {weekdays.map((day) => (
        <OfficeHoursRow key={day} day={day} />
      ))}
    </>
  )
}

const OfficeHoursRow = ({day}: OfficeHoursRowProps) => {
  const translatedDay = translation.general.weekdays[day]

  return (
    <div className="flex gap-4 items-center my-2">
      <Label className='w-[80px]'>{translatedDay}</Label>
      <div className="flex border rounded p-2 gap-2">
        <Input type="time" className="w-[100px]" />
        <Input type="time" className="w-[100px]" />
      </div>
      <div className="flex border rounded p-2 gap-2">
        <Input type="time" className="w-[100px]" />
        <Input type="time" className="w-[100px]" />
      </div>
    </div>
  )
}