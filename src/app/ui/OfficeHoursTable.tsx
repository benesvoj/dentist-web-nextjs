import {OfficeHoursProps} from "@/app/lib/types";

interface OfficeHoursTableProps {
    rows: OfficeHoursProps[];
}

export const OfficeHoursTable: React.FC<OfficeHoursTableProps> = ({ rows }) => {
    return (
        <table>
            {rows.map(({day, morning, afternoon}, index) => {
                return (
                    <tr key={index}>
                        <th>{day}</th>
                        <th>{morning ? morning : '-'}</th>
                        <th>{afternoon ? afternoon : '-'}</th>
                    </tr>
                )
            })}
        </table>
    )
}