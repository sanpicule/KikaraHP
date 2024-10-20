'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import useAnimation from '@/hooks/useAnimation'
import useMediaQuery from '@/hooks/useMediaQuery'
import service1bg from '@/public/images/service1bg.png'
import service2bg from '@/public/images/service2bg.png'
import service3bg from '@/public/images/service3bg.png'
import serviceHeadNumber1 from '@/public/images/serviceHeadNumber1.png'
import serviceHeadNumber2 from '@/public/images/serviceHeadNumber2.png'
import serviceHeadNumber3 from '@/public/images/serviceHeadNumber3.png'
import HomeDetailButton from './HomeDetailButton'

const ServiceIntroductionPages = () => {
  const animate = useAnimation()
  const { isMobile } = useMediaQuery()
  return (
    <div className='flex justify-around xl:p-20'>
      {!isMobile && (
        <motion.div
          variants={animate.scrollFadeInFromRight}
          initial={animate.scrollFadeInFromRight.initial}
          whileInView={animate.scrollFadeInFromRight.whileInView}
          viewport={animate.scrollFadeInFromRight.viewport}
          className='hidden xl:block'
        >
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='text-sm tracking-wide'>Service</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </motion.div>
      )}
      <div className='mx-auto max-w-[90%] py-12 pb-36 pt-12 text-center md:w-[1040px] md:py-24 md:tracking-wide '>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='flex flex-col items-center gap-2'
        >
          <p className='text-sm tracking-wider'>service</p>
          <h1 className='text-3xl tracking-wide'>サービス紹介</h1>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <div className='pt-32'>
          <div>
            <motion.div
              variants={animate.scrollFadeInFromRight}
              initial={animate.scrollFadeInFromRight.initial}
              whileInView={animate.scrollFadeInFromRight.whileInView}
              viewport={animate.scrollFadeInFromRight.viewport}
              className='flex items-center'
            >
              <Image
                src={serviceHeadNumber1}
                alt='1'
                width={37}
                className='mr-6'
                priority
                style={{
                  objectFit: 'cover',
                }}
              />
              <h3 id='mineral' className='text-md md:text-3xl'>
                ミネラル醗酵ドリンク教室
              </h3>
            </motion.div>
            <div className='relative py-8 md:py-20'>
              <motion.div
                variants={animate.scrollFadeInFromBottom}
                initial={animate.scrollFadeInFromBottom.initial}
                whileInView={animate.scrollFadeInFromBottom.whileInView}
                viewport={animate.scrollFadeInFromBottom.viewport}
              >
                <Image
                  src={service1bg}
                  alt=''
                  width={780}
                  height={460}
                  className='rounded-xl shadow-2xl'
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>

              <motion.div
                variants={animate.scrollFadeInFromLeft}
                initial={animate.scrollFadeInFromLeft.initial}
                whileInView={animate.scrollFadeInFromLeft.whileInView}
                viewport={animate.scrollFadeInFromLeft.viewport}
                className='absolute right-0 top-1/2 rounded-xl bg-white px-4 py-6 shadow-2xl md:px-10 lg:w-[600px]'
              >
                <p className='lg:text-lg text-left text-sm leading-10'>
                  野菜や果物が持つ酵母菌にミネラルを入れてフレッシュなものとはまた違う栄養価のあるドリンクを手作りします。
                </p>
                <HomeDetailButton url={'/mineral'} />
              </motion.div>
            </div>
          </div>
          <div className='mt-40'>
            <motion.div
              variants={animate.scrollFadeInFromLeft}
              initial={animate.scrollFadeInFromLeft.initial}
              whileInView={animate.scrollFadeInFromLeft.whileInView}
              viewport={animate.scrollFadeInFromLeft.viewport}
              className='flex items-center justify-end'
            >
              <Image
                src={serviceHeadNumber2}
                alt='2'
                width={53}
                className='mr-6'
                priority
                style={{
                  objectFit: 'cover',
                }}
              />
              <h3 id='tidying' className='text-md md:text-3xl'>
                片付け・お手伝い
              </h3>
            </motion.div>
            <div className='relative py-8 md:py-20'>
              <motion.div
                variants={animate.scrollFadeInFromBottom}
                initial={animate.scrollFadeInFromBottom.initial}
                whileInView={animate.scrollFadeInFromBottom.whileInView}
                viewport={animate.scrollFadeInFromBottom.viewport}
              >
                <Image
                  src={service2bg}
                  alt=''
                  width={780}
                  height={460}
                  className='ml-auto rounded-xl shadow-2xl'
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
              <motion.div
                variants={animate.scrollFadeInFromRight}
                initial={animate.scrollFadeInFromRight.initial}
                whileInView={animate.scrollFadeInFromRight.whileInView}
                viewport={animate.scrollFadeInFromRight.viewport}
                className='absolute top-1/2 rounded-xl bg-white px-4 py-6 shadow-2xl md:px-10 lg:w-[600px]'
              >
                <p className='lg:text-lg text-left text-sm leading-10'>
                  暮らしの空間を心地良く、物の存在が意識できる生活に。あなたの理想を現実にしていく最初の一歩を一緒に歩んでいきましょう。
                </p>
                <HomeDetailButton url={'/tidying'} />
              </motion.div>
            </div>
          </div>
          <div className='mt-40'>
            <motion.h3
              variants={animate.scrollFadeInFromRight}
              initial={animate.scrollFadeInFromRight.initial}
              whileInView={animate.scrollFadeInFromRight.whileInView}
              viewport={animate.scrollFadeInFromRight.viewport}
              className='flex items-center text-md md:text-3xl'
              id='reiki'
            >
              <Image
                src={serviceHeadNumber3}
                alt='1'
                width={56}
                className='mr-6'
                priority
                style={{
                  objectFit: 'cover',
                }}
              />
              直傳靈氣
            </motion.h3>
            <div className='relative py-8 md:py-20'>
              <motion.div
                variants={animate.scrollFadeInFromBottom}
                initial={animate.scrollFadeInFromBottom.initial}
                whileInView={animate.scrollFadeInFromBottom.whileInView}
                viewport={animate.scrollFadeInFromBottom.viewport}
              >
                <Image
                  src={service3bg}
                  alt=''
                  width={780}
                  height={460}
                  className='rounded-xl shadow-2xl'
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
              <motion.div
                variants={animate.scrollFadeInFromLeft}
                initial={animate.scrollFadeInFromLeft.initial}
                whileInView={animate.scrollFadeInFromLeft.whileInView}
                viewport={animate.scrollFadeInFromLeft.viewport}
                className='absolute right-0 top-1/2 rounded-xl bg-white px-4 py-6 shadow-2xl md:px-10 lg:w-[600px]'
              >
                <p className='lg:text-lg text-left text-sm leading-10'>
                  人間には自然浄化力があります。手を当てて天からのエネルギーを身体を通して流し本来持っている自然治癒力を目覚めさせていきます。
                </p>
                <HomeDetailButton url={'/reiki'} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {!isMobile && (
        <motion.div
          variants={animate.scrollFadeInFromLeft}
          initial={animate.scrollFadeInFromLeft.initial}
          whileInView={animate.scrollFadeInFromLeft.whileInView}
          viewport={animate.scrollFadeInFromLeft.viewport}
          className='mt-auto hidden -translate-y-[100px] xl:block'
        >
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='text-sm tracking-wide'>Service</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ServiceIntroductionPages
