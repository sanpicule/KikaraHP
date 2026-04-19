'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// UXベストプラクティスのいわゆる「3秒ルール」に基づく最低表示時間
const MIN_DISPLAY_MS = 3000

const PageAnimation = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    const waitForResources = async () => {
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
    }

    const minimumDisplay = new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY_MS))

    Promise.all([waitForResources(), minimumDisplay]).then(() => {
      if (!cancelled) setIsReady(true)
    })

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
      <p className='text-sm tracking-[0.3em] text-kikara-white'>Loading...</p>
    </motion.div>
  )
}

export default PageAnimation
