'use client'

import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import LoadingButton from './LoadingButton'

const ConfirmContent = () => {
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const query = {
    name: searchParams.get('name') ?? '',
    name_kana: searchParams.get('name_kana') ?? '',
    mail: searchParams.get('mail') ?? '',
    mail_confirm: searchParams.get('mail_confirm') ?? '',
    contents: searchParams.get('contents') ?? '',
  }

  const fields = [
    { label: 'お名前', value: query.name },
    { label: 'フリガナ', value: query.name_kana },
    { label: 'メールアドレス', value: query.mail },
    { label: 'メールアドレス（確認用）', value: query.mail_confirm },
    { label: 'お問い合わせ内容', value: query.contents },
  ]

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
      <div className='mx-auto mt-12 max-w-xl'>
        <ul className='flex flex-col gap-6'>
          {fields.map(({ label, value }, index) => (
            <li key={index} className='rounded-2xl bg-white/70 px-6 py-4 shadow-sm'>
              <p className='text-xs tracking-widest text-gray-400'>{label}</p>
              <p className='mt-1 whitespace-pre-wrap text-sm text-gray-800'>{value || '—'}</p>
            </li>
          ))}
        </ul>
      </div>
      <LoadingButton loading={loading} handleClick={handleSubmit} handleBack={handleBack} />
    </>
  )
}

export default ConfirmContent
