import {PageBody} from '@/app/ui/PageBody'
import {urls} from '@/app/lib/urls'
import {CooperationConfig} from '@/app/lib/website'
import React from 'react'
import {CooperationSection} from '@/app/cooperation/ui/CooperationSection'

export default function Cooperation() {
  return (
    <PageBody title={urls[5].title} flexCol>
      {CooperationConfig.map((item, index) => (
        <CooperationSection key={index} title={item.title} data={item.data} type={item.type} />
      ))}
    </PageBody>
  )
}
