import { Noto_Sans_JP } from 'next/font/google'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import FormatText from '@/components/features/common/FormatText'
import { fetchArticleById } from '@/lib/tinypost'

// 詳細画面の可読性のためNoto Sans JPを使用
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

const getNewsById = cache(async (id) => {
  try {
    return await fetchArticleById(id)
  } catch (err) {
    console.error(err)
    return null
  }
})

export default async function Page({ params }) {
  const newsItem = await getNewsById(params.id)
  if (!newsItem) {
    notFound()
  }

  return (
    <div className={`${notoSansJP.className} mt-[85px] py-12`}>
      <div className='mx-auto mt-4 w-full max-w-3xl px-5 py-6 md:mt-8 md:max-w-5xl md:py-12'>
        <p className='text-start text-xs tracking-[0.1em] text-gray-500 md:text-sm'>
          {newsItem?.created_at.split('T')[0].replace(/-/g, '.')}
        </p>
        <h1 className='mt-3 text-start text-xl font-medium leading-[1.6] tracking-[0.05em] text-gray-900 md:text-3xl md:font-normal'>
          {newsItem?.title}
        </h1>
        <div className='mt-4 h-px w-8 bg-secondary-brown-light' />
        {newsItem?.image_url && (
          <Image
            src={newsItem?.image_url || ''}
            alt={newsItem?.title || 'News Image'}
            width={0}
            height={0}
            sizes='100vw'
            className='mt-8 w-full rounded-xl object-cover md:w-[60%]'
          />
        )}
        <FormatText text={newsItem?.body} />
      </div>
    </div>
  )
}
