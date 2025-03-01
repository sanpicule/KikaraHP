'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useMemo } from 'react'
import '@/app/globals.css'
import Footer from './Footer'
import Header from './Header'
import PageAnimation from './PageAnimation'

const Body = ({ children }) => {
  const pathname = usePathname()
  const [isActiveAnimate, setIsActiveAnimate] = useState(true)
  const [isBack, setIsBack] = useState(false) // ブラウザバック時の判定

  // アニメーションを適用しないページのリスト
  const noAnimationPages = useMemo(() => ['/contact', '/contact/confirm', '/contact/complete'], [])

  useEffect(() => {
    const handlePopState = () => {
      setIsBack(true) // ブラウザバックが発生したことを記録
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (isBack) {
      setIsActiveAnimate(false) // ブラウザバック時はアニメーション無効
      setIsBack(false) // フラグをリセット
    } else {
      setIsActiveAnimate(!noAnimationPages.includes(pathname)) // 通常の遷移時はアニメーション有効
    }
  }, [pathname, noAnimationPages, isBack])

  const isTopPage = useMemo(() => pathname === '/', [pathname])

  return (
    <AnimatePresence mode='wait'>
      <body key={pathname} className='relative font-sans'>
        {isActiveAnimate && <PageAnimation isTopPage={isTopPage} />}
        <Header />
        <main className='min-h-[calc(100vh-465px)] overflow-x-hidden bg-kikara-white'>{children}</main>
        <Footer />
      </body>
    </AnimatePresence>
  )
}

export default Body
