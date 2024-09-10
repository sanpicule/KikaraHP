'use client'

import React, { useEffect } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import useScrollFadeIn from './useScrollFadeIn'

const ConceptSection = () => {
  const { isMobile } = useMediaQuery()

  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])

  return (
    <div className='flex justify-between px-2 py-12 xl:p-20'>
      {!isMobile && (
        <div className='js-show-on-scroll-from-left'>
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='section_sub'>Concept</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </div>
      )}
      <div className='mx-auto max-w-[90%] text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>concept</p>
          <h2>コンセプト</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom pt-10'>
          <p className='mx-auto w-full text-sm leading-10 tracking-normal md:tracking-wide lg:text-xl'>
            kikaraとは...<br></br>そのままの姿でその者らしくただソコニイル<br></br>木が好きだった。<br></br>
            シンプルな物、自然素材な物を集めた<br></br>木からはじまった私を表現する場所<br></br>
            2004年自宅の庭でガーデンショップkikara<br></br>を静岡にオープン。<br></br>
            野に咲く小花や育て易い植物を集めて自然のある暮らしを提案。<br></br>生活雑貨も麻や綿素材を中心に揃え<br></br>
            最終目的の自然食品の販売へと繋げる。<br></br>食べ物で身体と精神は創られていく。<br></br>
            一番シンプルな事を見つけるきっかけになれたら
          </p>
        </div>
      </div>
      {!isMobile && (
        <div className='js-show-on-scroll-from-right mt-auto -translate-y-full'>
          <div className='flex translate-y-full -rotate-90 items-center gap-2'>
            <p className='section_sub'>Concept</p>
            <div className='h-0.1 w-16 bg-secondary-brown'></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ConceptSection
