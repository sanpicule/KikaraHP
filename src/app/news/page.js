'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SectionHeader from '@/components/features/common/SectionHeader'
import useMediaQuery from '@/hooks/useMediaQuery'
import { fetchArticles } from '@/lib/tinypost'
import arrowRight from '@/public/images/arrowRight.png'

const ITEMS_PER_PAGE = 5

const NewsListPage = () => {
  const [allPosts, setAllPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(false)
  const { isMobile } = useMediaQuery()

  useEffect(() => {
    const load = async () => {
      try {
        // Tinypost APIはoffsetをサポートしないため、全件取得してクライアント側でページング
        const { data } = await fetchArticles()
        setAllPosts(data)
      } catch (err) {
        console.error(err)
      } finally {
        setFetching(true)
      }
    }
    load()
  }, [])

  const totalPages = Math.ceil(allPosts.length / ITEMS_PER_PAGE)
  const posts = allPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='relative mt-[85px] h-4/5 w-full'>
      {fetching && (
        <div className='mx-auto w-full max-w-5xl px-4 py-8 md:py-12'>
          <SectionHeader en='News' ja='お知らせ一覧' />
          <div className='mb-8 mt-8 flex justify-center gap-2 md:gap-4'>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`h-8 w-8 rounded-[50%] border md:h-10 md:w-10 ${
                  currentPage === pageNumber
                    ? 'bg-secondary-brown-dark bg-secondary-brown-light text-kikara-white'
                    : 'hover:opacity-50'
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          {posts.map((post) => (
            <div
              key={post.id}
              className='transition-bg cursor-pointer gap-12 border-b duration-500 hover:bg-primary-pink'
            >
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
        </div>
      )}
    </div>
  )
}

export default NewsListPage
