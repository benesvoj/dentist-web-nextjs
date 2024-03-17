import {PageBody} from '@/app/(web)/ui/PageBody'
import {urls} from '@/app/(web)/lib/urls'
import {employees} from '@/app/(web)/lib/website'
import {Card} from '@/app/(web)/ui/Card'
import {ExperienceProps} from '@/app/(web)/lib/types'
import {Table, TableBody, TableCaption, TableCell, TableRow} from '@/components/ui/table'
import {InfoCard} from '@/app/ui/InfoCard/InfoCard'
import {Separator} from '@/components/ui/separator'
import {EmployeeProvider} from '@/context/EmployeeContext'

export default function OurTeam() {
  return (
    <EmployeeProvider>
      <PageBody title={urls[4].title} flexCol>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 justify-items-center">
          {employees
            .map((employee) => (
              <InfoCard key={employee.id} title={employee.name}>
                <div className="text-center">{employee.position}</div>
                {employee.experience ? (
                    <Table>
                      <TableCaption>{employee.description}</TableCaption>
                      <TableBody>
                        {employee.experience?.map((experience: ExperienceProps) => (
                          <TableRow key={experience.id}>
                            <TableCell className="w-1/3 p-0">{experience.from} - {experience.to}</TableCell>
                            <TableCell className="p-2">{experience.text}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>)
                  : null}
              </InfoCard>
            ))}
        </div>
      </PageBody>
    </EmployeeProvider>
  )
}
