import React from 'react'
import Link from 'next/link'
import menuItemsList from '../../data/menuItems.json'

const Header = () => {
  return (
    <div className="flex items-center sticky top-0 bg-white z-50">
      <div className="px-8 text-center">
        <Link href={'/'}>
          <p className="text-sm tracking-tighter">くらし・ととのう・さろん</p>
          <h1 className="text-3xl tracking-wide text-center">kikara</h1>
        </Link>
      </div>
      <p className="text-sm">熊本市東区三郎で<br></br>心とカラダを整える</p>
      <ul className='flex gap-10 ml-auto mr-10 text-xl tracking-wide'>
        {menuItemsList.map((menuItem, index) => (
          <li key={index}>
            <Link href={menuItem.url}>
              {menuItem.menuTitle}
            </Link>
          </li>          
        ))}
      </ul>         
      <button className="px-6 py-8 text-white bg-accent-color text-xl tracking-wide">
        <Link href={'/contact'}>
          お問い合わせ
        </Link>
      </button> 
    </div>
  )
}

export default Header
