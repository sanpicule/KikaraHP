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
    <div className='mt-[85px] bg-primary-pink pb-12'>
      {newsItem?.image_url && (
        <Image
          src={newsItem?.image_url || ''}
          alt={newsItem?.title || 'News Image'}
          width={0}
          height={0}
          sizes='100vw'
          className='h-[300px] w-full object-cover md:h-[500px]'
        />
      )}
      <div className='mx-auto mt-12 max-w-[90%] rounded-[50px] bg-white px-12 py-12 text-center shadow-2xl md:w-[1040px] md:py-24 md:tracking-wide'>
        <p className='text-start'>{newsItem?.created_at.split('T')[0].replace(/-/g, '.')}</p>
        <h1 className='text-start text-xl'>{newsItem?.title}</h1>
        <div>
          <FormatText text={newsItem?.body} />
        </div>
      </div>
    </div>
  )
}
