'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
import Stepper from '@/components/features/contact/Stepper'
import useAnimation from '@/hooks/useAnimation'

const CompletePage = () => {
  const animate = useAnimation()
  const router = useRouter()
  const handleTop = () => {
    router.push('/')
  }
  return (
    <motion.div
      variants={animate.scrollFadeIn}
      initial={animate.scrollFadeIn.initial}
      viewport={animate.scrollFadeIn.viewport}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      className='mx-auto max-w-[90%] py-36 md:tracking-wide'
    >
      <Stepper step1={true} step2={true} step3={true} />
      <h4 className='mt-24 text-center'>送信完了しました！</h4>
      <div className='mt-12 text-center'>
        <button
          type='submit'
          onClick={handleTop}
          className='mt-8 cursor-pointer rounded-xl bg-secondary-brown-light px-12 py-4 transition-all duration-300 hover:opacity-60'
        >
          TOPに戻る
        </button>
      </div>
    </motion.div>
  )
}

export default CompletePage
