'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import useAnimation from '@/hooks/useAnimation'
import featureTwo from '@/public/images/beauty.png'
import featureThree from '@/public/images/meal.png'
import featureOne from '@/public/images/orange.png'

const FeatureCard = ({ feature, number, content }) => {
  const animate = useAnimation()

  let featureImage
  switch (number) {
    case 1:
      featureImage = featureOne
      break
    case 2:
      featureImage = featureTwo
      break
    case 3:
      featureImage = featureThree
      break
    default:
      featureImage = featureOne
  }
  return (
    <>
      {number === 2 ? (
        <motion.div
          variants={animate.scrollFadeInFromRight}
          initial={animate.scrollFadeInFromRight.initial}
          whileInView={animate.scrollFadeInFromRight.whileInView}
          viewport={animate.scrollFadeInFromRight.viewport}
          className='flex flex-col items-center justify-center gap-8 rounded-xl bg-kikara-white px-10 py-8 shadow-2xl md:flex-row'
        >
          <p className='order-2 mt-8 w-full leading-8 md:order-1 md:w-1/2 md:leading-8 md:tracking-wide'>{content}</p>
          <div className='order-1 w-full md:order-2 md:w-1/2'>
            <div className='flex items-center justify-center gap-4'>
              <div className='text-lg flex h-12 w-12 items-center justify-center rounded-full bg-secondary-brown-light font-bold text-white'>
                {number}
              </div>
              <h3 className='tracking-normal'>{feature}</h3>
            </div>
            <Image
              src={featureImage}
              alt={feature}
              className='mt-8 h-[150px] w-full rounded-md'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={animate.scrollFadeInFromLeft}
          initial={animate.scrollFadeInFromLeft.initial}
          whileInView={animate.scrollFadeInFromLeft.whileInView}
          viewport={animate.scrollFadeInFromLeft.viewport}
          className='flex flex-col items-center justify-center gap-8 rounded-xl bg-kikara-white px-10 py-8 shadow-2xl md:flex-row'
        >
          <div className='w-full md:w-1/2'>
            <div className='flex items-center justify-center gap-4'>
              <div className='text-lg flex h-12 w-12 items-center justify-center rounded-full bg-secondary-brown-light font-bold text-white'>
                {number}
              </div>
              <h3 className='tracking-normal'>{feature}</h3>
            </div>
            <Image
              src={featureImage}
              alt={feature}
              className='mt-8 h-[150px] w-full rounded-md'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <p className='mt-8 w-full leading-8 md:w-1/2 md:leading-8 md:tracking-wide'>{content}</p>
        </motion.div>
      )}
    </>
  )
}

export default FeatureCard
