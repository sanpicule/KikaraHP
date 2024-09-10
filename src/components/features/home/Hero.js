import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import menuItemsList from '@/data/menuItems.json'
import mainHeroImage from '@/public/images/mainHeroImage.png'

const HeroSection = () => {
  return (
    <div className='relative w-full'>
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
      <div className='absolute left-8 top-16 transform text-left tracking-wide text-white md:left-12'>
        <p className='xl:text-xl'>くらし・ととのう・さろん</p>
        <h1 className='text-[48px] tracking-wide md:text-5xl'>Kikara</h1>
      </div>
      <div className='absolute bottom-24 right-8 text-white'>
        <p className='mt-20 text-right text-[30px] font-thin tracking-wide md:text-4xl'>
          身体も<br></br>くらしも<br></br>食事も<br></br>ととのえる
        </p>
      </div>
      <div className='absolute bottom-24 left-24 hidden text-white md:block'>
        <h3 className='text-left text-3xl'>サービス一覧</h3>
        <ul className='tracking-wide'>
          {menuItemsList.map((menuItem, index) => (
            <li key={index} className='ml-8 w-[300px] py-4 text-xl'>
              <Link href={menuItem.id} className='flex items-center justify-between'>
                <p
                  className={`before:mr-2 before:inline-block before:w-0 before:bg-kikara-white before:align-middle before:transition-all before:duration-300 before:content-[''] hover:before:h-[2px] hover:before:w-4`}
                >
                  {menuItem.menuTitle}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className='mt-8 flex items-start'>
          <button className='bg-secondary-brown-light px-4 py-6 duration-300 hover:bg-secondary-brown'>
            <Link href={'/contact'}>
              <p className='text-kikara-white [writing-mode:vertical-rl]'>お問い合わせ</p>
            </Link>
          </button>
        </div>
      </div>
      <div className='absolute bottom-[100px] left-1/2 hidden -translate-x-1/2 flex-col-reverse items-center justify-center md:flex'>
        <span className='tracking-wide text-white'>Scroll</span>
        <div className='h-20 w-0.5 animate-bounce bg-white'></div>
      </div>
    </div>
  )
}

export default HeroSection
