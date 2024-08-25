'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import useScrollFadeIn from '../home/useScrollFadeIn'

const NewsSection = ({ decoration = true, posts }) => {
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}.${month}.${day}`
  }

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
          <h2>
            お知らせ <span className='text-sm tracking-normal'>~Instagram~</span>
          </h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom mx-auto my-10 grid grid-cols-1 rounded-xl bg-kikara-white p-10'>
          {posts.map((post) => (
            <div key={post.id} className='h-full cursor-pointer py-4'>
              <div className='p-2 text-start  transition duration-500 ease-in-out hover:text-secondary-brown-light'>
                <a href={post.url} target='_blank' className='flex gap-4'>
                  <div className='mx-auto h-[200px] min-w-[200px] rounded-md'>
                    <Image
                      src={post.mediaUrl}
                      alt='back_button'
                      width={200}
                      height={200}
                      className='h-full w-full rounded-md transition hover:scale-105'
                    />
                  </div>
                  <div className='flex-grow px-2'>
                    <p className='text-sm font-thin tracking-normal'>{formatDate(post.date)}</p>
                    <p>{post.content}</p>
                  </div>
                </a>
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
