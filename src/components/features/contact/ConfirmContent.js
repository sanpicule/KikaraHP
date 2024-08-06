'use client'

import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react'
import back from '@/public/images/contactBack.png'

const ConfirmContent = () => {
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
    <>
      <div className='mx-auto mt-12 flex flex-col items-center gap-12 p-12'>
        <div className='mx-auto flex w-full flex-col items-center gap-4 md:w-[60%] md:flex-row md:gap-8'>
          <p className='w-full font-bold md:w-1/3'>名前</p>
          <p className='ml-12 w-full md:ml-0 md:w-2/3'>{query.name}</p>
        </div>
        <div className='mx-auto flex w-full flex-col items-center gap-4 md:w-[60%] md:flex-row md:gap-8'>
          <p className='w-full font-bold md:w-1/3'>フリガナ</p>
          <p className='ml-12 w-full md:ml-0 md:w-2/3'>{query.name_kana}</p>
        </div>
        <div className='mx-auto flex w-full flex-col items-center gap-4 md:w-[60%] md:flex-row md:gap-8'>
          <p className='w-full font-bold md:w-1/3'>メールアドレス</p>
          <p className='ml-12 w-full md:ml-0 md:w-2/3'>{query.mail}</p>
        </div>
        <div className='mx-auto flex w-full flex-col items-center gap-4 md:w-[60%] md:flex-row md:gap-8'>
          <p className='w-full font-bold md:w-1/3'>メールアドレス（確認用）</p>
          <p className='ml-12 w-full md:ml-0 md:w-2/3'>{query.mail_confirm}</p>
        </div>
        <div className='mx-auto flex w-full flex-col items-center gap-4 md:w-[60%] md:flex-row md:gap-8'>
          <p className='w-full font-bold md:w-1/3'>内容</p>
          <p className='ml-12 w-full md:ml-0 md:w-2/3'>{query.contents}</p>
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
    </>
  )
}

export default ConfirmContent
