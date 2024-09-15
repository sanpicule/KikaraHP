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
import useStore from '@/store/store'

const Header = () => {
  const { isHidden, isDisplay, setIsDisplay, setIsHidden } = useStore()
  const [isClick, setIsClick] = useState(false)
  const [isImageChanging, setIsImageChanging] = useState(false)
  const pathname = usePathname()
  // ↓スクロール位置によってハンバーガーメニューの色を変更する
  const scrollDirection = useScrollDirection()
  const [hamburgerColor, setHamburgerColor] = useState('kikara-white')
  useEffect(() => {
    if (pathname === '/') {
      setIsDisplay(false)
      setTimeout(() => {
        setIsDisplay(true)
      }, 2000)
    } else {
      setTimeout(() => {
        setIsDisplay(true)
        setIsHidden(true)
      }, 800)
    }
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
  }, [pathname, setIsDisplay, setIsHidden])

  // ハンバーガーメニュー内のホバーされたリストに応じて画像を変更する
  const [displayedImage, setDisplayedImage] = useState(serviceMineral)
  const [currentMenu, setCurrentMenu] = useState('')
  const judgeMenuList = (menu) => {
    if (menu === currentMenu) {
      return
    } else {
      setIsImageChanging(true) // アニメーションを開始
      setTimeout(() => {
        switch (menu) {
          case '/mineral':
            setDisplayedImage(serviceMineral)
            setCurrentMenu(menu)
            break
          case '/tidying':
            setDisplayedImage(serviceTidying)
            setCurrentMenu(menu)
            break
          case '/reiki':
            setDisplayedImage(serviceReiki)
            setCurrentMenu(menu)
            break
          default:
            setDisplayedImage(serviceMineral)
            setCurrentMenu(menu)
        }
        setIsImageChanging(false) // アニメーション終了
      }, 200) // 画像が変更される前に遅延を加える
    }
  }
  return (
    <div
      className={`fixed left-0 top-0 z-50 w-screen transition-transform duration-500 ${scrollDirection === 'down' && pathname !== '/' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div
        className={`flex h-[85px] items-center px-4 md:px-12 ${pathname === '/' && 'h-auto pt-4'} ${pathname !== '/' && 'bg-primary-pink-light'}`}
      >
        {pathname !== '/' && (
          <div onClick={() => setIsClick(false)}>
            <Link href={'/'}>
              <p className='text-xs tracking-tighter'>わたし・ととのう・さろん</p>
              <h1>kikara</h1>
            </Link>
          </div>
        )}
        {isDisplay && isHidden && (
          <div
            className={`group z-30 ml-auto mt-2 ${pathname === '/' && 'animate-fadeIn'} ${isDisplay && 'animate-fadeIn'}`}
            onClick={() => {
              setIsClick(!isClick)
              setCurrentMenu('')
            }}
          >
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
        )}
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
              className={`h-screen w-auto object-cover transition-opacity duration-300 ${isImageChanging ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>
          <div className={`w-full px-4 pb-4 pt-24 lg:w-1/2`}>
            <Link href={'/'} className='flex flex-col items-center justify-center' onClick={() => setIsClick(false)}>
              <p className='text-xs md:text-md'>くらし・ととのう・さろん</p>
              <p className='text-4xl tracking-wide md:text-[4rem]'>Kikara</p>
            </Link>
            <div className='mt-4 md:mt-20'>
              <ul className='list-container w-full tracking-wide'>
                {menuItemsList.map((menuItem, index) => (
                  <li
                    key={index}
                    className={`list-content mx-auto mt-12 flex w-64 items-center justify-center text-center text-md md:text-xl`}
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
              <div className='mt-8 flex items-center justify-center' onClick={() => setIsClick(!isClick)}>
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
