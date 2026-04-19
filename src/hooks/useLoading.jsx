'use client'

import { createContext, useContext, useEffect, useState } from 'react'

// UXの「3秒ルール」に基づく最低表示時間
const MIN_DISPLAY_MS = 3000

const LoadingContext = createContext({ isReady: false })

export const LoadingProvider = ({ children }) => {
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

  return <LoadingContext.Provider value={{ isReady }}>{children}</LoadingContext.Provider>
}

export const useLoading = () => useContext(LoadingContext)
