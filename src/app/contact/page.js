'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Stepper from '@/components/features/contact/Stepper'
import { privacyPolicyText } from '@/data/privacyPolicy.js'
import useAnimation from '@/hooks/useAnimation'

const ContactPage = () => {
  const animate = useAnimation()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [isChecked, setIsChecked] = useState(false)
  const mail = watch('mail')
  const router = useRouter()

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data) => {
    setIsSubmitting(true)
    const queryString = new URLSearchParams(data).toString()
    router.push(`/contact/confirm?${queryString}`)
  }

  const inputClass = (hasError) =>
    `w-full rounded-full border bg-white/80 px-5 py-3 text-sm tracking-normal outline-none transition focus:ring-2 focus:ring-secondary-brown-light/30 ${
      hasError ? 'border-red-400' : 'border-gray-200 focus:border-secondary-brown-light'
    }`

  const textareaClass = (hasError) =>
    `w-full rounded-2xl border bg-white/80 px-5 py-3 text-sm tracking-normal outline-none transition resize-none focus:ring-2 focus:ring-secondary-brown-light/30 ${
      hasError ? 'border-red-400' : 'border-gray-200 focus:border-secondary-brown-light'
    }`

  return (
    <div>
      {/* Form section */}
      <div className='bg-primary-pink-light'>
        <motion.div
          variants={animate.scrollFadeIn}
          initial={animate.scrollFadeIn.initial}
          viewport={animate.scrollFadeIn.viewport}
          whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          className='mx-auto max-w-2xl px-6 py-36 md:tracking-wide'
        >
          <Stepper step1={true} />

          <div className='mt-12 text-center'>
            <p className='text-xs tracking-[.4em] text-gray-400'>CONTACT</p>
            <h1 className='mt-2 text-2xl font-thin tracking-[.25em] text-gray-800'>お問い合わせ</h1>
            <div className='mx-auto mt-3 h-px w-8 bg-secondary-brown-light' />
          </div>

          <p className='mt-8 text-center text-xs tracking-widest text-gray-500'>
            以下のフォームよりお気軽にご連絡ください
          </p>
          <p className='mt-2 text-center text-xs text-secondary-brown-light'>* は入力必須項目です</p>

          <form onSubmit={handleSubmit(onSubmit)} className='mt-10 flex flex-col gap-6'>
            {/* お名前 */}
            <div className='flex flex-col gap-1'>
              <label className='text-xs tracking-widest text-gray-600'>
                お名前 <span className='text-secondary-brown-light'>*</span>
              </label>
              <input
                {...register('name', { required: '入力必須です' })}
                className={inputClass(errors.name)}
                type='text'
                placeholder='例）田中 太郎'
              />
              {errors.name && <span className='text-xs text-red-400'>{errors.name.message}</span>}
            </div>

            {/* フリガナ */}
            <div className='flex flex-col gap-1'>
              <label className='text-xs tracking-widest text-gray-600'>
                フリガナ <span className='text-secondary-brown-light'>*</span>
              </label>
              <input
                {...register('name_kana', {
                  required: '入力必須です',
                  pattern: { value: /^[ァ-ヶー]*$/, message: 'カタカナのみ入力してください' },
                })}
                className={inputClass(errors.name_kana)}
                type='text'
                placeholder='例）タナカ タロウ'
              />
              {errors.name_kana && <span className='text-xs text-red-400'>{errors.name_kana.message}</span>}
            </div>

            {/* メールアドレス */}
            <div className='flex flex-col gap-1'>
              <label className='text-xs tracking-widest text-gray-600'>
                メールアドレス <span className='text-secondary-brown-light'>*</span>
              </label>
              <input
                {...register('mail', {
                  required: '入力必須です',
                  pattern: { value: /\S+@\S+\.\S+/, message: '有効なメールアドレスを入力してください' },
                })}
                className={inputClass(errors.mail)}
                type='email'
                placeholder='例）example@mail.com'
              />
              {errors.mail && <span className='text-xs text-red-400'>{errors.mail.message}</span>}
            </div>

            {/* メールアドレス確認 */}
            <div className='flex flex-col gap-1'>
              <label className='text-xs tracking-widest text-gray-600'>
                メールアドレス（確認用） <span className='text-secondary-brown-light'>*</span>
              </label>
              <input
                {...register('mail_confirm', {
                  required: '入力必須です',
                  pattern: { value: /\S+@\S+\.\S+/, message: '有効なメールアドレスを入力してください' },
                  validate: (value) => value === mail || 'メールアドレスが一致しません',
                })}
                className={inputClass(errors.mail_confirm)}
                type='email'
                placeholder='例）example@mail.com'
              />
              {errors.mail_confirm && <span className='text-xs text-red-400'>{errors.mail_confirm.message}</span>}
            </div>

            {/* お問い合わせ内容 */}
            <div className='flex flex-col gap-1'>
              <label className='text-xs tracking-widest text-gray-600'>
                お問い合わせ内容 <span className='text-secondary-brown-light'>*</span>
              </label>
              <textarea
                {...register('contents', { required: '入力必須です' })}
                className={`${textareaClass(errors.contents)} h-40`}
                placeholder='例）料理初心者でも参加できますか？'
              />
              {errors.contents && <span className='text-xs text-red-400'>{errors.contents.message}</span>}
            </div>

            {/* プライバシーポリシー */}
            <div className='flex flex-col gap-1'>
              <label className='text-xs tracking-widest text-gray-600'>個人情報の取り扱い</label>
              <textarea
                className='h-40 w-full rounded-2xl border border-gray-200 bg-white/50 px-5 py-3 text-xs tracking-normal text-gray-500 outline-none'
                value={privacyPolicyText}
                readOnly
              />
            </div>

            {/* チェックボックス */}
            <label className='flex cursor-pointer items-center justify-center gap-3'>
              <input
                type='checkbox'
                className='h-4 w-4 accent-secondary-brown-light'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className='text-xs tracking-widest text-gray-700'>プライバシーポリシーに同意する</span>
            </label>

            {/* 送信ボタン */}
            <div className='flex justify-center pt-4'>
              <button
                type='submit'
                disabled={!isChecked || isSubmitting}
                className={`flex items-center gap-3 rounded-full px-16 py-4 text-sm tracking-widest transition-all duration-300 ${
                  isChecked && !isSubmitting
                    ? 'bg-secondary-brown-light text-white shadow-md hover:opacity-70'
                    : 'cursor-not-allowed bg-gray-200 text-gray-400'
                }`}
              >
                {isSubmitting && (
                  <svg className='h-4 w-4 animate-spin' viewBox='0 0 24 24' fill='none'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />
                  </svg>
                )}
                {isSubmitting ? '確認画面へ移動中...' : '入力内容を確認する'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
