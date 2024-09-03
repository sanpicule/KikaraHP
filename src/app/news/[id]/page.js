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
    <div className='mt-[85px] bg-primary-pink'>
      {newsItem?.image_url && (
        <Image
          src={newsItem?.image_url || ''}
          alt={newsItem?.title || 'News Image'}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      )}
      <div className='mx-auto max-w-[90%] py-24 text-center md:w-[1040px] md:tracking-wide'>
        <p className='text-start'>{newsItem?.created_at.split('T')[0].replace(/-/g, '.')}</p>
        <h1 className='text-start'>{newsItem?.title}</h1>
        <div className='mt-24 rounded-[50px] bg-white py-12 shadow-2xl'>
          <FormatText text={newsItem?.body} />
        </div>
      </div>
    </div>
  )
}
