'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import useScrollDirection from '@/hooks/useScrollDirection'
import menuItemsList from '../../data/menuItems.json'

const Header = () => {
  const [isClick, setIsClick] = useState(false)
  const scrollDirection = useScrollDirection()
  const pathname = usePathname()
  const [hamburgerColor, setHamburgerColor] = useState('kikara-white')
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 840) {
        setHamburgerColor('secondary-brown')
      } else {
        setHamburgerColor('kikara-white')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`fixed left-0 top-0 z-50 w-screen transition-transform duration-500 ${scrollDirection === 'down' && pathname !== '/' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div
        className={`flex h-[85px] items-center px-4 md:px-12 ${pathname === '/' && 'h-auto pt-16'} ${pathname !== '/' && 'bg-primary-pink-light'}`}
      >
        {pathname !== '/' && (
          <div onClick={() => setIsClick(false)}>
            <Link href={'/'}>
              <p className='text-xs tracking-tighter'>わたし・ととのう・さろん</p>
              <h1>kikara</h1>
            </Link>
          </div>
        )}
        <div className='group z-40 ml-auto mt-2' onClick={() => setIsClick(!isClick)}>
          <div className='flex flex-col gap-4'>
            <span
              className={`block h-[2px] w-16 rounded-xl bg-${hamburgerColor} transition duration-300 ${isClick ? 'w-16 translate-y-[18px] rotate-45 transform bg-secondary-brown transition duration-300' : 'transition duration-500'} ${pathname !== '/' && 'bg-secondary-brown'}`}
            ></span>
            <span
              className={`block h-[2px] w-16 rounded-xl bg-${hamburgerColor} transition-all duration-300 group-hover:w-12 ${isClick ? '!w-16 translate-x-full bg-secondary-brown opacity-0 transition duration-300' : 'transition duration-500'} ${pathname !== '/' && 'bg-secondary-brown'}`}
            ></span>
            <span
              className={`rounded-x block h-[2px] w-16 bg-${hamburgerColor} transition-all duration-300 group-hover:w-8 ${isClick ? '!w-16 -translate-y-[18px] -rotate-45 transform bg-secondary-brown transition duration-300' : 'transition duration-500'} ${pathname !== '/' && 'bg-secondary-brown'}`}
            ></span>
          </div>
          <p
            className={`mt-2 text-center text-sm text-${hamburgerColor} duration-300 ${isClick ? 'text-secondary-brown transition-all duration-300' : 'transition duration-500'} ${pathname !== '/' && 'text-secondary-brown'}`}
          >
            MENU
          </p>
        </div>
      </div>
      {/* ハンバーガーメニュー */}
      <div
        className={`absolute left-full top-0 h-screen w-screen bg-white px-4 pb-4 pt-[85px] transition duration-500 ${isClick && '-translate-x-full'} ${pathname === '/' && '!pt-[150px]'}`}
      >
        <div className='mx-auto w-[90%]'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-md'>くらし・ととのう・さろん</p>
            <p className='text-[4rem]'>Kikara</p>
          </div>
          <div className='mt-20'>
            <ul className='w-full tracking-wide'>
              {menuItemsList.map((menuItem, index) => (
                <li key={index} className='mt-6 py-4 text-center' onClick={() => setIsClick(false)}>
                  <Link href={menuItem.url}>
                    <p
                      className={`text-xl before:mr-2 before:inline-block before:w-0 before:bg-secondary-brown before:align-middle before:transition-all before:duration-300 before:content-[''] hover:before:h-[1px] hover:before:w-4`}
                    >
                      {menuItem.menuTitle}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='mt-24 flex items-center justify-center'>
              <button className='rounded-full bg-secondary-brown-light px-4 py-6 duration-300 hover:bg-secondary-brown'>
                <Link href={'/contact'}>
                  <p className='text-kikara-white'>お問い合わせ</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
