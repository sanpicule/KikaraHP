'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import useScrollFadeIn from '../home/useScrollFadeIn'

const NewsSection = ({ decoration = true }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false })
    if (error) console.log('Error fetching posts:', error)
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
        {posts.length > 0 ? (
          <div className='js-show-on-scroll-from-bottom my-10 rounded-xl bg-kikara-white p-10'>
            {posts.map((post) => (
              <div
                key={post.id}
                className='transition-bg cursor-pointer gap-12 rounded-md border-b px-8 py-4 duration-300 hover:shadow-xl'
              >
                <Link href={`/news/${post.id}`}>
                  <div className='mt-2 flex items-center gap-4 text-start'>
                    <p className='font-bold tracking-normal'>{post.created_at.split('T')[0].replace(/-/g, '.')}</p>
                    {post.label === 1 && (
                      <span className='rounded-md border bg-blue-400 px-8 py-[3px] text-white'>お知らせ</span>
                    )}
                    {post.label === 2 && (
                      <span className='rounded-md border bg-orange-400 px-8 py-[3px] text-white'>料理教室</span>
                    )}
                  </div>
                  <div className='mt-8 text-start'>
                    <h4>{post.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>表示するお知らせはありません。</div>
        )}
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
