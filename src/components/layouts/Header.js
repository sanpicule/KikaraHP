'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import menuItemsList from '../../data/menuItems.json'
import Image from 'next/image'
import arrow from '@/public/images/arrow.png'
import SnsIconBtn from '../features/common/Buttons/SnsIconBtn'

const Header = () => {
  const [ isClick, setIsClick ] = useState(false)
  return (
    <div className='fixed top-0 left-0 w-screen bg-main-color z-50'>
      <div className="h-[85px] py-2 px-4 md:pr-0 md:py-0 flex items-center top-0 bg-main-color shadow-sm">
        <div className="text-center" onClick={() => setIsClick(false)}>
          <Link href={'/'}>
            <p className="text-sm tracking-tighter">わたし・ととのう・さろん</p>
            <h2>kikara</h2>
          </Link>
        </div>
        <p className="hidden md:block text-sm tracking-wide ml-4">熊本市東区で<br></br>心とカラダを整える</p>
        <ul className='hidden md:flex gap-10 ml-auto mr-10 text-xl tracking-wide'>
          {menuItemsList.map((menuItem, index) => (
            <li key={index} className='transition duration-300 hover:opacity-35'>
              <Link href={menuItem.url}>
                {menuItem.menuTitle}
              </Link>
            </li>          
          ))}
        </ul>         
        <Link href={'/contact'} className="h-[85px] hidden px-4 py-8 text-white bg-accent-color text-xl tracking-wide md:flex items-center transition duration-300 hover:opacity-50">
          お問い合わせ
        </Link> 
        <div className='ml-auto flex flex-col gap-2 md:hidden' onClick={() => setIsClick(!isClick)}>
          <span className={`h-[2px] w-8 bg-text-color block ${isClick ? 'transition duration-300 transform translate-y-[10px] rotate-45' : 'transition duration-500'}`}></span>
          <span className={`h-[2px] w-8 bg-text-color block ${isClick ? 'transition duration-300 translate-x-full opacity-0' : 'transition duration-500'}`}></span>
          <span className={`h-[2px] w-8 bg-text-color block ${isClick ? 'transition duration-300 transform -translate-y-[10px] -rotate-45' : 'transition duration-500'}`}></span>
        </div>
      </div>
      <div className={`p-4 absolute h-screen bg-white left-full w-screen transition duration-500 ${isClick && '-translate-x-full'}`}>
        <div className='w-[90%] mx-auto'>
          <h4 className='text-accent-color'>サービス</h4>
          <div className='pl-2'>
            <ul className='ml-auto mr-10 tracking-wide w-full'>
              {menuItemsList.map((menuItem, index) => (
                <li key={index} className='border-b border-dashed py-4' onClick={() => setIsClick(false)}>
                  <Link href={menuItem.url} className='flex justify-between items-center'>
                    <p>{menuItem.menuTitle}</p>
                    <Image
                      src={arrow}
                      alt="menuArrow"
                      width={35}
                    />
                  </Link>
                </li>          
              ))}
            </ul>  
          </div>
          <h4 className='text-accent-color mt-8'>予約</h4>
          <div className='pl-2'>
            <ul className='ml-auto mr-10 tracking-wide w-full'>
              {menuItemsList.map((menuItem, index) => (
                <li key={index} className='py-4 flex justify-between items-center'>
                  <p>{menuItem.menuTitle}</p>
                  {menuItem.url === '/mineral' ? (
                    <div className='flex gap-4'>
                      <SnsIconBtn snsId={'instagram'} size={40} />
                      <SnsIconBtn snsId={'facebook'} size={40} />
                    </div>
                  ) : (
                    <button className='py-1 px-4 bg-accent-color'>
                      <a href={menuItem.reserveUrl} target="_blank">
                        <p className='text-main-color'>申込へ</p>
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
