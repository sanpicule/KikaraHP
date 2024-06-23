'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import Stepper from '@/components/features/contact/Stepper'
import back from '@/public/images/contactBack.png'

const ConfirmPage = () => {
  const searchParams = useSearchParams()
  const entries = searchParams.entries()
  const query = Object.fromEntries(entries)
  const router = useRouter()

  const handleSubmit = () => {
    // TODO:API実装
    router.push('/contact/complete')
  }

  const handleBack = () => {
    router.back()
  }
  return (
    <div className='mx-auto max-w-[90%] py-24 md:tracking-wide'>
      <Stepper step1={true} step2={true} />
      <div className='mx-auto mt-12 flex flex-col items-center gap-12 p-12'>
        <div className='mx-auto flex w-[60%] items-center gap-8'>
          <p className='w-1/3'>名前</p>
          <p className='w-2/3'>{query.name}</p>
        </div>
        <div className='mx-auto flex w-[60%] items-center gap-8'>
          <p className='w-1/3'>フリガナ</p>
          <p className='w-2/3'>{query.name_kana}</p>
        </div>
        <div className='mx-auto flex w-[60%] items-center gap-8'>
          <p className='w-1/3'>メールアドレス</p>
          <p className='w-2/3'>{query.mail}</p>
        </div>
        <div className='mx-auto flex w-[60%] items-center gap-8'>
          <p className='w-1/3'>メールアドレス（確認中）</p>
          <p className='w-2/3'>{query.mail_confirm}</p>
        </div>
        <div className='mx-auto flex w-[60%] items-center gap-8'>
          <p className='w-1/3'>内容</p>
          <p className='w-2/3'>{query.contents}</p>
        </div>
      </div>
      <div className='text-center'>
        <button
          type='submit'
          onClick={handleSubmit}
          className='mt-8 cursor-pointer rounded-xl bg-secondary-brown-light px-12 py-4 transition-all duration-300 hover:opacity-60'
        >
          返信する
        </button>
        <Image
          src={back}
          alt='back_button'
          width={60}
          height={40}
          onClick={handleBack}
          className='mx-auto mt-12 cursor-pointer transition-all duration-300 hover:opacity-70'
        />
      </div>
    </div>
  )
}

export default ConfirmPage
