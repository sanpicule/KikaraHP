import React from 'react'
import Link from 'next/link'
import menuItemsList from '../../data/menuItems.json'

const Header = () => {
  return (
    <div className="flex items-center sticky top-0 bg-main-color z-50 shadow-sm">
      <div className="px-8 text-center">
        <Link href={'/'}>
          <p className="text-sm tracking-tighter">くらし・ととのう・さろん</p>
          <h2>kikara</h2>
        </Link>
      </div>
      <p className="text-sm tracking-wide">熊本市東区三郎で<br></br>心とカラダを整える</p>
      <ul className='flex gap-10 ml-auto mr-10 text-xl tracking-wide'>
        {menuItemsList.map((menuItem, index) => (
          <li key={index} className='transition duration-300 hover:opacity-35'>
            <Link href={menuItem.url}>
              {menuItem.menuTitle}
            </Link>
          </li>          
        ))}
      </ul>         
      <Link href={'/contact'} className="px-6 py-8 text-white bg-accent-color text-xl tracking-wide">
        お問い合わせ
      </Link> 
    </div>
  )
}

export default Header
