import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import useAnimation from '@/hooks/useAnimation'
import userWoman from '@/public/images/userWoman.png'

const VoiceCard = ({ voice, index }) => {
  const animate = useAnimation()
  return (
    <motion.div
      variants={animate.scrollFadeInFromBottom}
      initial={animate.scrollFadeInFromBottom.initial}
      whileInView={animate.scrollFadeInFromBottom.whileInView}
      custom={index}
      viewport={animate.scrollFadeInFromBottom.viewport}
      className='flex flex-col rounded-2xl bg-white p-6 shadow-sm'
    >
      {/* Summary */}
      <p className='text-sm font-medium text-gray-800'>{voice.summary}</p>

      {/* Body */}
      <p className='mt-3 flex-1 text-xs leading-6 text-gray-500'>{voice.voice}</p>

      {/* Divider */}
      <div className='mt-5 h-px w-full bg-gray-100' />

      {/* Author */}
      <div className='mt-4 flex items-center gap-3'>
        <Image src={userWoman} alt='' width={36} height={36} className='h-9 w-9 rounded-full object-cover' />
        <div>
          <p className='text-xs font-medium text-gray-700'>{voice.name}</p>
          <p className='text-xs text-gray-400'>{voice.info}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default VoiceCard
