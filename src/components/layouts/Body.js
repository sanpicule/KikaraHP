'use client'

import '@/app/globals.css'
import useStore from '@/store/store'
import Footer from './Footer'
import Header from './Header'

const Body = ({ children }) => {
  const { isHidden } = useStore()
  return (
    <body className={`font-sans ${!isHidden && 'overflow-hidden'}`}>
      <Header />
      <main className='min-h-[calc(100vh-465px)] overflow-x-hidden bg-kikara-white'>{children}</main>
      <Footer />
    </body>
  )
}

export default Body
