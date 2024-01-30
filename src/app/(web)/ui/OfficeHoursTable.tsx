import {OfficeHoursProps} from '@/app/(web)/lib/types'

interface OfficeHoursTableProps {
  rows: OfficeHoursProps[]
}

export const OfficeHoursTable: React.FC<OfficeHoursTableProps> = ({rows}) => {
  return (
    <table>
      <tbody>
        {rows.length > 0 ? (
          rows.map(({day, morning, afternoon}) => {
            return (
              <tr key={day}>
                <td>{day}</td>
                <td>{morning ? morning : '-'}</td>
                <td>{afternoon ? afternoon : '-'}</td>
              </tr>
            )
          })
        ) : (
          <tr>
            <td>There are no office hours</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
