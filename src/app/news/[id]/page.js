import Image from 'next/image'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import FormatText from '@/components/features/common/FormatText'
import { supabase } from '@/lib/supabase'

const getNewsById = cache(async (id) => {
  const { data: news } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single()
    .then((response) => {
      return { data: response.data, error: response.error }
    })
  return news
})

export default async function Page({ params }) {
  const newsItem = await getNewsById(params.id)
  if (!newsItem) {
    notFound()
  }

  return (
    <div className='mt-[85px] bg-primary-pink py-12'>
      <div className='mx-auto mt-4 max-w-[90%] rounded-xl p-4 text-center shadow-sm md:mt-8 md:w-[1040px] md:p-8 md:tracking-wide'>
        <p className='text-start text-xs'>{newsItem?.created_at.split('T')[0].replace(/-/g, '.')}</p>
        <h1 className='text-start text-md font-bold md:text-3xl'>{newsItem?.title}</h1>
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
        <div>
          <FormatText text={newsItem?.body} />
        </div>
      </div>
    </div>
  )
}
