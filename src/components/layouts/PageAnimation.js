'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

const PageAnimation = () => {
  const pathname = usePathname()
  const isTopPage = useMemo(() => pathname === '/', [pathname])
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    const waitForReady = async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.ready
        }
      } catch {
        // ignore font readiness errors
      }

      if (document.readyState !== 'complete') {
        await new Promise((resolve) => {
          window.addEventListener('load', resolve, { once: true })
        })
      }

      if (!cancelled) setIsReady(true)
    }

    waitForReady()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isReady ? { opacity: 0, transitionEnd: { display: 'none' } } : { opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className='fixed inset-0 left-0 top-0 z-50 flex h-lvh items-center justify-center bg-secondary-brown'
    >
      <div className='flex flex-col items-center justify-center gap-6 text-kikara-white'>
        {isTopPage && (
          <div className='flex flex-col items-center justify-center'>
            <p className='text-xs md:text-md'>くらし・ととのう・さろん</p>
            <p className='text-4xl tracking-wide md:text-[4rem]'>Kikara</p>
          </div>
        )}
        <div className='flex items-center gap-2'>
          <span className='inline-block h-2 w-2 animate-pulse rounded-full bg-kikara-white [animation-delay:-0.3s]' />
          <span className='inline-block h-2 w-2 animate-pulse rounded-full bg-kikara-white [animation-delay:-0.15s]' />
          <span className='inline-block h-2 w-2 animate-pulse rounded-full bg-kikara-white' />
          <p className='ml-2 text-sm tracking-[0.3em]'>Loading...</p>
        </div>
      </div>
    </motion.div>
  )
}

export default PageAnimation
