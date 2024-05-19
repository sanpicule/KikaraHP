import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import tidyingHeroImage from '@/public/images/tidyingHero.png'
import userMan from '@/public/images/userMan.png'
import userWoman from '@/public/images/userWoman.png'

const tidyingPage = () => {
  return (
    <div>
      <ServicePageHero serviceImage={tidyingHeroImage} serviceTitle={'片付け・手伝い'} />
      <div className='mx-auto max-w-[90%] py-24 text-center md:w-[1040px] md:tracking-wide'>
        <div className='flex flex-col items-center gap-2'>
          <p className='section_sub'>about</p>
          <h2>片付け・手伝いとは</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mt-24 text-center'>
          <p className='mt-8 leading-8 md:leading-10'>
            本来、家の役目は心安らかに寛げることで一日の疲れをリセットし活力をも補えることにあると思います。自分設計の家を２回建てたこと引っ越し10回以上の経験、ミニマリスト生活実践中である私の元へ多くの依頼を頂きましたのでこの度、出張片付けのお手伝いを併用する運びとなりました。
          </p>
        </div>
      </div>
      <div className='w-full bg-primary-pink py-24 text-center md:tracking-wide'>
        <div className='flex flex-col items-center gap-2'>
          <p className='section_sub'>target</p>
          <h2>このような方へ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mx-auto mt-24 flex w-[1040px] flex-col gap-24'>
          <div className='flex items-center gap-4'>
            <h2>01</h2>
            <h4 className='text-start'>
              ごちゃごちゃした部屋を見て<br></br>疲れが酷くなっていると感じる
            </h4>
          </div>
          <div className='mx-auto flex items-center gap-4'>
            <h2>02</h2>
            <h4 className='text-start'>
              人を呼びたいけれど<br></br>呼べるような状態ではない
            </h4>
          </div>
          <div className='ml-auto flex items-center gap-4'>
            <h2>03</h2>
            <h4 className='text-start'>
              片付けたいけれど、どこから<br></br>手をつけていいかわからない
            </h4>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] py-24 text-center md:w-[1040px] md:tracking-wide'>
        <div className='flex flex-col items-center gap-2'>
          <p className='section_sub'>voice</p>
          <h2>お客様の声</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom mt-12 flex w-[1040px] gap-4'>
          <div className='flex flex-col items-center rounded-xl p-4 shadow-2xl'>
            <Image src={userMan} alt='' width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
            </p>
          </div>
          <div className='flex flex-col items-center rounded-xl p-4 shadow-2xl'>
            <Image src={userWoman} alt='' width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
            </p>
          </div>
          <div className='flex flex-col items-center rounded-xl p-4 shadow-2xl'>
            <Image src={userMan} alt='' width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
            </p>
          </div>
          <div className='flex flex-col items-center rounded-xl p-4 shadow-2xl'>
            <Image src={userWoman} alt='' width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
            </p>
          </div>
        </div>
        <div>
          <Link
            href={'/tidying/detail'}
            className='group relative mt-12 inline-block border bg-secondary-brown-light px-24 py-4 text-kikara-white no-underline outline-none transition-all duration-300 hover:bg-secondary-brown'
          >
            詳細を確認する
            <span className='absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[129%] group-hover:w-[104.5%] group-hover:border-secondary-brown'></span>
            <span className='absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[129%] group-hover:w-[104.5%] group-hover:border-secondary-brown'></span>
          </Link>
        </div>
      </div>
      <OtherServices decoration={false} />
    </div>
  )
}

export default tidyingPage
