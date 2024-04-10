import Image from 'next/image'
import React from 'react'
import mineral from '@/public/images/mineral.png'
import throw1 from '@/public/images/throw1.png'
import throw2 from '@/public/images/throw2.png'
import FeatureCard from '@/components/features/mineral/FeatureCard'
import featureList from '@/data/features.json'
import Link from 'next/link'
import OtherServices from '@/components/features/common/OtherServices'

const MineralPage = () => {
  return (
    <>
      <div className='py-24 text-center max-w-[90%] mx-auto md:max-w-5xl md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">concept</p>
          <h2 className="text-2xl md:text-3xl">ミネラル酵素ドリンクについて</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className="mt-24 text-center">
          <h3 className='text-2xl'>ミネラルとは</h3>
          <p className='mt-8 leading-8 md:leading-10'>地球を構成する元素であり、人間が生きていくうえでもっとも大切な「五大栄養素」の一つです。昔は食べ物からミネラル補給ができていました。しかし近年では農業の形が変わり土壌にミネラルが無くなり中身の乏しい野菜が増えました。お腹は一杯でも栄養価が低い「新型栄養失調」と言う表現もありますミネラル不足による問題は子供達の身体と心の成長にも深く関係していると研究発表もされているようです。現代人は圧倒的にミネラルが不足しているのです</p>
        </div>
        <div className="mt-24 text-center">
          <h3 className='text-2xl'>ミネラル発酵ドリンクとは</h3>
          <p className='mt-8 leading-8 md:leading-10'>ミネラル酵素ドリンクは、ミネラルを豊富に含んだミネラル水と旬の果物やお野菜を使い、発酵させた飲み物のことを言います。原材料の野菜や果物に含まれるビタミンや食物繊維のほか、熟成によって生成され様々な栄養素がプラスされます。ミネラルドリンクを摂取することで日々不足したミネラルを摂取できます。</p>
          <div className='mt-4'>
            <Image
              src={mineral}
              alt="hero_image"
              className="w-full"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
      <div className='py-24 bg-sub-color'>
        <div className="flex flex-col items-center gap-2 md:tracking-wide">
          <p className="text-sm">features</p>
          <h2 className="text-2xl tracking-wide md:text-3xl">3つの特徴</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className="mt-24 max-w-[90%] md:max-w-5xl mx-auto">
          <div className='flex flex-col gap-8 grow md:flex-row'>
            {featureList.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature.feature}
                number={feature.number}
                content={feature.content}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='py-24 text-center max-w-[90%] mx-auto md:max-w-5xl md:tracking-wide'>
        <h3 className='text-xl font-bold md:text-3xl'>\一緒にドリンク作りませんか？/</h3>
        <p className='mt-12 leading-8 md:leading-8'>Kikaraではミネラル酵素ドリンク教室を<br></br>定期的に開催しています！</p>
        <div className='mx-auto mt-12 flex flex-col gap-4 grow md:flex-row max-w-sm md:max-w-5xl'>
          <div className='w-full'>
            <Image
              src={throw1}
              alt="教室の様子１"
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <div className='w-full'>
            <Image
              src={throw2}
              alt="教室の様子１"
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        <Link href={'/mineral/detail'}>
          <button className="mt-12 border py-4 px-24 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-accent-color group hover:shadow-xl">
            <span className="w-0 h-0 bg-main-color absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-main-color transition-colors duration-300 ease-in-out group-hover:text-text-color z-10">
                <p className="tracking-wide">詳細を確認</p>
            </span>
          </button>
        </Link>
      </div>
      <OtherServices />
    </>
  )
}

export default MineralPage
