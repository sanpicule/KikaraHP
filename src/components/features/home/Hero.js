'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLoading } from '@/hooks/useLoading'
import kikaraLogo from '@/public/images/kikara-logo.png'
import mainHeroImage from '@/public/images/mainHeroImage.png'

const HeroSection = () => {
  const { isReady } = useLoading()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <motion.div
      id='hero'
      className='relative flex min-h-screen'
      initial='hidden'
      animate={isReady ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Background image (full-screen on SP, right panel on md+) */}
      <motion.div
        className='absolute inset-0 md:relative md:inset-auto md:w-[60%] md:flex-shrink-0'
        variants={imageVariants}
      >
        <Image src={mainHeroImage} alt='Kikara' fill priority className='object-cover' />
        <div className='absolute inset-0 bg-black/40 md:hidden' />
      </motion.div>

      {/* Text overlay: centered on SP, left panel on md+ */}
      <div className='relative z-10 flex w-full flex-col items-center justify-center px-8 text-center md:order-first md:w-[40%] md:items-start md:px-14 md:text-left lg:px-20'>
        <motion.p
          className='text-xs tracking-[.3em] text-white drop-shadow md:text-gray-400 md:drop-shadow-none'
          variants={itemVariants}
        >
          ミネラル醗酵ドリンク
        </motion.p>
        <motion.h1 className='mt-3 leading-none drop-shadow md:drop-shadow-none' variants={itemVariants}>
          <Image
            src={kikaraLogo}
            alt='Kikara'
            height={72}
            className='h-14 w-auto object-contain brightness-0 drop-shadow invert md:h-20 md:brightness-100 md:drop-shadow-none md:invert-0'
          />
        </motion.h1>
        <motion.div className='mt-6 h-px w-8 bg-white md:bg-gray-300' variants={itemVariants} />
      </div>
    </motion.div>
  )
}

export default HeroSection
