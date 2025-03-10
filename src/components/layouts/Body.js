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
  const [isActiveAnimate, setIsActiveAnimate] = useState(null)
  const [isBack, setIsBack] = useState(false)

  const noAnimationPages = useMemo(() => ['/contact', '/contact/confirm', '/contact/complete'], [])

  useEffect(() => {
    const handlePopState = () => {
      setIsBack(true)
    }
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (isBack) {
      setIsActiveAnimate(false)
      setIsBack(false)
    } else {
      setIsActiveAnimate(!noAnimationPages.includes(pathname))
    }
  }, [pathname])

  return (
    <body className='relative font-sans'>
      <AnimatePresence mode='wait'>
        <div key={pathname} className='overflow-x-hidden'>
          {isActiveAnimate && <PageAnimation />}
          <Header />
          <main className='min-h-[calc(100vh-465px)] bg-kikara-white'>{children}</main>
          <Footer />
        </div>
      </AnimatePresence>
    </body>
  )
}

export default Body
