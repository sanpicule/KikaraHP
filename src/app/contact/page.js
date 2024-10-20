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

  const onSubmit = (data) => {
    const queryString = new URLSearchParams(data).toString()
    router.push(`/contact/confirm?${queryString}`)
  }
  return (
    <motion.div
      className='mx-auto max-w-[90%] py-36 md:tracking-wide'
      variants={animate.scrollFadeIn}
      initial={animate.scrollFadeIn.initial}
      whileInView={animate.scrollFadeIn.whileInView}
      viewport={animate.scrollFadeIn.viewport}
    >
      <Stepper step1={true} />
      <p className='mt-12 text-center text-sm text-kikara-chip-red'>*は入力必須です</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto mt-12 flex flex-col items-center gap-8 p-4 md:gap-12 md:p-12'
      >
        <div className='mx-auto flex w-full flex-col items-center md:flex-row md:gap-4 lg:w-[70%]'>
          <p className='w-full md:w-1/3'>
            お名前<span className='text-kikara-chip-red'>*</span>
          </p>
          <div className='flex w-full flex-col md:w-2/3 '>
            <input
              {...register('name', {
                required: '入力必須です',
              })}
              className={`w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-4 py-2 tracking-normal`}
              type='text'
              placeholder='例）田中 太郎'
            />
            {errors.name && <span className='mt-2 text-xs tracking-normal text-red-600'>{errors.name.message}</span>}
          </div>
        </div>
        <div className='mx-auto flex w-full flex-col items-center md:flex-row md:gap-4 lg:w-[70%]'>
          <p className='w-full md:w-1/3'>
            フリガナ<span className='text-kikara-chip-red'>*</span>
          </p>
          <div className='flex w-full flex-col md:w-2/3 '>
            <input
              {...register('name_kana', {
                required: '入力必須です',
                pattern: {
                  value: /^[ァ-ヶー]*$/,
                  message: 'カタカナのみ入力してください',
                },
              })}
              className={`w-full rounded-md border ${errors.name_kana ? 'border-red-500' : 'border-gray-300'} px-4 py-2 tracking-normal`}
              type='text'
              placeholder='例）タナカ タロウ'
            />
            {errors.name_kana && (
              <span className='mt-2 text-xs tracking-normal text-red-600'>{errors.name_kana.message}</span>
            )}
          </div>
        </div>
        <div className='mx-auto flex w-full flex-col items-center md:flex-row md:gap-4 lg:w-[70%]'>
          <p className='w-full md:w-1/3'>
            メールアドレス<span className='text-kikara-chip-red'>*</span>
          </p>
          <div className='flex w-full flex-col md:w-2/3 '>
            <input
              {...register('mail', {
                required: '入力必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
              className={`w-full rounded-md border ${errors.mail ? 'border-red-500' : 'border-gray-300'} px-4 py-2 tracking-normal`}
              type='email'
              placeholder='例）example.mail.com'
            />
            {errors.mail && <span className='mt-2 text-xs tracking-normal text-red-600'>{errors.mail.message}</span>}
          </div>
        </div>
        <div className='mx-auto flex w-full flex-col items-center md:flex-row md:gap-4 lg:w-[70%]'>
          <p className='w-full md:w-1/3'>
            メールアドレス（確認用）<span className='text-kikara-chip-red'>*</span>
          </p>
          <div className='flex w-full flex-col md:w-2/3 '>
            <input
              {...register('mail_confirm', {
                required: '入力必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
                validate: (value) => value === mail || 'メールアドレスが一致しません',
              })}
              className={`w-full rounded-md border ${errors.mail_confirm ? 'border-red-500' : 'border-gray-300'} px-4 py-2 tracking-normal`}
              type='email'
              placeholder='例）example.mail.com'
            />
            {errors.mail_confirm && (
              <span className='mt-2 text-xs tracking-normal text-red-600'>{errors.mail_confirm.message}</span>
            )}
          </div>
        </div>
        <div className='mx-auto flex w-full flex-col items-center md:flex-row md:gap-4 lg:w-[70%]'>
          <p className='w-full md:w-1/3'>
            問い合わせ内容<span className='text-kikara-chip-red'>*</span>
          </p>
          <div className='flex w-full flex-col md:w-2/3 '>
            <textarea
              {...register('contents', {
                required: '入力必須です',
              })}
              className={`h-64 w-full resize-none rounded-md border ${errors.contents ? 'border-red-500' : 'border-gray-300'} px-4 py-2 tracking-normal`}
              type='text'
              placeholder='例）料理初心者でも参加できますか？'
            />
            {errors.contents && (
              <span className='mt-2 text-xs tracking-normal text-red-600'>{errors.contents.message}</span>
            )}
          </div>
        </div>
        <div className='mx-auto flex w-full flex-col items-center md:flex-row md:gap-4 lg:w-[70%]'>
          <p className='w-full md:w-1/3'>個人情報の取り扱い</p>
          <div className='flex w-full flex-col md:w-2/3 '>
            <textarea
              className={`h-64 w-full rounded-md border border-secondary-brown ${errors.mail ? 'border-red-500' : 'border-gray-300'} px-6 py-4 tracking-normal`}
              type='email'
              value={privacyPolicyText}
              readOnly
            />
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <input
            type='checkbox'
            id='checkbox1'
            className='form-checkbox h-4 w-4 text-blue-600'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='checkbox1' className='text-gray-700'>
            プライバシーポリシーに同意する
          </label>
        </div>
        <button
          type='submit'
          disabled={!isChecked}
          className={`${isChecked ? 'cursor-pointer bg-secondary-brown-light transition-all duration-300 hover:opacity-60' : 'bg-gray-200 text-gray-400'} rounded-xl px-12 py-4`}
        >
          入力内容を確認する
        </button>
      </form>
    </motion.div>
  )
}

export default ContactPage
