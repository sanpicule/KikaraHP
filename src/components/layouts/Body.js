'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import { usePathname } from 'next/navigation'
import animationData from '@/public/animation.json'
import useStore from '@/store/store'
import '@/app/globals.css'
import Footer from './Footer'
import Header from './Header'

const Body = ({ children }) => {
  const pathname = usePathname()
  const { setIsAnimating, setIsAnimationCompleted } = useStore()
  // アニメーションを適用しないページのリスト
  const noAnimationPages = ['/contact', '/contact/confirm', '/contact/complete']
  // アニメーションを適用するかどうかの判定
  const shouldAnimate = !noAnimationPages.includes(pathname)

  return (
    <AnimatePresence mode='wait'>
      <body key={pathname} className='relative font-sans'>
        {shouldAnimate && (
          <motion.div
            animate={{
              opacity: [1, 0.75, 0],
              transitionEnd: {
                display: 'none',
              },
            }}
            transition={{
              duration: 2.2,
            }}
            onAnimationComplete={() => {
              setIsAnimating(true), setIsAnimationCompleted(true)
            }}
            className='absolute inset-0 left-0 top-0 z-50 h-screen overflow-hidden bg-secondary-brown [&>div]:-ml-[50vw] [&>div]:-mt-[30vh] [&>div]:h-[160vh] [&>div]:w-[200vw] xl:[&>div]:-mt-[10vh] xl:[&>div]:ml-0 xl:[&>div]:w-auto [&_svg]:object-cover'
          >
            <Lottie animationData={animationData} loop={false} rendererSettings={{ preserveAspectRatio: 'none' }} />
          </motion.div>
        )}
        <Header />
        <main className='min-h-[calc(100vh-465px)] overflow-x-hidden bg-kikara-white'>{children}</main>
        <Footer />
      </body>
    </AnimatePresence>
  )
}

export default Body
