'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import arrow from '@/public/images/arrow.png'
import menuItemsList from '../../data/menuItems.json'
import SnsIconBtn from '../features/common/Buttons/SnsIconBtn'

const Header = () => {
  const [isClick, setIsClick] = useState(false)
  return (
    <div className='fixed left-0 top-0 z-50 w-screen bg-primary-pink-light'>
      <div className='top-0 flex h-[85px] items-center px-4 py-2 shadow-sm md:py-0 md:pr-0'>
        <div className='text-center' onClick={() => setIsClick(false)}>
          <Link href={'/'}>
            <p className='text-sm tracking-tighter'>わたし・ととのう・さろん</p>
            <h2>kikara</h2>
          </Link>
        </div>
        <p className='ml-4 hidden text-sm tracking-wide md:block'>
          熊本市東区で<br></br>心とカラダを整える
        </p>
        <ul className='ml-auto mr-10 hidden gap-10 text-xl tracking-wide md:flex'>
          {menuItemsList.map((menuItem, index) => (
            <li key={index} className='transition duration-300 hover:opacity-35'>
              <Link href={menuItem.url}>{menuItem.menuTitle}</Link>
            </li>
          ))}
        </ul>
        <Link
          href={'/contact'}
          className='hidden h-[85px] items-center bg-secondary-brown-light px-4 py-8 text-xl tracking-wide text-white transition duration-300 hover:opacity-50 md:flex'
        >
          お問い合わせ
        </Link>
        <div className='ml-auto flex flex-col gap-2 md:hidden' onClick={() => setIsClick(!isClick)}>
          <span
            className={`block h-[2px] w-8 bg-secondary-brown ${isClick ? 'translate-y-[10px] rotate-45 transform transition duration-300' : 'transition duration-500'}`}
          ></span>
          <span
            className={`block h-[2px] w-8 bg-secondary-brown ${isClick ? 'translate-x-full opacity-0 transition duration-300' : 'transition duration-500'}`}
          ></span>
          <span
            className={`block h-[2px] w-8 bg-secondary-brown ${isClick ? '-translate-y-[10px] -rotate-45 transform transition duration-300' : 'transition duration-500'}`}
          ></span>
        </div>
      </div>
      <div
        className={`absolute left-full h-screen w-screen bg-white p-4 transition duration-500 ${isClick && '-translate-x-full'}`}
      >
        <div className='mx-auto w-[90%]'>
          <h4 className='text-secondary-brown-light'>サービス</h4>
          <div className='pl-2'>
            <ul className='ml-auto mr-10 w-full tracking-wide'>
              {menuItemsList.map((menuItem, index) => (
                <li key={index} className='border-b border-dashed py-4' onClick={() => setIsClick(false)}>
                  <Link href={menuItem.url} className='flex items-center justify-between'>
                    <p>{menuItem.menuTitle}</p>
                    <Image src={arrow} alt='menuArrow' width={35} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <h4 className='mt-8 text-secondary-brown-light'>予約</h4>
          <div className='pl-2'>
            <ul className='ml-auto mr-10 w-full tracking-wide'>
              {menuItemsList.map((menuItem, index) => (
                <li key={index} className='flex items-center justify-between py-4'>
                  <p>{menuItem.menuTitle}</p>
                  {menuItem.url === '/mineral' ? (
                    <div className='flex gap-4'>
                      <SnsIconBtn snsId={'instagram'} size={40} />
                      <SnsIconBtn snsId={'facebook'} size={40} />
                    </div>
                  ) : (
                    <button className='bg-secondary-brown-light px-4 py-1'>
                      <a href={menuItem.reserveUrl} target='_blank'>
                        <p className='text-kikara-white'>申込へ</p>
                      </a>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
