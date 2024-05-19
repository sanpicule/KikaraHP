import Image from 'next/image'
import React from 'react'
import mainHeroImage from '@/public/images/mainHeroImage.png'

const HeroSection = () => {
  return (
    <div className='relative w-full'>
      <Image
        src={mainHeroImage}
        alt='hero_image'
        className='h-svh w-full'
        style={{
          objectFit: 'cover',
          filter: 'brightness(0.3)',
        }}
      />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center tracking-wide text-white'>
        <p>わたし・ととのう・さろん</p>
        <h1 className='mt-2 text-5xl tracking-wide'>Kikara</h1>
        <p className='mt-20 text-xl font-thin leading-10'>
          身体と暮らしと食事を<br></br>ととのえる
        </p>
        <div className='mt-32 flex flex-col-reverse items-center justify-center'>
          <span className='tracking-wide text-white'>Scroll</span>
          <div className='h-20 w-0.5 animate-bounce bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
