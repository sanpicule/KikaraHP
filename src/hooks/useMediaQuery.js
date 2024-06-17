import { useState, useEffect } from 'react'

const useMediaQuery = () => {
  const MOBILE_WIDTH = 768
  const TAB_WIDTH = 1024
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH)
  const [isTab, setIsTab] = useState(window.innerWidth <= MOBILE_WIDTH)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setIsMobile(window.innerWidth <= MOBILE_WIDTH)
      setIsTab(window.innerWidth <= TAB_WIDTH)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { windowWidth, isMobile, isTab }
}

export default useMediaQuery
