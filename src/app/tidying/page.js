'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import VoiceCard from '@/components/features/common/VoiceCard'
import useScrollFadeIn from '@/components/features/home/useScrollFadeIn'
import voices from '@/data/voiceMineral.json'
import tidyingHeroImage from '@/public/images/tidyingHero.png'

const TidyingPage = () => {
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])

  return (
    <div className='animate-fadeIn'>
      <ServicePageHero serviceImage={tidyingHeroImage} serviceTitle={'片付け・手伝い'} />
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>about</p>
          <h2>片付け・手伝いとは</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom mt-24 text-center'>
          <p className='mt-8 leading-8 md:leading-10'>
            本来、家の役目は心安らかに寛げることで一日の疲れをリセットし活力をも補えることにあると思います。自分設計の家を２回建てたこと引っ越し10回以上の経験、ミニマリスト生活実践中である私の元へ多くの依頼を頂きましたのでこの度、出張片付けのお手伝いを併用する運びとなりました。
          </p>
        </div>
      </div>
      <div className='w-full bg-primary-pink py-24 text-center md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>target</p>
          <h2>このような方へ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mx-auto mt-24 flex w-[90%] flex-col items-center gap-12 xl:w-[1040px] xl:items-start xl:gap-24'>
          <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-4 xl:flex-row'>
            <h2>01</h2>
            <h4 className='text-center xl:text-start'>
              ごちゃごちゃした部屋を見て<br></br>疲れが酷くなっていると感じる
            </h4>
          </div>
          <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-4 xl:mx-auto xl:flex-row'>
            <h2>02</h2>
            <h4 className='text-center xl:text-start'>
              人を呼びたいけれど<br></br>呼べるような状態ではない
            </h4>
          </div>
          <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-4 xl:ml-auto xl:flex-row'>
            <h2>03</h2>
            <h4 className='text-center xl:text-start'>
              片付けたいけれど、どこから<br></br>手をつけていいかわからない
            </h4>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>voice</p>
          <h2>お客様の声</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mx-auto mt-12 grid w-[90%] grid-cols-1 gap-12 md:grid-cols-1 xl:w-[1040px]'>
          {voices.map((voice, i) => (
            <VoiceCard key={i} name={voice.name} info={voice.info} voice={voice.voice} index={i} />
          ))}
        </div>
        <div className='js-show-on-scroll-from-bottom'>
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

export default TidyingPage
