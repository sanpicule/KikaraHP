'use client'
import { motion } from 'framer-motion'
import React, { Suspense } from 'react'
import ConfirmContent from '@/components/features/contact/ConfirmContent'
import Stepper from '@/components/features/contact/Stepper'
import useAnimation from '@/hooks/useAnimation'

const ConfirmPage = () => {
  const animate = useAnimation()
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
      <Stepper step1={true} step2={true} />
      <Suspense fallback={<div>読み込み中...</div>}>
        <ConfirmContent />
      </Suspense>
    </motion.div>
  )
}

export default ConfirmPage
