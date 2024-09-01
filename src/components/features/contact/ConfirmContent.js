'use client'

import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import LoadingButton from './LoadingButton'

const ConfirmContent = () => {
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const entries = searchParams.entries()
  const query = Object.fromEntries(entries)
  const router = useRouter()

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await axios.post('/api/contact', {
        name: query.name,
        name_kana: query.name_kana,
        email: query.mail,
        email_confirm: query.mail_confirm,
        contents: query.contents,
      })

      if (res.status === 200) {
        router.push('/contact/complete')
      } else {
        alert(`メッセージの送信に失敗しました。ステータス: ${res.status}`)
      }
    } catch (error) {
      alert(`エラーが発生しました: ${error.message}`)
    } finally {
      setLoading(false)
    }
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
      <LoadingButton loading={loading} handleClick={handleSubmit} handleBack={handleBack}></LoadingButton>
    </>
  )
}

export default ConfirmContent
