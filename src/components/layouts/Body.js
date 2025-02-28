'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import useStore from '@/store/store'
import '@/app/globals.css'
import Footer from './Footer'
import Header from './Header'
import PageAnimation from './PageAnimation'

const Body = ({ children }) => {
  const pathname = usePathname()
  const { setIsAnimating, setIsAnimationCompleted, setIsHomeAnimating, setIsHomeAnimationCompleted } = useStore()
  // アニメーションを適用しないページのリスト
  const noAnimationPages = ['/contact', '/contact/confirm', '/contact/complete']
  // アニメーションを適用するかどうかの判定
  const shouldAnimate = !noAnimationPages.includes(pathname)
  const isTopPage = pathname === '/'

  return (
    <AnimatePresence mode='wait'>
      <body key={pathname} className='relative font-sans'>
        {shouldAnimate && (
          <PageAnimation
            isTopPage={isTopPage}
            setIsAnimating={setIsAnimating}
            setIsAnimationCompleted={setIsAnimationCompleted}
            setIsHomeAnimating={setIsHomeAnimating}
            setIsHomeAnimationCompleted={setIsHomeAnimationCompleted}
          />
        )}
        <Header />
        <main className='min-h-[calc(100vh-465px)] overflow-x-hidden bg-kikara-white'>{children}</main>
        <Footer />
      </body>
    </AnimatePresence>
  )
}

export default Body
