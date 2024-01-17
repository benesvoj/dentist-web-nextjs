import {PageBody} from '@/app/ui/PageBody'
import {urls} from '@/app/lib/urls'
import {employees} from '@/app/lib/website'
import {Card} from '@/app/ui/Card'

export default function OurTeam() {
  return (
    <PageBody title={urls[4].title} flexCol>
      <h3>Lékaři</h3>
      <div className={'flex space-x-4 w-full'}>
        {employees
          .filter((employee) => employee.position === 'zubní lékař')
          .map((employee, index) => (
            <Card heading={employee.name} key={index}>
              <div>{employee.position}</div>
              <div>
                {employee.experience
                  ? employee.experience?.map((experience, index) => (
                      <div key={index} className={'flex space-x-4'}>
                        <div className={'text-sm'}>
                          {experience.from} - {experience.to}
                        </div>
                        <div className={'text-sm'}>{experience.text}</div>
                      </div>
                    ))
                  : null}
              </div>
              <div>{employee.description}</div>
            </Card>
          ))}
      </div>
      <h3>Sestra</h3>
      <div className={'flex space-x-4 w-full'}>
        {employees
          .filter((employee) => employee.position === 'sestra')
          .map((employee, index) => (
            <Card heading={employee.name} key={index}>
              <div>{employee.position}</div>
              <div>
                {employee.experience
                  ? employee.experience?.map((experience, index) => (
                      <div key={index} className={'flex space-x-4'}>
                        <div className={'text-sm'}>
                          {experience.from} - {experience.to}
                        </div>
                        <div className={'text-sm'}>{experience.text}</div>
                      </div>
                    ))
                  : null}
              </div>
              <div>{employee.description}</div>
            </Card>
          ))}
      </div>
    </PageBody>
  )
}
