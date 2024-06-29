import Image from 'next/image'
import React from 'react'
import mainHeroImage from '@/public/images/mainHeroImage.png'
import Link from 'next/link'
import menuItemsList from '../../../data/menuItems.json'
import arrow from '@/public/images/arrow.png'

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
      <div className='absolute left-[100px] top-[100px] transform text-left tracking-wide text-white'>
        <p className='text-xl'>くらし・ととのう・さろん</p>
        <h1 className='text-5xl tracking-wide'>Kikara</h1>
      </div>
      <div className='absolute right-[100px] bottom-[100px] text-white'>
        <p className='mt-20 text-4xl font-thin tracking-wide text-right'>
          身体も<br></br>くらしも<br></br>食事も<br></br>ととのえる
        </p>
      </div>
      <div className='absolute left-[100px] bottom-[100px] text-white'>
        <h3 className='text-3xl text-left'>サービス一覧</h3>
        <ul className='tracking-wide'>
          {menuItemsList.map((menuItem, index) => (
            <li key={index} className='text-xl w-[300px] ml-8 py-4'>
              <Link href={menuItem.id} className='flex items-center justify-between'>
                <p>{menuItem.menuTitle}</p>
                <Image src={arrow} alt='menuArrow' width={35} />
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-start mt-8'>
          <button className='bg-secondary-brown-light px-4 py-6'>
            <Link href={'/contact'}>
              <p className='text-kikara-white [writing-mode:vertical-rl]'>問い合わせ</p>
            </Link>
          </button>
        </div>
      </div>
      <div className='absolute bottom-[100px] left-1/2 -translate-x-1/2 flex flex-col-reverse items-center justify-center'>
        <span className='tracking-wide text-white'>Scroll</span>
        <div className='h-20 w-0.5 animate-bounce bg-white'></div>
      </div>
    </div>
  )
}

export default HeroSection
