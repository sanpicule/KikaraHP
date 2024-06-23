import React from 'react'

const Stepper = ({ step1 = false, step2 = false, step3 = false }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <p className={`text-xxs ${step1 ? 'text-secondary-brown' : 'text-gray-300'}`}>STEP 01</p>
        <div className={`h-4 w-4 rounded-full ${step1 ? 'bg-secondary-brown' : 'bg-gray-300'}`}></div>
        <p className={`text-xs ${step1 ? 'text-secondary-brown' : 'text-gray-300'}`}>項目の入力</p>
      </div>
      <div class='h-[1px] w-32 bg-gray-400'></div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <p className={`text-xxs ${step2 ? 'text-secondary-brown' : 'text-gray-300'}`}>STEP 02</p>
        <div className={`h-4 w-4 rounded-full ${step2 ? 'bg-secondary-brown' : 'bg-gray-300'}`}></div>
        <p className={`text-xs ${step2 ? 'text-secondary-brown' : 'text-gray-300'}`}>内容確認</p>
      </div>
      <div class='h-[1px] w-32 bg-gray-400'></div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <p className={`text-xxs ${step3 ? 'text-secondary-brown' : 'text-gray-300'}`}>STEP 03</p>
        <div className={`h-4 w-4 rounded-full ${step3 ? 'bg-secondary-brown' : 'bg-gray-300'}`}></div>
        <p className={`text-xs ${step3 ? 'text-secondary-brown' : 'text-gray-300'}`}>送信完了</p>
      </div>
    </div>
  )
}

export default Stepper
