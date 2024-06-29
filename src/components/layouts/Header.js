'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useScrollDirection from '@/hooks/useScrollDirection'
import arrow from '@/public/images/arrow.png'
import menuItemsList from '../../data/menuItems.json'
import SnsIconBtn from '../features/common/Buttons/SnsIconBtn'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isClick, setIsClick] = useState(false)
  const scrollDirection = useScrollDirection()
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div
      className={`fixed left-0 top-0 z-50 w-screen transition-transform duration-500 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className={`flex h-[85px] items-center px-4 md:px-12 ${pathname === '/' && 'h-auto pt-16'} ${pathname !== '/' && 'bg-primary-pink-light'}`}>
        {pathname !== '/' && (
          <div onClick={() => setIsClick(false)}>
            <Link href={'/'}>
              <p className='text-xs tracking-tighter'>わたし・ととのう・さろん</p>
              <h1>kikara</h1>
            </Link>
          </div>
        )}
        <div className='ml-auto flex flex-col gap-4 z-40' onClick={() => setIsClick(!isClick)}>
          <span
            className={`block h-[2px] w-16 rounded-xl bg-secondary-brown ${isClick ? 'translate-y-[18px] rotate-45 transform transition duration-300' : 'transition duration-500'}`}
          ></span>
          <span
            className={`block h-[2px] w-16 rounded-xl bg-secondary-brown ${isClick ? 'translate-x-full opacity-0 transition duration-300' : 'transition duration-500'}`}
          ></span>
          <span
            className={`block h-[2px] w-16 rounded-xl bg-secondary-brown ${isClick ? '-translate-y-[18px] -rotate-45 transform transition duration-300' : 'transition duration-500'}`}
          ></span>
        </div>
      </div>
      {/* ハンバーガーメニュー */}
      <div
        className={`absolute top-0 left-full h-screen w-screen bg-white px-4 pt-[85px] pb-4 transition duration-500 ${isClick && '-translate-x-full'}`}
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
