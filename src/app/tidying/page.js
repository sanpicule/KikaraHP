import NewsSection from '@/components/features/common/News'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import tidyingHeroImage from '@/public/images/tidyingHero.png'
import React from 'react'
import Link from 'next/link'

const tidyingPage = () => {
  return (
    <div>
      <ServicePageHero serviceImage={tidyingHeroImage} serviceTitle={'片付け・手伝い'} />
      <div className='py-24 text-center max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>about</p>
          <h2>片付け・手伝いとは</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className="mt-24 text-center">
          <p className='mt-8 leading-8 md:leading-10'>
          本来、家の役目は心安らかに寛げることで一日の疲れをリセットし活力をも補えることにあると思います。自分設計の家を２回建てたこと引っ越し10回以上の経験、ミニマリスト生活実践中である私の元へ多くの依頼を頂きましたのでこの度、出張片付けのお手伝いを併用する運びとなりました。
          </p>
        </div>
      </div>
      <div className='bg-primary-pink py-24 text-center w-full md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>target</p>
          <h2>このような方へ</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className='flex flex-col gap-24 mt-24 w-[1040px] mx-auto'>
          <div className='flex items-center gap-4'>
            <h2>01</h2>
            <h4 className='text-start'>ごちゃごちゃした部屋を見て<br></br>疲れが酷くなっていると感じる</h4>
          </div>
          <div className='flex items-center gap-4 mx-auto'>
            <h2>02</h2>
            <h4 className='text-start'>人を呼びたいけれど<br></br>呼べるような状態ではない</h4>
          </div>
          <div className='flex items-center gap-4 ml-auto'>
            <h2>03</h2>
            <h4 className='text-start'>片付けたいけれど、どこから<br></br>手をつけていいかわからない</h4>
          </div>
        </div>
      </div>
      <div className='py-24 text-center max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>voice</p>
          <h2>お客様の声</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className='flex mt-12 w-[1040px] gap-4'>
          <div className='border-2 border-secondary-brown rounded-2xl p-4'>
            <div className='w-14 h-14 rounded-full mx-auto bg-slate-400'></div>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='border-2 border-secondary-brown rounded-2xl p-4'>
            <div className='w-14 h-14 rounded-full mx-auto bg-slate-400'></div>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='border-2 border-secondary-brown rounded-2xl p-4'>
            <div className='w-14 h-14 rounded-full mx-auto bg-slate-400'></div>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='border-2 border-secondary-brown rounded-2xl p-4'>
            <div className='w-14 h-14 rounded-full mx-auto bg-slate-400'></div>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
        </div>
        <div>
          <Link href={'/tidying/detail'} className='mx-auto'>
            <button className='py-4 px-24 mt-12 bg-secondary-brown-light text-kikara-white transition duration-300 hover:opacity-50 rounded-md'>
              <p className='text-md'>詳細を確認する</p>
            </button>
          </Link>
        </div>
      </div>
      <OtherServices decoration={false} />
    </div>
  )
}

export default tidyingPage
