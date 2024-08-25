import Link from 'next/link'
import React from 'react'
import menuItemsList from '@/data/menuItems.json'
import SnsIconBtn from '../features/common/Buttons/SnsIconBtn'
import SnsLongBtn from '../features/common/Buttons/SnsLongBtn'

const Footer = () => {
  return (
    <div className='bg-kikara-gray py-12'>
      <div className='mx-auto max-w-7xl items-start justify-between sm:flex sm:px-10'>
        <div>
          <div className='flex justify-center'>
            <div className='inline-block'>
              <p className='text-xs tracking-wider'>くらし・ととのう・さろん</p>
              <h2 className='tracking-wide'>Kikara</h2>
              <p className='text-sm tracking-wider'>熊本市東区で心と身体を整える</p>
              <p className='text-md mt-12 font-bold tracking-wider'>連絡先</p>
              <p className='text-sm tracking-wider'>070-5414-3874</p>
              <p className='text-sm tracking-wider'>chiisonoblog@gmail.com</p>
              <div className='mt-4 hidden items-center gap-2 md:flex'>
                <SnsLongBtn snsId='facebook' iconSize={18} />
                <SnsLongBtn snsId='instagram' iconSize={18} />
              </div>
            </div>
          </div>
          <div className='mt-4 flex justify-center sm:justify-start'>
            <div className='flex gap-12 sm:hidden'>
              <SnsIconBtn snsId='facebook' />
              <SnsIconBtn snsId='instagram' />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-end'>
          <ul className='hidden gap-10 text-xl tracking-wide xl:flex'>
            {menuItemsList.map((menuItem, index) => (
              <li key={index} className='transition duration-300 hover:opacity-35'>
                <Link href={menuItem.url}>{menuItem.menuTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='pt-12 text-center'>
        <div className='flex-col justify-center gap-12 text-sm sm:flex sm:flex-row'>
          <div>
            <a href='https://totonou-kikara.com/index.php?Law' target='_blank' rel='noopener noreferrer'>
              プライバシーポリシー
            </a>
          </div>
          <div>
            <a href='https://totonou-kikara.com/index.php?Privacypolicy' target='_blank' rel='noopener noreferrer'>
              特定商取引法
            </a>
          </div>
          <div>
            {/* TODO: 適切なURLを設定 */}
            <a href='#' target='_blank' rel='noopener noreferrer'>
              サイトマップ
            </a>
          </div>
        </div>
        <div className='mt-4 text-xs'>Copyright © 2023 kikara All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer
