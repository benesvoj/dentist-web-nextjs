import {OfficeHoursProps} from '@/app/(web)/lib/types'
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'

interface OfficeHoursTableProps {
  rows: OfficeHoursProps[]
}

export const OfficeHoursTable: React.FC<OfficeHoursTableProps> = ({rows}) => {
  return (
    <Table>
      <TableCaption>
        <p className={'font-bold py-2'}>Provozní doba začíná hodinu před ordinační dobou.</p>
        <p className={'font-bold'}>Omezený provoz ordinace z důvodu mateřské dovolené.</p>
      </TableCaption>
      <TableBody>
        {rows.length > 0 ? (
          rows.map(({day, morning, afternoon}) => (
            <TableRow key={day}>
              <TableCell>{day}</TableCell>
              <TableCell>{morning ? morning : '-'}</TableCell>
              <TableCell>{afternoon ? afternoon : '-'}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>There are no office hours</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
