import {OfficeHoursProps} from "@/app/lib/types";

export const OfficeHoursTable = (rows: OfficeHoursProps[]) => {
    // console.log(typeof officeHours)
    // console.log(officeHours)
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