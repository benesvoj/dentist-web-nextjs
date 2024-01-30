import {PageBody} from '@/app/(web)/ui/PageBody'
import {urls} from '@/app/(web)/lib/urls'
import {CooperationConfig} from '@/app/(web)/lib/website'
import React from 'react'
import {CooperationSection} from '@/app/(web)/cooperation/ui/CooperationSection'

export default function Cooperation() {
  return (
    <PageBody title={urls[5].title} flexCol>
      {CooperationConfig.map((item) => (
        <CooperationSection key={item.id} title={item.title} data={item.data} type={item.type} />
      ))}
    </PageBody>
  )
}
