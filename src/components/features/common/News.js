'use client'

import React, { useEffect } from 'react'
import NewsList from '../../../data/news.json'
import useScrollFadeIn from '../home/useScrollFadeIn'

const NewsSection = ({ decoration = true }) => {
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])
  return (
    <div className='flex justify-between bg-primary-pink p-20'>
      {decoration && (
        <div>
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='section_sub'>News</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </div>
      )}
      <div className='mx-auto w-[1040px]'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>News</p>
          <h2>お知らせ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom mx-auto my-10 rounded-xl bg-kikara-white p-10 shadow-2xl'>
          {NewsList.map((news, index) => (
            <div key={index} className='cursor-pointer border-b py-4'>
              <div className='border-l-4 border-secondary-brown p-2 text-start  transition duration-500 ease-in-out hover:text-secondary-brown-light'>
                <p className='text-sm font-thin'>{news.date}</p>
                <p className='tracking-wide'>{news.newsTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {decoration && (
        <div className='mt-auto -translate-y-full'>
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='section_sub'>News</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewsSection
