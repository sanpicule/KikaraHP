import NewsSection from '@/components/features/common/News'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import tidyingApplication from '@/public/images/tidyingApplication.png'
import tidyingDo from '@/public/images/tidyingDo.png'
import tidyingReply from '@/public/images/tidyingReply.png'
import tidyingHeroImage from '@/public/images/tidyingHero.png'
import Image from 'next/image'
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
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className="mt-24 text-center">
          <p className='mt-8 leading-8 md:leading-10'>
          本来、家の役目は心安らかに寛げることで一日の疲れをリセットし活力をも補えることにあると思います。自分設計の家を２回建てたこと引っ越し10回以上の経験、ミニマリスト生活実践中である私の元へ多くの依頼を頂きましたのでこの度、出張片付けのお手伝いを併用する運びとなりました。
          </p>
        </div>
      </div>
      <div className='bg-sub-color py-24 text-center w-full md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>target</p>
          <h2>このような方へ</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
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
          <p className='section_sub'>flow</p>
          <h2>片付けまでの流れ</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className='flex flex-col justify-center gap-4 items-center mt-12 h-full'>
          <div className='flex justify-around w-full h-full'>
            <div className='flex flex-col items-center flex-1 gap-4 border-4 rounded-2xl border-sub-color p-4'>
              <h3>1.申込</h3>
              <Image src={tidyingApplication} alt="" width={150} height={150} />
              <p>こちらより申込をしていただけます。片付けを手伝って欲しい場所とだいたいの畳数を教えて下さい 例）キッチン4畳</p>
            </div>
            <div className="my-auto w-0 h-0 border-accent-color border-t-[30px] border-b-[30px] border-l-[30px] border-t-transparent border-b-transparent border-solid" />
            <div className='flex flex-col items-center flex-1 gap-4 border-4 rounded-2xl border-sub-color p-4'>
              <h3>2.返信</h3>
              <Image src={tidyingReply} alt="" width={150} height={150} />
              <p>ショートメールにて返信いたします。片付けたい場所の写真を２, 3枚送信して頂けるとありがたいです。</p>
            </div>
            <div className="my-auto w-0 h-0 border-accent-color border-t-[30px] border-b-[30px] border-l-[30px] border-t-transparent border-b-transparent border-solid" />
            <div className='flex flex-col items-center flex-1 gap-4 border-4 rounded-2xl border-sub-color p-4'>
              <h3>3.片付け</h3>
              <Image src={tidyingDo} alt="" width={150} height={150} />
              <p>予定をあわせ、ご自宅へ伺います。※料金は当日現金にてお支払い下さい</p>
            </div>
          </div>
        </div>
        <Link href={'/tidying/detail'}>
          <button className='py-4 px-24 mt-12 bg-accent-color text-main-color transition duration-300 hover:opacity-50'>
            <p className='text-md'>詳細を確認する</p>
          </button>
        </Link>
      </div>
      <div className='py-24 text-center max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>voice</p>
          <h2>お客様の声</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className='flex mt-12 w-[1040px] gap-4'>
          <div className='border-4 border-sub-color rounded-2xl p-4'>
            <div className='w-14 h-14 rounded-full mx-auto bg-slate-400'></div>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='border-4 border-sub-color rounded-2xl p-4'>
            <div className='w-14 h-14 rounded-full mx-auto bg-slate-400'></div>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='border-4 border-sub-color rounded-2xl p-4'>
            <div className='w-14 h-14 rounded-full mx-auto bg-slate-400'></div>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='border-4 border-sub-color rounded-2xl p-4'>
            <div className='w-14 h-14 rounded-full mx-auto bg-slate-400'></div>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
        </div>
      </div>
      <OtherServices decoration={false} />
    </div>
  )
}

export default tidyingPage
