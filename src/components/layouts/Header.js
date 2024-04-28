'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import menuItemsList from '../../data/menuItems.json'

const Header = () => {
  const [isClick, setIsClick] = useState(false)
  return (
    <div className='sticky top-0 bg-main-color z-50'>
      <div className="py-2 px-4 md:pr-0 md:py-0 flex items-center top-0 bg-main-color shadow-sm">
        <div className="text-center">
          <Link href={'/'}>
            <p className="text-sm tracking-tighter">くらし・ととのう・さろん</p>
            <h2>kikara</h2>
          </Link>
        </div>
        <p className="hidden md:block text-sm tracking-wide">熊本市東区三郎で<br></br>心とカラダを整える</p>
        <ul className='hidden md:flex gap-10 ml-auto mr-10 text-xl tracking-wide'>
          {menuItemsList.map((menuItem, index) => (
            <li key={index} className='transition duration-300 hover:opacity-35'>
              <Link href={menuItem.url}>
                {menuItem.menuTitle}
              </Link>
            </li>          
          ))}
        </ul>         
        <Link href={'/contact'} className="hidden md:block px-4 py-8 text-white bg-accent-color text-xl tracking-wide">
          お問い合わせ
        </Link> 
        {/* ハンバーガーメニュー */}
        <div className='ml-auto flex flex-col gap-2 md:hidden' onClick={() => setIsClick(!isClick)}>
          <span className={`h-[2px] w-8 bg-black block ${isClick ? 'transition duration-300 transform translate-y-[10px] rotate-45' : 'transition duration-300'}`}></span>
          <span className={`h-[2px] w-8 bg-black block ${isClick ? 'transition duration-300 translate-x-full opacity-0' : 'transition duration-300'}`}></span>
          <span className={`h-[2px] w-8 bg-black block ${isClick ? 'transition duration-300 transform -translate-y-[10px] -rotate-45' : 'transition duration-300'}`}></span>
        </div>
      </div>
      <div className={`h-64 bg-white w-full`}></div>
    </div>
  )
}

export default Header
