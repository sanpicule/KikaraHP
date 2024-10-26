'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useAnimation from '@/hooks/useAnimation'
import useMediaQuery from '@/hooks/useMediaQuery'
import { supabase } from '@/lib/supabase'
import arrowRight from '@/public/images/arrowRight.png'

const NewsSection = () => {
  const animate = useAnimation()
  const [posts, setPosts] = useState([])
  const { isMobile } = useMediaQuery()
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const userId = process.env.NEXT_PUBLIC_SUPABASE_USERID
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('user_id', userId)
      .eq('public', true)
      .order('created_at', { ascending: false })
    if (error) {
      // Use a logging library or remove the console statement
      // console.error('Error fetching posts:', error) // This line is causing the error
    } else {
      setPosts(data)
    }
  }

  return (
    <div className='flex justify-between bg-primary-pink xl:p-20'>
      {!isMobile && (
        <motion.div
          variants={animate.scrollFadeInFromLeft}
          initial={animate.scrollFadeInFromLeft.initial}
          whileInView={animate.scrollFadeInFromLeft.whileInView}
          viewport={animate.scrollFadeInFromLeft.viewport}
          className='hidden xl:block'
        >
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='section_sub'>News</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </motion.div>
      )}
      <div className='mx-auto min-w-[85%] max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='flex flex-col items-center gap-2'
        >
          <p className='section_sub'>News</p>
          <h2>お知らせ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        {posts.length > 0 ? (
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
            className='my-1 p-4 md:p-10'
          >
            {posts.map((post) => (
              <div
                key={post.id}
                className='transition-bg cursor-pointer gap-12 rounded-md border-b border-kikara-white px-4 py-4 duration-500 hover:bg-kikara-white md:px-8 md:py-8'
              >
                <Link href={`/news/${post.id}`}>
                  <div className='flex items-center justify-between'>
                    <div className='flex origin-left flex-col gap-1 md:flex-row md:gap-4'>
                      <div className='mt-2 flex items-center gap-2 text-start md:flex-row md:items-center md:gap-4'>
                        <p className='text-sm tracking-normal'>{post.created_at.split('T')[0].replace(/-/g, '.')}</p>
                        {post.label === 1 && (
                          <span className='w-fit bg-blue-400 px-4 py-[3px] text-sm text-white'>お知らせ</span>
                        )}
                        {post.label === 2 && (
                          <span className='w-fit bg-orange-400 px-4 py-[3px] text-sm text-white'>料理教室</span>
                        )}
                      </div>
                      <div className='mt-2 text-start'>
                        <h4 className='text-md'>{post.title}</h4>
                      </div>
                    </div>
                    {!isMobile && (
                      <Image
                        src={arrowRight}
                        alt={post.title}
                        width={40}
                        height={200}
                        className='transition-all duration-300 group-hover:translate-x-4'
                      />
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
            className='mt-8'
          >
            表示するお知らせはありません。
          </motion.div>
        )}
      </div>
      {!isMobile && (
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='mt-auto hidden -translate-y-full xl:block'
        >
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='section_sub'>News</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default NewsSection
