'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import NewsSection from '@/components/features/common/News'
import ConceptSection from '@/components/features/home/Concept'
import HeroSection from '@/components/features/home/Hero'
import ProfileSection from '@/components/features/home/Profile'
import ServiceIntroductionSection from '@/components/features/home/ServiceIntroduction'
import initImage from '@/public/images/initImage.png'
import useStore from '@/store/store'

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  const { setIsHidden, setIsDisplay } = useStore()

  return (
    <div className='text-center'>
      <motion.div
        className={`absolute left-0 top-0 z-40 h-svh w-full`}
        animate={{
          opacity: [1, 0.75, 0],
          transitionEnd: {
            display: 'none',
          },
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.75, 1],
        }}
        onAnimationComplete={() => {
          setIsHidden(true), setIsDisplay(true)
        }}
      >
        <Image
          src={initImage}
          alt='hero_image'
          width={0}
          height={0}
          className='relative h-full w-full'
          style={{
            objectFit: 'cover',
          }}
        />
        <motion.div
          className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          <p className='text-xs md:text-md'>くらし・ととのう・さろん</p>
          <p className='text-4xl tracking-wide md:text-[4rem]'>Kikara</p>
        </motion.div>
      </motion.div>
      <HeroSection />
      <ConceptSection />
      <ProfileSection />
      <ServiceIntroductionSection />
      <NewsSection />
    </div>
  )
}
