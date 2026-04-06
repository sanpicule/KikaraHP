'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import useAnimation from '@/hooks/useAnimation'
import SectionHeader from '@/components/features/common/SectionHeader'
import voicesData from '@/data/voiceMineral.json'
import userWomanImage from '@/public/images/userWoman.png'

const LPVoices = () => {
  const animate = useAnimation()

  return (
    <section id='voices' className='bg-white py-20'>
      <div className='mx-auto w-full max-w-5xl px-4'>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <SectionHeader en='Voices' ja='お客様の声' />
        </motion.div>

        <div className='mt-12 grid gap-0 md:grid-cols-2'>
          {voicesData.map((voice, index) => (
            <motion.div
              key={index}
              variants={animate.scrollFadeInFromBottom}
              initial={animate.scrollFadeInFromBottom.initial}
              whileInView={animate.scrollFadeInFromBottom.whileInView}
              viewport={animate.scrollFadeInFromBottom.viewport}
              custom={index}
              className='border-b border-gray-100 pb-8 mb-8 px-2 text-left md:px-6'
            >
              <p className='text-base font-medium italic text-gray-700'>「{voice.summary}」</p>
              <p className='mt-4 text-base leading-relaxed text-gray-500'>{voice.voice}</p>
              <div className='mt-6 flex items-center gap-3'>
                <Image
                  src={userWomanImage}
                  alt={voice.name}
                  width={40}
                  height={40}
                  className='h-10 w-10 rounded-full object-cover'
                />
                <div>
                  <p className='text-sm font-medium text-gray-800'>{voice.name}</p>
                  <p className='text-sm text-gray-400'>{voice.info}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LPVoices
