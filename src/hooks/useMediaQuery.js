import { useState, useEffect } from 'react'

const useMediaQuery = () => {
  const MOBILE_WIDTH = 768
  const TAB_WIDTH = 1024
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTab, setIsTab] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth
      setWindowWidth(currentWidth)
      setIsMobile(currentWidth <= MOBILE_WIDTH)
      setIsTab(currentWidth <= TAB_WIDTH)
    }

    // 初期値の設定
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { windowWidth, isMobile, isTab }
}

export default useMediaQuery
