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
  const [shouldAnimate, setShouldAnimate] = useState(true)

  // アニメーションを適用しないページのリスト
  const noAnimationPages = useMemo(() => ['/contact', '/contact/confirm', '/contact/complete'], [])

  useEffect(() => {
    const handlePopState = () => {
      setShouldAnimate(false) // ブラウザバック時はアニメーション無効
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    setShouldAnimate(!noAnimationPages.includes(pathname)) // 通常の遷移時はアニメーション有効
  }, [pathname, noAnimationPages])

  const isTopPage = useMemo(() => pathname === '/', [pathname])

  return (
    <AnimatePresence mode='wait'>
      <body key={pathname} className='relative font-sans'>
        {shouldAnimate && <PageAnimation isTopPage={isTopPage} />}
        <Header />
        <main className='min-h-[calc(100vh-465px)] overflow-x-hidden bg-kikara-white'>{children}</main>
        <Footer />
      </body>
    </AnimatePresence>
  )
}

export default Body
