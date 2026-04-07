'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionDecorator from '@/components/features/common/SectionDecorator'
import SectionHeader from '@/components/features/common/SectionHeader'
import voicesData from '@/data/voiceMineral.json'
import useAnimation from '@/hooks/useAnimation'
import userWomanImage from '@/public/images/userWoman.png'

const LPVoices = () => {
  const animate = useAnimation()

  return (
    <section id='voices' className='bg-primary-pink py-20'>
      <div className='flex justify-center xl:justify-between xl:px-[140px]'>
        <SectionDecorator label='Voices' />
        <div className='mx-auto w-full max-w-5xl px-4'>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <SectionHeader en='Voices' ja='お客様の声' />
        </motion.div>

        <div className='mt-12 grid gap-5 md:grid-cols-2'>
          {voicesData.map((voice, index) => (
            <motion.div
              key={index}
              variants={animate.scrollFadeInFromBottom}
              initial={animate.scrollFadeInFromBottom.initial}
              whileInView={animate.scrollFadeInFromBottom.whileInView}
              viewport={animate.scrollFadeInFromBottom.viewport}
              custom={index}
              className='flex flex-col rounded-2xl bg-white p-6 shadow-sm text-start'
            >
              {/* Summary */}
              <p className='text-sm font-medium text-gray-800'>{voice.summary}</p>

              {/* Body */}
              <p className='mt-3 flex-1 text-xs leading-6 text-gray-500'>{voice.voice}</p>

              {/* Divider */}
              <div className='mt-5 h-px w-full bg-gray-100' />

              {/* Author */}
              <div className='mt-4 flex items-center gap-3'>
                <Image
                  src={userWomanImage}
                  alt={voice.name}
                  width={36}
                  height={36}
                  className='h-9 w-9 rounded-full object-cover'
                />
                <div>
                  <p className='text-xs font-medium text-gray-700'>{voice.name}</p>
                  <p className='text-xs text-gray-400'>{voice.info}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
        <SectionDecorator label='Voices' />
      </div>
    </section>
  )
}

export default LPVoices
