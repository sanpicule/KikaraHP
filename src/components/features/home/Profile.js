'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import useAnimation from '@/hooks/useAnimation'
import useMediaQuery from '@/hooks/useMediaQuery'
import profile from '@/public/images/profile.png'

const ProfileSection = () => {
  const { isMobile } = useMediaQuery()
  const animate = useAnimation()

  return (
    <div className='flex justify-between xl:p-20'>
      {!isMobile && (
        <motion.div
          variants={animate.scrollFadeInFromLeft}
          initial={animate.scrollFadeInFromLeft.initial}
          whileInView={animate.scrollFadeInFromLeft.whileInView}
          viewport={animate.scrollFadeInFromLeft.viewport}
          className='hidden xl:block'
        >
          <div className='flex items-center gap-2 [writing-mode:vertical-lr]'>
            <div className='h-16 w-[1px] bg-secondary-brown'></div>
            <p className='text-sm tracking-wide'>Profile</p>
          </div>
        </motion.div>
      )}
      <div className='mx-auto max-w-[90%] text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='flex flex-col items-center gap-2'
        >
          <p className='section_sub'>profile</p>
          <h2>プロフィール</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='mt-12 flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-primary-pink px-8 py-8 shadow-2xl md:gap-12 lg:flex-row lg:gap-24 lg:px-24 xl:gap-36'
        >
          <Image
            src={profile}
            alt='プロフィール'
            width={0}
            height={0}
            className='h-[200px] w-[200px] rounded-[50%] bg-secondary-brown object-cover lg:h-[250px] lg:w-[250px]'
          />
          <div className='text-secondary-brown'>
            <div className='text-center lg:text-start'>
              <p className='text-[12px]'>Hikawa Sonoe</p>
              <h1 className='xl:text-[50px]'>檜皮 園江</h1>
            </div>
            <h4 className='mt-6 text-center text-sm leading-8 tracking-wide md:text-base lg:text-start lg:text-xl'>
              1965年 8月 26日<br></br>
              静岡県生まれ<br></br>
              東京暮らしを経て、<br></br>
              2011年から熊本在住<br></br>
              健康オタクのミニマリスト
            </h4>
          </div>
        </motion.div>
      </div>
      {!isMobile && (
        <motion.div
          variants={animate.scrollFadeInFromRight}
          initial={animate.scrollFadeInFromRight.initial}
          whileInView={animate.scrollFadeInFromRight.whileInView}
          viewport={animate.scrollFadeInFromRight.viewport}
          className='mt-auto hidden -translate-y-full xl:block'
        >
          <div className='flex items-center gap-2 [writing-mode:vertical-lr]'>
            <div className='h-16 w-[1px] bg-secondary-brown'></div>
            <p className='text-sm tracking-wide'>Profile</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ProfileSection
