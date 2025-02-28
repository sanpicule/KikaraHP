'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import CommonButton from '@/components/features/common/Buttons/CommonButton'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import FeatureCard from '@/components/features/mineral/FeatureCard'
import featureList from '@/data/features.json'
import useAnimation from '@/hooks/useAnimation'
import mineral from '@/public/images/mineral.png'
import throw1 from '@/public/images/throw1.png'
import throw2 from '@/public/images/throw2.png'

const MineralPage = () => {
  const animate = useAnimation()
  return (
    <div>
      <ServicePageHero serviceImage={mineral} serviceTitle={'ミネラル醗酵ドリンク'} />
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.div
          className='flex flex-col items-center gap-2'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <p className='section_sub'>about</p>
          <h2>ミネラル醗酵ドリンクについて</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <motion.div
          className='mt-24 text-center'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <h3>ミネラルとは</h3>
          <p className='mt-8 leading-8 md:leading-10'>
            地球を構成する元素であり、人間が生きていくうえでもっとも大切な「五大栄養素」の一つです。昔は食べ物からミネラル補給ができていました。しかし近年では農業の形が変わり土壌にミネラルが無くなり中身の乏しい野菜が増えました。お腹は一杯でも栄養価が低い「新型栄養失調」と言う表現もありますミネラル不足による問題は子供達の身体と心の成長にも深く関係していると研究発表もされているようです。現代人は圧倒的にミネラルが不足しているのです
          </p>
        </motion.div>
        <motion.div
          className='mt-24 text-center'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
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
        </motion.div>
      </div>
      <div className='bg-primary-pink py-24'>
        <motion.div
          className='flex flex-col items-center gap-2 md:tracking-wide'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <p className='section_sub'>features</p>
          <h2>3つの特徴</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <div className='mx-auto mt-24 max-w-[90%] md:w-[1040px]'>
          <div className='grid grid-rows-1 gap-12'>
            {featureList.map((feature, index) => (
              <FeatureCard key={index} feature={feature.feature} number={feature.number} content={feature.content} />
            ))}
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.h3
          className='font-bold tracking-normal md:text-2xl md:tracking-wide'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          \一緒にドリンク作りませんか？/
        </motion.h3>
        <motion.p
          className='mt-12 leading-8'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          Kikaraではミネラル醗酵ドリンク教室を<br></br>定期的に開催しています！
        </motion.p>
        <div className='mx-auto mt-12 flex max-w-sm grow flex-col gap-4 md:max-w-5xl md:flex-row'>
          <motion.div
            className='w-full'
            variants={animate.scrollFadeInFromLeft}
            initial={animate.scrollFadeInFromLeft.initial}
            whileInView={animate.scrollFadeInFromLeft.whileInView}
            viewport={animate.scrollFadeInFromLeft.viewport}
          >
            <Image
              src={throw1}
              alt='教室の様子１'
              className='rounded-xl shadow-2xl'
              style={{
                objectFit: 'cover',
              }}
            />
          </motion.div>
          <motion.div
            className='w-full'
            variants={animate.scrollFadeInFromRight}
            initial={animate.scrollFadeInFromRight.initial}
            whileInView={animate.scrollFadeInFromRight.whileInView}
            viewport={animate.scrollFadeInFromRight.viewport}
          >
            <Image
              src={throw2}
              alt='教室の様子２'
              className='rounded-xl shadow-2xl'
              style={{
                objectFit: 'cover',
              }}
            />
          </motion.div>
        </div>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='mt-12'
        >
          <CommonButton url={'/mineral/detail'} buttonText={'詳細を確認する'} />
        </motion.div>
      </div>
      <OtherServices />
    </div>
  )
}

export default MineralPage
