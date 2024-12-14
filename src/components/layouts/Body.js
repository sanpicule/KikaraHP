'use client'

import '@/app/globals.css'
import Footer from './Footer'
import Header from './Header'

const Body = ({ children }) => {
  return (
    <body className={`font-sans`}>
      <Header />
      <main className='min-h-[calc(100vh-465px)] overflow-x-hidden bg-kikara-white'>{children}</main>
      <Footer />
    </body>
  )
}

export default Body
