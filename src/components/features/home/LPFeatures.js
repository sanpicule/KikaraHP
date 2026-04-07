'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionDecorator from '@/components/features/common/SectionDecorator'
import SectionHeader from '@/components/features/common/SectionHeader'
import featuresData from '@/data/features.json'
import useAnimation from '@/hooks/useAnimation'
import beautyImage from '@/public/images/beauty.png'
import mealImage from '@/public/images/meal.png'
import orangeImage from '@/public/images/orange.png'

const featureImages = [orangeImage, beautyImage, mealImage]

const taglines = ['Easy & Natural', 'Health & Beauty', 'Kitchen & Lifestyle']

const LPFeatures = () => {
  const animate = useAnimation()

  return (
    <section id='features' className='bg-white py-20'>
      <div className='flex justify-center xl:justify-between xl:px-[140px]'>
        <SectionDecorator label='Features' />
        <div className='mx-auto w-full max-w-5xl px-4'>
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <SectionHeader en='Features' ja='特徴・効果' />
          </motion.div>

          <div className='mt-16 space-y-20'>
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                variants={animate.scrollFadeInFromBottom}
                initial={animate.scrollFadeInFromBottom.initial}
                whileInView={animate.scrollFadeInFromBottom.whileInView}
                viewport={animate.scrollFadeInFromBottom.viewport}
                custom={index}
                className={`flex flex-col items-stretch gap-2 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className='md:w-[45%]'>
                  <div className='relative h-64 w-full overflow-hidden md:h-96'>
                    <Image src={featureImages[index]} alt={feature.feature} fill className='object-cover' />
                  </div>
                </div>
                <div className='flex flex-col justify-center bg-primary-pink p-10 text-left md:w-[55%] md:p-14'>
                  <span className='text-5xl font-thin text-secondary-brown-light'>0{feature.number}</span>
                  <div className='mt-3 h-px w-8 bg-secondary-brown-light opacity-40' />
                  <h3 className='mt-4 text-2xl tracking-wide text-gray-800'>{feature.feature}</h3>
                  <p className='mt-1 text-sm tracking-widest text-gray-400'>{taglines[index]}</p>
                  <p className='mt-6 text-base leading-relaxed text-gray-600'>{feature.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <SectionDecorator label='Features' />
      </div>
    </section>
  )
}

export default LPFeatures
