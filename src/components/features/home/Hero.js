'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import menuItemsList from '@/data/menuItems.json'
import useAnimate from '@/hooks/useAnimation'
import initImage from '@/public/images/initImage.png'
import mainHeroImage from '@/public/images/mainHeroImage.png'
import useStore from '@/store/store'

const HeroSection = () => {
  const { isDisplay, setIsHidden, setIsDisplay } = useStore()
  const animate = useAnimate()

  return (
    <div className='relative w-full'>
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
      <Image
        src={mainHeroImage}
        alt='hero_image'
        width={0}
        height={0}
        className='h-svh w-full'
        style={{
          objectFit: 'cover',
          filter: 'brightness(0.3)',
        }}
      />
      {isDisplay && (
        <>
          <motion.div
            variants={animate.scrollFadeIn}
            initial={animate.scrollFadeIn.initial}
            whileInView={animate.scrollFadeIn.whileInView}
            viewport={animate.scrollFadeIn.viewport}
          >
            <div className={`absolute left-8 top-8 transform text-left tracking-wide text-white md:left-12`}>
              <p className='xl:text-xl'>くらし・ととのう・さろん</p>
              <h1 className='text-[50px] tracking-wide md:text-[70px] xl:text-5xl'>Kikara</h1>
            </div>
            <div className={`absolute bottom-24 right-8 text-white`}>
              <p className='mt-20 text-right text-[30px] font-thin tracking-wide md:text-[40px] xl:text-4xl'>
                身体も<br></br>くらしも<br></br>食事も<br></br>ととのえる
              </p>
            </div>
            <div className={` md: absolute bottom-36 left-24 hidden text-white md:block xl:bottom-48`}>
              <h3 className='text-left text-2xl xl:text-3xl'>サービス一覧</h3>
              <ul className='tracking-wide'>
                {menuItemsList.map((menuItem, index) => (
                  <li key={index} className='ml-8 w-[300px] py-4 text-xl'>
                    <Link href={menuItem.id} className='flex items-center justify-between'>
                      <h3
                        className={`before:mr-2 before:inline-block before:w-0 before:bg-kikara-white before:align-middle before:transition-all before:duration-300 before:content-[''] hover:before:h-[2px] hover:before:w-4`}
                      >
                        {menuItem.menuTitle}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='mt-8 flex items-start'>
                <button className='bg-secondary-brown-light px-4 py-6 duration-300 hover:bg-secondary-brown'>
                  <Link href={'/contact'}>
                    <p className='text-kikara-white'>お問い合わせ</p>
                  </Link>
                </button>
              </div>
            </div>
            <div className='absolute bottom-[100px] left-1/2 hidden -translate-x-1/2 flex-col-reverse items-center justify-center md:flex'>
              <span className='tracking-wide text-white'>Scroll</span>
              <div className='h-20 w-0.5 animate-bounce bg-white'></div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default HeroSection
