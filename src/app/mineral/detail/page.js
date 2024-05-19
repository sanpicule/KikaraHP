'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'

import EmblaCarousel from '@/components/features/mineral/EmblaCarousel'
import OtherServices from '@/components/features/common/OtherServices'
import SnsLongBtn from '@/components/features/common/Buttons/SnsLongBtn'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import FlowRightArrow from '@/components/features/common/FlowRightArrow'

import decoration from '@/public/images/decoration.png'
import slideImage1 from '@/public/images/throw1.png'
import slideImage2 from '@/public/images/throw2.png'
import slideImage3 from '@/public/images/throw1.png'
import slideImage4 from '@/public/images/throw2.png'
import profileImage from '@/public/images/profileImage.png'
import replyImage from '@/public/images/tidyingReply.png'
import infoImage from '@/public/images/infoImage.png'
import preparationImage from '@/public/images/preparationImage.png'
import classImage from '@/public/images/classImage.png'
import one from '@/public/images/1.png'
import two from '@/public/images/2.png'
import three from '@/public/images/3.png'
import four from '@/public/images/4.png'
import userWoman from '@/public/images/userWoman.png'
import userMan from '@/public/images/userMan.png'
import mineral from '@/public/images/mineral.png'
import cooking1 from '@/public/images/cooking1.png'
import cooking2 from '@/public/images/cooking2.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import useScrollFadeIn from '@/components/features/home/useScrollFadeIn'

const MineralDetail = () => {
  const OPTIONS = { loop: true }
  const SLIDES = [slideImage1, slideImage2, slideImage3, slideImage4]
  const { isMobile } = useMediaQuery()

  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])

  return (
    <div>
      <ServicePageHero serviceImage={mineral} serviceTitle={'ミネラル醗酵ドリンク'} />
      <div className='py-24 text-center max-w-[90%] mx-auto md:tracking-wide'>
        <div className="flex flex-col items-center gap-2 js-show-on-scroll-from-bottom">
          <p className='section_sub'>about</p>
          <h2>ミネラル醗酵ドリンクについて</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className="mt-24 text-center flex flex-col gap-8 js-show-on-scroll-from-bottom">
          <p>Kikaraではみなさまと一緒にミネラル醗酵ドリンクの</p>
          <Image
            src={decoration}
            alt=''
            width={500}
            height={20}
            className='mx-auto'
          />
          <p>を学べる教室を開催しています！</p>
          <div className='js-show-on-scroll-from-right'>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
      <div className='py-24 text-center max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2 js-show-on-scroll-from-bottom">
          <p className='section_sub'>voice</p>
          <h2>お客様の声</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-12 xl:w-[1040px] gap-4 js-show-on-scroll-from-bottom'>
          <div className='flex flex-col items-center rounded-xl bg-kikara-white shadow-2xl p-4'>
            <Image src={userMan} alt="" width={60} height={60}/>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='flex flex-col items-center rounded-xl bg-kikara-white shadow-2xl p-4'>
            <Image src={userWoman} alt="" width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='flex flex-col items-center rounded-xl bg-kikara-white shadow-2xl p-4'>
            <Image src={userMan} alt="" width={60} height={60}/>
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
          <div className='flex flex-col items-center rounded-xl bg-kikara-white shadow-2xl p-4'>
            <Image src={userWoman} alt="" width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて</p>
          </div>
        </div>
      </div>
      <div className='py-24 bg-primary-pink'>
        <div className='max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
          <div className="flex flex-col items-center gap-2 js-show-on-scroll-from-bottom">
            <p className='section_sub'>detail</p>
            <h2>ドリンク教室詳細</h2>
            <div className="w-12 h-0.1 bg-secondary-brown"></div>
          </div>
          <div className='mt-12 py-12 px-2 xl:px-44 bg-kikara-white js-show-on-scroll-from-bottom rounded-xl shadow-2xl'>
            <div className='flex flex-col xl:flex-row gap-8 items-center justify-center xl:justify-between py-8 px-4 xl:p-4 border-b border-gray-300 xl:js-show-on-scroll-from-left'>
              <p className='py-2 px-8 bg-secondary-brown rounded-full text-kikara-white'>講師</p>
              <div className='xl:w-1/2 flex justify-center items-center flex-col xl:items-start'>
                <Image
                  src={profileImage}
                  alt=''
                  width={100}
                  height={100}
                />
                <h2 className='mt-4'>檜皮 園江</h2>
              </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-8 items-center justify-center xl:justify-between py-12 px-4 xl:p-4 border-b border-gray-300 xl:js-show-on-scroll-from-left'>
              <p className='py-2 px-8 bg-secondary-brown inline-block rounded-full text-kikara-white'>場所</p>
              <div className='text-center xl:text-start xl:w-1/2'>
                <p><span className='text-2xl'>Kikara</span>で行っています。</p>
                <p className='mt-2'>※ご予約を頂いた方には詳細な住所をお知らせします</p>
                <p className='mt-4'><span className='text-xl text-secondary-brown-light'>出張教室</span>も承ってます！ </p>
              </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-8 items-center justify-center xl:justify-between py-12 px-4 xl:p-4 border-b border-gray-300 xl:js-show-on-scroll-from-left'>
              <p className='py-2 px-8 bg-secondary-brown inline-block rounded-full text-kikara-white'>持ち物</p>
              <ul className='text-xl xl:w-1/2'>
                <li>包丁</li>
                <li>まな板</li>
                <li>エプロン</li>
                <li>はかり</li>
              </ul>
            </div>
            <div className='flex flex-col xl:flex-row gap-8 items-center justify-center xl:justify-between py-12 px-4 xl:p-4 border-b border-gray-300 xl:js-show-on-scroll-from-left'>
              <p className='py-2 px-8 bg-secondary-brown inline-block rounded-full text-kikara-white'>参加費</p>
              <div className='ml-8 xl:w-1/2'>
                <h4>
                  <span className='text-kikara-chip-red text-2xl xl:text-4xl tracking-normal'>4,000円</span>/1回(税込)
                </h4>
                <p className='mt-2 tracking-normal'>※当日現金払いとなります</p>
                <p className='mt-2 tracking-normal'>※出張教室も同じ参加費です</p>
              </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-8 items-center justify-center xl:justify-between py-12 px-4 xl:p-4 border-b border-gray-300 xl:js-show-on-scroll-from-left'>
              <p className='py-2 px-8 bg-secondary-brown inline-block rounded-full text-kikara-white'>申込方法</p>
              <div className='xl:ml-8 xl:w-1/2'>
                <div className='flex flex-col items-center xl:items-start justify-start'>
                  <p className='text-center xl:text-left'>InstagramもしくはFacebookのダイレクトメッセージにてご連絡ください。</p>
                  <div className="flex flex-col gap-2 justify-start mt-8">
                    <SnsLongBtn snsId="facebook" iconSize={18} />
                    <SnsLongBtn snsId="instagram" iconSize={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-24 md:tracking-wide'>
        <div className="flex flex-col items-center gap-2 js-show-on-scroll-from-bottom">
          <p className='section_sub'>cooking</p>
          <h2>料理教室</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className='relative mt-24 xl:mt-56 h-96 mx-auto flex items-end w-[90%] xl:w-full'>
          <div className='absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col xl:flex-row items-center justify-between z-10 text-center w-full mx-auto xl:w-[1040px] '>
            <div className='text-start js-show-on-scroll-from-left'>
              <h4>ミネラルで作る</h4>
              <h2 className='ml-8 mt-2'>自家製味噌教室</h2>
            </div>
            <Image src={cooking1} alt="" width={700} height={500} className='js-show-on-scroll-from-right' />
          </div>
          <div className='w-full xl:w-1/2 h-32 bg-primary-pink-light js-show-on-scroll-from-left'></div>
        </div>
        <div className='relative mt-24 xl:mt-56 h-96 mx-auto flex items-end justify-end w-[90%] xl:w-full'>
          <div className='absolute right-1/2 translate-x-1/2 w-full bottom-10 flex flex-col-reverse xl:flex-row items-center justify-between z-10 text-center mx-auto xl:w-[1040px] '>
            <Image src={cooking2} alt="" width={700} height={500} className='js-show-on-scroll-from-left' />
            <div className='text-start js-show-on-scroll-from-right'>
              <h4 className='ml-24'>ミネラルたっぷり</h4>
              <h2 className='mt-2'>米粉うどん教室</h2>
            </div>
          </div>
          <div className='w-full xl:w-1/2 h-32 bg-primary-pink-light js-show-on-scroll-from-right'></div>
        </div>
      </div>
      <div className='py-24 text-center max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2 js-show-on-scroll-from-bottom">
          <p className='section_sub'>flow</p>
          <h2>参加までの流れ</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className='flex flex-col xl:flex-row items-center justify-between w-full h-full mt-24 gap-12 xl:gap-0 tracking-normal js-show-on-scroll-from-bottom'>
          <div className='relative w-[70%] xl:w-full flex flex-col items-center justify-center flex-1 gap-12 rounded-3xl px-4 py-12'>
            <Image src={one} alt="" width={60} height={60} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <h3>開催情報</h3>
            <Image src={infoImage} alt="" width={150} height={150} />
            <p className='xl:h-full'>当サイトのNewsまたはInstagram、Facebookをご確認ください。</p>
          </div>
          {!isMobile && <FlowRightArrow />}
          <div className='relative w-[70%] xl:w-full flex flex-col items-center justify-center flex-1 gap-8 rounded-3xl px-4 py-12'>
            <Image src={two} alt="" width={60} height={60} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <h3>お申し込み</h3>
            <Image src={replyImage} alt="" width={150} height={150} />
            <p className='xl:h-full'>Facebook、Instagramからお申し込みいただけます。</p>
          </div>
          {!isMobile && <FlowRightArrow />}
          <div className='relative w-[70%] xl:w-full flex flex-col items-center justify-center flex-1 gap-8 rounded-3xl px-4 py-12'>
            <Image src={three} alt="" width={60} height={60} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <h3>持ち物準備</h3>
            <Image src={preparationImage} alt="" width={150} height={150} />
            <p className='xl:h-full'>ご持参いただきたいものがあります。教室詳細をご確認ください。</p>
          </div>
          {!isMobile && <FlowRightArrow />}
          <div className='relative w-[70%] xl:w-full flex flex-col items-center justify-center flex-1 gap-8 rounded-3xl px-4 py-12'>
            <Image src={four} alt="" width={60} height={60} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <h3>教室に参加</h3>
            <Image src={classImage} alt="" width={150} height={150} />
            <p className='xl:h-full'>Kikaraにて開催しております。アクセスはこちらからご確認ください。</p>
          </div>
        </div>
      </div>
      <OtherServices decoration={false} />
    </div>
  )
}

export default MineralDetail
