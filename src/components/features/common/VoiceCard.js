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
      className='rounded-md p-6 shadow-md'
    >
      <h4 className='text-start text-sm font-bold md:text-md'>{`『${voice.summary}』`}</h4>
      <div
        className={`
        mt-4
        flex
        w-full
        gap-8
      `}
      >
        <div className='flex w-[30%] flex-col items-center gap-2'>
          <Image src={userWoman} alt='' width={60} height={60} />
          <div className='font-bold'>
            <p className='text-xs'>{voice.info}</p>
            <p className='text-xs'>{voice.name}</p>
          </div>
        </div>
        <div className='relative h-full w-full'>
          <p className='text-start text-sm md:mt-0 md:h-full'>{voice.voice}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default VoiceCard
