'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import useScrollFadeIn from '@/components/features/home/useScrollFadeIn'
import FeatureCard from '@/components/features/mineral/FeatureCard'
import featureList from '@/data/features.json'
import mineral from '@/public/images/mineral.png'
import throw1 from '@/public/images/throw1.png'
import throw2 from '@/public/images/throw2.png'

const MineralPage = () => {
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])
  return (
    <div className='animate-fadeIn'>
      <ServicePageHero serviceImage={mineral} serviceTitle={'ミネラル醗酵ドリンク'} />
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>about</p>
          <h2>ミネラル醗酵ドリンクについて</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom mt-24 text-center'>
          <h3>ミネラルとは</h3>
          <p className='mt-8 leading-8 md:leading-10'>
            地球を構成する元素であり、人間が生きていくうえでもっとも大切な「五大栄養素」の一つです。昔は食べ物からミネラル補給ができていました。しかし近年では農業の形が変わり土壌にミネラルが無くなり中身の乏しい野菜が増えました。お腹は一杯でも栄養価が低い「新型栄養失調」と言う表現もありますミネラル不足による問題は子供達の身体と心の成長にも深く関係していると研究発表もされているようです。現代人は圧倒的にミネラルが不足しているのです
          </p>
        </div>
        <div className='js-show-on-scroll-from-bottom mt-24 text-center'>
          <h3>ミネラル醗酵ドリンクとは</h3>
          <p className='mt-8 leading-8 md:leading-10'>
            ミネラル醗酵ドリンクは、ミネラルを豊富に含んだミネラル水と旬の果物やお野菜を使い、醗酵させた飲み物のことを言います。原材料の野菜や果物に含まれるビタミンや食物繊維のほか、熟成によって生成され様々な栄養素がプラスされます。ミネラルドリンクを摂取することで日々不足したミネラルを摂取できます。
          </p>
          <div className='mt-4'>
            <Image
              src={mineral}
              alt='hero_image'
              className='w-full rounded-xl shadow-2xl'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
      <div className='bg-primary-pink py-24'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2 md:tracking-wide'>
          <p className='section_sub'>features</p>
          <h2>3つの特徴</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mx-auto mt-24 max-w-[90%] md:w-[1040px]'>
          <div className='grid grid-rows-1 gap-12'>
            {featureList.map((feature, index) => (
              <FeatureCard key={index} feature={feature.feature} number={feature.number} content={feature.content} />
            ))}
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <h3 className='js-show-on-scroll-from-bottom font-bold tracking-normal md:text-2xl md:tracking-wide'>
          \一緒にドリンク作りませんか？/
        </h3>
        <p className='js-show-on-scroll-from-bottom mt-12 leading-8'>
          Kikaraではミネラル醗酵ドリンク教室を<br></br>定期的に開催しています！
        </p>
        <div className='mx-auto mt-12 flex max-w-sm grow flex-col gap-4 md:max-w-5xl md:flex-row'>
          <div className='js-show-on-scroll-from-left w-full'>
            <Image
              src={throw1}
              alt='教室の様子１'
              className='rounded-xl shadow-2xl'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className='js-show-on-scroll-from-right w-full'>
            <Image
              src={throw2}
              alt='教室の様子２'
              className='rounded-xl shadow-2xl'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <Link
          href={'/mineral/detail'}
          className='js-show-on-scroll-from-bottom group relative mt-12 inline-block border bg-secondary-brown-light px-24 py-4 text-kikara-white no-underline outline-none transition-all duration-300 hover:bg-secondary-brown'
        >
          詳細を確認する
          <span className='absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[129%] group-hover:w-[104.5%] group-hover:border-secondary-brown'></span>
          <span className='absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[129%] group-hover:w-[104.5%] group-hover:border-secondary-brown'></span>
        </Link>
      </div>
      <OtherServices />
    </div>
  )
}

export default MineralPage
