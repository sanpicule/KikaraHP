'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useScrollDirection from '@/hooks/useScrollDirection'
import arrow from '@/public/images/arrow.png'
import menuItemsList from '../../data/menuItems.json'
import SnsIconBtn from '../features/common/Buttons/SnsIconBtn'

const Header = () => {
  const [isClick, setIsClick] = useState(false)
  const scrollDirection = useScrollDirection()
  return (
    <div
      className={`fixed left-0 top-0 z-50 w-screen bg-primary-pink-light transition-transform duration-500 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className='top-0 flex h-[85px] items-center px-4 shadow-sm md:px-12 xl:py-0 xl:pr-0'>
        <div onClick={() => setIsClick(false)}>
          <Link href={'/'}>
            <p className='text-xs tracking-tighter'>わたし・ととのう・さろん</p>
            <h1>kikara</h1>
          </Link>
        </div>
        <p className='ml-8 hidden text-sm tracking-wide md:block'>
          熊本市東区で<br></br>心とカラダを整える
        </p>
        <ul className='ml-auto mr-10 hidden gap-10 text-xl tracking-wide xl:flex'>
          {menuItemsList.map((menuItem, index) => (
            <li key={index} className='transition duration-300 hover:opacity-35'>
              <Link href={menuItem.url}>
                <p>{menuItem.menuTitle}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={'/contact'}
          className='hidden h-[85px] items-center bg-secondary-brown-light px-4 py-8 text-xl tracking-wide text-white transition duration-300 hover:opacity-50 xl:flex'
        >
          お問い合わせ
        </Link>
        <div className='ml-auto flex flex-col gap-2 xl:hidden' onClick={() => setIsClick(!isClick)}>
          <span
            className={`block h-[2px] w-8 rounded-xl bg-secondary-brown ${isClick ? 'translate-y-[10px] rotate-45 transform transition duration-300' : 'transition duration-500'}`}
          ></span>
          <span
            className={`block h-[2px] w-8 rounded-xl bg-secondary-brown ${isClick ? 'translate-x-full opacity-0 transition duration-300' : 'transition duration-500'}`}
          ></span>
          <span
            className={`block h-[2px] w-8 rounded-xl bg-secondary-brown ${isClick ? '-translate-y-[10px] -rotate-45 transform transition duration-300' : 'transition duration-500'}`}
          ></span>
        </div>
      </div>
      {/* ハンバーガーメニュー */}
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
          <div className='flex flex-col gap-12 pl-2'>
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
            <div className='w-full text-center' onClick={() => setIsClick(false)}>
              <Link
                href={'/contact'}
                className='w-full border border-secondary-brown px-12 py-4 text-xl tracking-wide text-secondary-brown transition duration-300 hover:opacity-50 xl:flex'
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
