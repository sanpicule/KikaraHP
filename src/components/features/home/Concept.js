'use client'

import { motion } from 'framer-motion'
import useAnimation from '@/hooks/useAnimation'
import useMediaQuery from '@/hooks/useMediaQuery'

const ConceptSection = () => {
  const { isMobile } = useMediaQuery()
  const animate = useAnimation()

  return (
    <div className='flex justify-center px-2 py-12 xl:justify-between xl:p-[140px]'>
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
      <div className='max-w-[90%] text-center md:w-[1040px] md:py-24 md:tracking-wide'>
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
          className='pt-10'
        >
          <p className='mx-auto w-full text-sm leading-10 tracking-normal md:tracking-wide lg:text-xl'>
            kikaraとは...<br></br>そのままの姿でその者らしくただソコニイル<br></br>木が好きだった。<br></br>
            シンプルな物、自然素材な物を集めた<br></br>木からはじまった私を表現する場所<br></br>
            2004年自宅の庭でガーデンショップkikara<br></br>を静岡にオープン。<br></br>
            野に咲く小花や育て易い植物を集めて自然のある暮らしを提案。<br></br>生活雑貨も麻や綿素材を中心に揃え<br></br>
            最終目的の自然食品の販売へと繋げる。<br></br>食べ物で身体と精神は創られていく。<br></br>
            一番シンプルな事を見つけるきっかけになれたら
          </p>
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
