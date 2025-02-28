'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import '@/app/globals.css'
import Footer from './Footer'
import Header from './Header'
import PageAnimation from './PageAnimation'

const Body = ({ children }) => {
  const pathname = usePathname()

  // アニメーションを適用しないページのリスト
  const noAnimationPages = useMemo(() => ['/contact', '/contact/confirm', '/contact/complete'], [])

  // アニメーションを適用するかどうかの判定
  const shouldAnimate = useMemo(() => !noAnimationPages.includes(pathname), [pathname, noAnimationPages])
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
