'use client'

import {PageBody} from '@/app/(web)/ui/PageBody'
import {urls} from '@/lib/urls'
import React, {useEffect} from 'react'
import {CooperationSection} from '@/app/(web)/cooperation/ui/CooperationSection'
import {useCooperationContext} from '@/context/CooperationContext'

export default function Cooperation() {
  const {cooperationTypes, loadCooperationTypes, loadCooperationData, cooperationData} = useCooperationContext()

  useEffect(() => {
    loadCooperationTypes()
    loadCooperationData()
  }, [])

  return (
    <PageBody title={urls[5].title} flexCol>
      {cooperationTypes.map((item) => (
        <CooperationSection key={item.id} cooperationType={item} cooperationData={cooperationData} />
      ))}
    </PageBody>
  )
}
