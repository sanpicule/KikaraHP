'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { supabase } from '@/lib/supabase'
import arrowRight from '@/public/images/arrowRight.png'
import useScrollFadeIn from '../home/useScrollFadeIn'

const NewsSection = () => {
  const [posts, setPosts] = useState([])
  const { isMobile } = useMediaQuery()
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false })
    // eslint-disable-next-line no-console
    if (error) console.error('Error fetching posts:', error)
    else {
      setPosts(data)
    }
  }

  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])

  return (
    <div className='flex justify-between bg-primary-pink xl:p-20'>
      {!isMobile && (
        <div className='js-show-on-scroll-from-left hidden xl:block'>
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='section_sub'>News</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </div>
      )}
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>News</p>
          <h2>お知らせ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        {posts.length > 0 ? (
          <div className='js-show-on-scroll-from-bottom my-10 rounded-xl bg-kikara-white p-4 md:p-10'>
            {posts.map((post) => (
              <div
                key={post.id}
                className='transition-bg group cursor-pointer gap-12 rounded-md border-b px-8 py-4 duration-300'
              >
                <Link href={`/news/${post.id}`}>
                  <div className='flex items-center justify-between'>
                    <div className='origin-left transition-all duration-300 group-hover:scale-x-105'>
                      <div className='mt-2 flex flex-col-reverse gap-2 text-start md:flex-row md:items-center md:gap-4'>
                        <p className='text-xs font-bold tracking-normal md:text-sm'>
                          {post.created_at.split('T')[0].replace(/-/g, '.')}
                        </p>
                        {post.label === 1 && (
                          <span className='w-fit rounded-md border bg-blue-400 px-4 py-[3px] text-xs text-white md:text-sm'>
                            お知らせ
                          </span>
                        )}
                        {post.label === 2 && (
                          <span className='w-fit rounded-md border bg-orange-400 px-4 py-[3px] text-xs text-white md:text-sm'>
                            料理教室
                          </span>
                        )}
                      </div>
                      <div className='mt-2 text-start'>
                        <h4 className='text-sm md:text-md'>{post.title}</h4>
                      </div>
                    </div>
                    <Image
                      src={arrowRight}
                      alt={post.title}
                      width={40}
                      height={200}
                      className='transition-all duration-300 group-hover:translate-x-4'
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>表示するお知らせはありません。</div>
        )}
      </div>
      {!isMobile && (
        <div className='js-show-on-scroll-from-bottom mt-auto hidden -translate-y-full xl:block'>
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
