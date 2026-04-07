'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import menuItemsList from '@/data/menuItems.json'
import useScrollDirection from '@/hooks/useScrollDirection'
import kikaraLogo from '@/public/images/kikara-logo.png'
import serviceMineral from '@/public/images/serviceMineral.png'
import './style.css'

const Header = () => {
  const [isClick, setIsClick] = useState(false)
  const pathname = usePathname()
  const scrollDirection = useScrollDirection()
  const [hamburgerColor, setHamburgerColor] = useState(pathname === '/' ? 'white' : 'secondary-brown')

  useEffect(() => {
    document.body.style.overflow = isClick ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isClick])

  useEffect(() => {
    if (pathname !== '/') {
      setHamburgerColor('secondary-brown')
      return
    }
    const handleScroll = () => {
      const pastHero = window.scrollY >= window.innerHeight
      setHamburgerColor(pastHero ? 'secondary-brown' : 'white')
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <div
      className={`fixed right-0 top-0 z-40 w-screen transition-transform duration-500 ${pathname === '/' && '!w-auto'} ${scrollDirection === 'down' && pathname !== '/' && !isClick ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div
        className={`flex h-[85px] items-center px-4 md:px-12 ${pathname === '/' && 'h-auto pt-4'} ${pathname !== '/' && 'bg-primary-pink-light'}`}
      >
        {pathname !== '/' && (
          <div onClick={() => setIsClick(false)}>
            <Link href={'/'}>
              <p className='text-xs tracking-[.3em] text-gray-400'>ミネラル醗酵ドリンク</p>
              <Image src={kikaraLogo} alt='Kikara' height={32} className='mt-1 h-8 w-auto object-contain' />
            </Link>
          </div>
        )}
        <div className={`group z-30 ml-auto mt-2`} onClick={() => setIsClick(!isClick)}>
          <div className='flex flex-col gap-[5px]'>
            <span
              className={`block h-[2px] w-8 rounded-xl bg-${hamburgerColor} transition duration-300 ${isClick ? '!w-8 translate-y-[7px] rotate-45 transform bg-secondary-brown' : ''} ${pathname !== '/' && 'bg-secondary-brown'}`}
            ></span>
            <span
              className={`block h-[2px] w-8 rounded-xl bg-${hamburgerColor} transition-all duration-300 group-hover:w-5 ${isClick ? '!w-8 translate-x-full bg-secondary-brown opacity-0' : ''} ${pathname !== '/' && 'bg-secondary-brown'}`}
            ></span>
            <span
              className={`block h-[2px] w-8 rounded-xl bg-${hamburgerColor} transition-all duration-300 group-hover:w-3 ${isClick ? '!w-8 -translate-y-[7px] -rotate-45 transform bg-secondary-brown' : ''} ${pathname !== '/' && 'bg-secondary-brown'}`}
            ></span>
          </div>
          <p
            className={`mt-1 text-center text-[10px] tracking-widest text-${hamburgerColor} duration-300 ${isClick ? 'text-secondary-brown' : ''} ${pathname !== '/' && 'text-secondary-brown'}`}
          >
            MENU
          </p>
        </div>
      </div>
      {/* ハンバーガーメニュー */}
      <div
        className={`absolute left-full top-0 h-screen w-screen bg-white transition duration-500 ${isClick && '-translate-x-full'}`}
      >
        <div className='mx-auto flex justify-center'>
          <div className='hidden w-1/2 lg:block'>
            <Image
              src={serviceMineral}
              alt='ミネラル醗酵ドリンク'
              width={0}
              height={0}
              className='h-screen w-auto object-cover'
            />
          </div>
          <div className={`w-full px-4 pb-4 pt-24 lg:w-1/2`}>
            <a href='#hero' onClick={() => setIsClick(false)} className='flex flex-col items-center justify-center'>
              <p className='text-xs md:text-md'>ミネラル醗酵ドリンク</p>
              <Image src={kikaraLogo} alt='Kikara' height={56} className='mt-2 h-12 w-auto object-contain md:h-14' />
            </a>
            <div className='mt-4 md:mt-20'>
              <ul className='list-container w-full'>
                {menuItemsList.map((menuItem, index) => (
                  <li
                    key={index}
                    className={`list-content mx-auto mt-4 flex w-64 items-center justify-center text-center text-md tracking-widest md:text-xl`}
                    onClick={() => setIsClick(false)}
                  >
                    <a
                      href={menuItem.url}
                      className={`flex h-full w-full items-center justify-center before:mr-2 before:inline-block before:w-0 before:bg-secondary-brown before:align-middle before:transition-all before:duration-300 before:content-[''] hover:before:h-[1px] hover:before:w-4`}
                    >
                      {menuItem.menuTitle}
                    </a>
                  </li>
                ))}
              </ul>
              <div className='mt-8 flex items-center justify-center' onClick={() => setIsClick(false)}>
                <button className='bg-secondary-brown-light px-12 py-4 duration-300 hover:bg-secondary-brown'>
                  <Link href={'/contact'}>
                    <p className='text-kikara-white'>お問い合わせ</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
