'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { supabase } from '@/lib/supabase'
import arrowRight from '@/public/images/arrowRight.png'

const ITEMS_PER_PAGE = 5

const NewsListPage = () => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const { isMobile } = useMediaQuery()

  useEffect(() => {
    fetchPosts()
    fetchTotalCount()
  }, [currentPage])

  const fetchTotalCount = async () => {
    const userId = process.env.NEXT_PUBLIC_SUPABASE_USERID
    const { count, error } = await supabase
      .from('news')
      .select('*', { count: 'exact' })
      .eq('user_id', userId)
      .eq('public', true)

    if (!error) {
      setTotalCount(count)
      setFetching(true)
    }
  }

  const fetchPosts = async () => {
    const userId = process.env.NEXT_PUBLIC_SUPABASE_USERID
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('user_id', userId)
      .eq('public', true)
      .order('created_at', { ascending: false })
      .range((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE - 1)

    if (!error) {
      setPosts(data)
    }
  }

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='relative mt-[85px] h-4/5 w-full'>
      {fetching && (
        <div className='px-4 py-8 md:p-12'>
          <h2>お知らせ一覧</h2>
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
                      <p className='text-xs tracking-normal md:text-sm'>
                        {post.created_at.split('T')[0].replace(/-/g, '.')}
                      </p>
                      {post.label === 1 && (
                        <span className='w-fit bg-blue-400 px-4 py-[3px] text-xs text-white md:text-sm'>お知らせ</span>
                      )}
                      {post.label === 2 && (
                        <span className='w-fit bg-orange-400 px-4 py-[3px] text-xs text-white md:text-sm'>
                          料理教室
                        </span>
                      )}
                    </div>
                    <div className='mt-2 text-start'>
                      <h4 className='text-sm md:text-md'>{post.title}</h4>
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
