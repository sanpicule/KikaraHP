import React from 'react'
import Link from 'next/link'

import SnsIconBtn from '../features/common/Buttons/SnsIconBtn'
import SnsLongBtn from '../features/common/Buttons/SnsLongBtn'
import menuItemsList from '@/data/menuItems.json'

const Footer = () => {
  return (
    <div className="py-12 bg-kikara-gray">
      <div className="sm:flex justify-between items-start mx-auto max-w-7xl sm:px-10">
        <div>
          <div className="flex justify-center">
            <div className="inline-block">
              <p className="text-xs tracking-wider">くらし・ととのう・さろん</p>
              <h2 className="tracking-wide">Kikara</h2>
              <p className="text-sm tracking-wider">熊本市東区で心と身体を整える</p>
              <p className="mt-12 text-md tracking-wider font-bold">連絡先</p>
              <p className="text-sm tracking-wider">070-5414-3874</p>
              <p className="text-sm tracking-wider">chiisonoblog@gmail.com</p>
              <div className="hidden md:flex items-center gap-2 mt-4">
                <SnsLongBtn snsId="facebook" iconSize={18} />
                <SnsLongBtn snsId="instagram" iconSize={18} />
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start mt-4">
            <div className="flex sm:hidden gap-12">
              <SnsIconBtn snsId="facebook" />
              <SnsIconBtn snsId="instagram" />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-end'>
          <ul className='hidden md:flex gap-10 text-xl tracking-wide'>
            {menuItemsList.map((menuItem, index) => (
              <li key={index} className='transition duration-300 hover:opacity-35'>
                <Link href={menuItem.url}>
                  {menuItem.menuTitle}
                </Link>
              </li>          
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center pt-12">
        <div className="sm:flex flex-col sm:flex-row justify-center gap-12 text-sm">
          <div>
            <a href="https://totonou-kikara.com/index.php?Law" target="_blank" rel="noopener noreferrer">
              プライバシーポリシー
            </a>
          </div>
          <div>
            <a href="https://totonou-kikara.com/index.php?Privacypolicy" target="_blank" rel="noopener noreferrer">
              特定商取引法
            </a>
          </div>
          <div>
            {/* TODO: 適切なURLを設定 */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              サイトマップ
            </a>
          </div>
        </div>
        <div className="text-xs mt-4">
          Copyright © 2023 kikara All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
