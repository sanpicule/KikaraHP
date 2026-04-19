'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SectionDecorator from '@/components/features/common/SectionDecorator'
import SectionHeader from '@/components/features/common/SectionHeader'
import useAnimation from '@/hooks/useAnimation'
import { fetchArticles } from '@/lib/tinypost'
import arrowRight from '@/public/images/arrowRight.png'

const NewsSection = () => {
  const animate = useAnimation()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const { data } = await fetchArticles({ limit: 3 })
      setPosts(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='flex justify-center bg-white xl:justify-between xl:px-[140px]'>
      <SectionDecorator label='News' />
      <div className='mx-auto w-full max-w-5xl px-4 py-12 md:py-24 md:tracking-wide'>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <SectionHeader en='News' ja='お知らせ' />
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
              <div key={post.id} className='group border-b border-gray-200 duration-500 hover:bg-primary-pink-light'>
                <Link href={`/news/${post.id}`}>
                  <div className='flex items-center justify-between px-4 py-4 md:px-8 md:py-8'>
                    <div className='flex origin-left flex-col gap-1 md:flex-row md:gap-4'>
                      <div className='mt-2 flex items-center gap-2 text-start md:flex-row md:items-center md:gap-4'>
                        <p className='text-xs tracking-[.2em] text-gray-500 md:text-sm'>
                          {post.created_at.split('T')[0].replace(/-/g, '.')}
                        </p>
                        {post.label === 1 && (
                          <span className='w-fit bg-secondary-brown-light px-4 py-[3px] text-xs tracking-[.2em] text-white'>
                            お知らせ
                          </span>
                        )}
                        {post.label === 2 && (
                          <span className='w-fit bg-secondary-brown px-4 py-[3px] text-xs tracking-[.2em] text-white'>
                            料理教室
                          </span>
                        )}
                      </div>
                      <div className='mt-2 text-start'>
                        <h4 className='text-sm font-normal tracking-wide md:text-md'>{post.title}</h4>
                      </div>
                    </div>
                    <Image
                      src={arrowRight}
                      alt={post.title}
                      width={40}
                      height={200}
                      className='hidden transition-all duration-300 group-hover:translate-x-4 md:block'
                    />
                  </div>
                </Link>
              </div>
            ))}
            <Link href={'/news'}>
              <div className='mt-12 flex justify-center md:justify-start'>
                <div className='group relative inline-block w-[200px] overflow-hidden border border-gray-800 bg-white text-center leading-[50px] text-gray-800 no-underline transition-colors duration-500 hover:text-white md:w-[300px] md:leading-[60px]'>
                  <p className='relative z-10 text-sm font-thin tracking-[.2em]'>View More</p>
                  <div className='absolute inset-0 origin-right scale-x-0 transform bg-gray-800 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100'></div>
                </div>
              </div>
            </Link>
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
      <SectionDecorator label='News' />
    </div>
  )
}

export default NewsSection
