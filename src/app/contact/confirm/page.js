import React, { Suspense } from 'react'
import Stepper from '@/components/features/contact/Stepper'
import ConfirmContent from './ConfirmContent'

const ConfirmPage = () => {
  return (
    <div className='mx-auto max-w-[90%] py-24 md:tracking-wide'>
      <Stepper step1={true} step2={true} />
      <Suspense fallback={<div>読み込み中...</div>}>
        <ConfirmContent />
      </Suspense>
    </div>
  )
}

export default ConfirmPage
