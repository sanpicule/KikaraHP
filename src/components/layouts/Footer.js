import Link from 'next/link'
import React from 'react'
import menuItemsList from '@/data/menuItems.json'
import SnsIconBtn from '../features/common/Buttons/SnsIconBtn'
import SnsLongBtn from '../features/common/Buttons/SnsLongBtn'

const Footer = () => {
  return (
    <footer className='bg-primary-pink py-16'>
      {/* Brand */}
      <div className='mx-auto w-full max-w-5xl border-b border-gray-300/40 px-4 pb-12'>
        <p className='text-xs tracking-[.3em] text-gray-400'>ミネラル醗酵ドリンク</p>
        <p className='mt-2 font-thin tracking-[.15em] text-[48px] text-gray-800 md:text-[72px]'>KIKARA</p>
        <p className='mt-2 text-xs tracking-widest text-gray-400'>熊本市東区で心と身体を整える</p>
      </div>

      {/* Links + contact */}
      <div className='mx-auto mt-12 w-full max-w-5xl items-start justify-between px-4 sm:flex'>
        <div>
          <p className='text-xs tracking-widest text-gray-500'>CONTACT</p>
          <div className='mt-3 h-px w-8 bg-secondary-brown-light opacity-60' />
          <p className='mt-4 text-sm text-gray-700'>070-5414-3874</p>
          <p className='text-sm text-gray-700'>chiisonoblog@gmail.com</p>
          <div className='mt-4 hidden items-center gap-2 md:flex'>
            <SnsLongBtn snsId='facebook' iconSize={18} />
            <SnsLongBtn snsId='instagram' iconSize={18} />
          </div>
          <div className='mt-4 flex justify-start md:hidden'>
            <div className='flex gap-4'>
              <SnsIconBtn snsId='facebook' />
              <SnsIconBtn snsId='instagram' />
            </div>
          </div>
        </div>
        <ul className='mt-8 space-y-3 sm:mt-0 sm:text-left'>
          {menuItemsList.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className='tracking-widest text-md text-gray-600 transition hover:opacity-50 flex items-center gap-2 before:inline-block before:w-0 before:bg-secondary-brown before:align-middle before:transition-all before:duration-300 before:content-[""] hover:before:h-[1px] hover:before:w-4'
              >
                {item.menuTitle}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div className='mx-auto mt-12 w-full max-w-5xl border-t border-gray-300/40 px-4 pt-8'>
        <div className='flex flex-col gap-4 text-xs text-gray-400 sm:flex-row sm:gap-8'>
          <a href='https://totonou-kikara.com/index.php?Privacypolicy' target='_blank' rel='noopener noreferrer' className='transition hover:opacity-50'>
            プライバシーポリシー
          </a>
          <a href='https://totonou-kikara.com/index.php?Law' target='_blank' rel='noopener noreferrer' className='transition hover:opacity-50'>
            特定商取引法
          </a>
          <Link href='/contact' className='transition hover:opacity-50'>お問い合わせ</Link>
        </div>
        <p className='mt-4 text-xs text-gray-400'>Copyright © 2023 kikara All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
