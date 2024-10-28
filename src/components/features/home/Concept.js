'use client'

import { motion } from 'framer-motion'
import useAnimation from '@/hooks/useAnimation'
import useMediaQuery from '@/hooks/useMediaQuery'

const ConceptSection = () => {
  const { isMobile } = useMediaQuery()
  const animate = useAnimation()

  return (
    <div className='flex justify-between px-2 py-12 xl:p-[140px]'>
      {!isMobile && (
        <motion.div
          variants={animate.scrollFadeInFromLeft}
          initial={animate.scrollFadeInFromLeft.initial}
          whileInView={animate.scrollFadeInFromLeft.whileInView}
          viewport={animate.scrollFadeInFromLeft.viewport}
          className='hidden xl:block'
        >
          <div className='flex items-center gap-2 [writing-mode:vertical-lr]'>
            <div className='h-16 w-[1px] bg-secondary-brown'></div>
            <p className='text-sm tracking-wide'>Concept</p>
          </div>
        </motion.div>
      )}
      <div className='mx-auto max-w-[90%] text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='flex flex-col items-center gap-2'
        >
          <p className='section_sub'>concept</p>
          <h2>コンセプト</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='mt-12 md:mt-24'
        >
          {isMobile ? (
            <>
              <p className='text-md font-bold'>「そのままの姿で、自然と共に」</p>
              <p className='mx-auto mt-12 text-sm leading-8 tracking-normal md:tracking-wide'>
                Kikaraは、自然の美しさとシンプルな暮らしを大切にする場所です。2004年に静岡で開店し、植物や自然素材の生活雑貨、自然食品を通じて、心地よい自然を感じられる空間を提案しています。ここで本来の自分らしさを見つけるきっかけになればと思っています。
              </p>
            </>
          ) : (
            <>
              <h2 className='font-bold'>「そのままの姿で、自然と共に」</h2>
              <p className='mx-auto mt-12 text-md leading-10 tracking-normal md:tracking-wide'>
                私たちが大切にするのは、ただそこにある自然の美しさや、人が本来の自分らしくいられる場所。
                2004年、静岡の自宅の庭でガーデンショップ「Kikara」をオープンしました。
                木々と共にある暮らしを愛し、シンプルで自然素材にこだわったアイテムを集めています。
                野に咲く小花や育てやすい植物を中心に、自然を感じられる空間を提案。
                麻や綿の生活雑貨、そして心と体に優しい自然食品を通じ、
                シンプルな生活の大切さをお届けできればと思います。 Kikaraは、自然が創り出す心地よさを身近に感じ、
                ありのままの自分を見つけるきっかけになる場所でありたいと考えています。
              </p>
            </>
          )}
        </motion.div>
      </div>
      {!isMobile && (
        <motion.div
          variants={animate.scrollFadeInFromRight}
          initial={animate.scrollFadeInFromRight.initial}
          whileInView={animate.scrollFadeInFromRight.whileInView}
          viewport={animate.scrollFadeInFromRight.viewport}
          className='mt-auto hidden -translate-y-full xl:block'
        >
          <div className='flex items-center gap-2 [writing-mode:vertical-lr]'>
            <div className='h-16 w-[1px] bg-secondary-brown'></div>
            <p className='text-sm tracking-wide'>Concept</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ConceptSection
