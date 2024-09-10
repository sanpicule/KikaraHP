'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import menuItemsList from '@/data/menuItems.json'
import useScrollDirection from '@/hooks/useScrollDirection'
import serviceMineral from '@/public/images/serviceMineral.png'
import serviceReiki from '@/public/images/serviceReiki.png'
import serviceTidying from '@/public/images/serviceTidying.png'
import './style.css'

const Header = () => {
  const [isClick, setIsClick] = useState(false)
  const pathname = usePathname()

  // ↓スクロール位置によってハンバーガーメニューの色を変更する
  const scrollDirection = useScrollDirection()
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

  // ハンバーガーメニュー内のホバーされたリストに応じて画像を変更する
  const [displayedImage, setdisplayedImage] = useState(serviceMineral)
  const judgeMenuList = (menu) => {
    switch (menu) {
      case '/mineral':
        setdisplayedImage(serviceMineral)
        break
      case '/tidying':
        setdisplayedImage(serviceTidying)
        break
      case '/reiki':
        setdisplayedImage(serviceReiki)
        break
      default:
        setdisplayedImage(serviceMineral)
    }
  }
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
        className={`absolute left-full top-0 h-screen w-screen bg-white transition duration-500 ${isClick && '-translate-x-full'}`}
      >
        <div className='mx-auto flex justify-center'>
          <div className='hidden w-1/2 lg:block'>
            <Image
              src={displayedImage}
              alt=''
              width={'full'}
              height={'100vh'}
              className='h-screen w-auto object-cover'
            />
          </div>
          <div className={`w-full px-4 pb-4 pt-[150px] lg:w-1/2`}>
            <Link href={'/'} className='flex flex-col items-center justify-center' onClick={() => setIsClick(false)}>
              <p className='text-md'>くらし・ととのう・さろん</p>
              <p className='text-[4rem]'>Kikara</p>
            </Link>
            <div className='mt-20'>
              <ul className='list-container w-full tracking-wide'>
                {menuItemsList.map((menuItem, index) => (
                  <li
                    key={index}
                    className={`list-content mt-6 flex h-20 items-center justify-center text-center text-xl`}
                    onClick={() => setIsClick(false)}
                    onMouseEnter={() => judgeMenuList(menuItem.url)}
                  >
                    <Link
                      href={menuItem.url}
                      className={`flex h-full w-full items-center justify-center before:mr-2 before:inline-block before:w-0 before:bg-secondary-brown before:align-middle before:transition-all before:duration-300 before:content-[''] hover:before:h-[1px] hover:before:w-4`}
                    >
                      {menuItem.menuTitle}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='mt-24 flex items-center justify-center' onClick={() => setIsClick(!isClick)}>
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
    </div>
  )
}

export default Header
