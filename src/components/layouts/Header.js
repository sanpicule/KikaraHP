import React from 'react'
import Link from 'next/link'
import menuItemsList from '../../data/menuItems.json'

const Header = () => {
  return (
    <div className="flex items-center sticky top-0 bg-white z-50">
      <div className="px-8 text-center">
        <p className="text-sm tracking-tighter">くらし・ととのう・さろん</p>
        <h1 className="text-3xl tracking-wide text-center">kikara</h1>
      </div>
      <p className="text-sm">熊本市東区三郎で<br></br>心とカラダを整える</p>
      <div className='flex gap-9 p-6 ml-auto mr-3 text-xl'>
        {menuItemsList.map((menuItems, index) => (
          <ul key={index}>
            <li><Link href={menuItems.url}>{menuItems.menuTitle}</Link></li> 
          </ul>
        ))}  
      </div>
      <button className="p-6 text-white bg-accent-color text-xl"><Link href={'/contact'}>お問い合わせ</Link></button> 
    </div>
  )
}

export default Header
