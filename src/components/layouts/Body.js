'use client'

import React, { useEffect } from 'react'
import '@/app/globals.css'
import useStore from '@/store/store'
import Footer from './Footer'
import Header from './Header'

const Body = ({ children }) => {
  const { isHidden } = useStore()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <body className={`font-sans ${!isHidden && 'overflow-hidden'}`}>
      <Header />
      <main className='bg-kikara-white'>{children}</main>
      <Footer />
    </body>
  )
}

export default Body
