'use client'

import { motion } from 'framer-motion'
import CommonButton from '@/components/features/common/Buttons/CommonButton'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import VoiceCard from '@/components/features/common/VoiceCard'
import voices from '@/data/voiceTidying.json'
import useAnimation from '@/hooks/useAnimation'
import tidyingHeroImage from '@/public/images/tidyingHero.png'

const TidyingPage = () => {
  const animate = useAnimation()

  return (
    <div>
      <motion.div
        variants={animate.scrollFadeIn}
        initial={animate.scrollFadeIn.initial}
        whileInView={animate.scrollFadeIn.whileInView}
        viewport={animate.scrollFadeIn.viewport}
      >
        <ServicePageHero serviceImage={tidyingHeroImage} serviceTitle={'片付け・お手伝い'} />
      </motion.div>
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='flex flex-col items-center gap-2'
        >
          <p className='section_sub'>about</p>
          <h2>片付け・お手伝いとは</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='mt-24 text-center'
        >
          <p className='mt-8 leading-8 md:leading-10'>
            本来、家の役目は心安らかに寛げることで一日の疲れをリセットし活力をも補えることにあると思います。自分設計の家を２回建てたこと引っ越し10回以上の経験、ミニマリスト生活実践中である私の元へ多くの依頼を頂きましたのでこの度、出張片付けのお手伝いを併用する運びとなりました。
          </p>
        </motion.div>
      </div>
      <div className='w-full bg-primary-pink py-24 text-center md:tracking-wide'>
        <motion.div
          className='flex flex-col items-center gap-2'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <p className='section_sub'>target</p>
          <h2>このような方へ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <div className='mx-auto mt-12 flex w-[90%] flex-col items-center gap-4 xl:w-[1040px] xl:items-start xl:gap-12'>
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
            className='flex w-full items-center gap-4 rounded-2xl bg-kikara-white p-4 shadow-md md:px-12 md:py-8 xl:w-fit'
          >
            <h2 className='text-md md:text-2xl'>01</h2>
            <h4 className='text-start text-sm md:text-md'>
              ごちゃごちゃした部屋を見て<br></br>疲れが酷くなっていると感じる
            </h4>
          </motion.div>
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
            className='flex w-full items-center gap-4 rounded-2xl bg-kikara-white p-4 shadow-md md:px-12 md:py-8 xl:mx-auto xl:w-fit'
          >
            <h2 className='text-md md:text-2xl'>02</h2>
            <h4 className='text-start text-sm md:text-md'>
              人を呼びたいけれど<br></br>呼べるような状態ではない
            </h4>
          </motion.div>
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
            className='flex w-full items-center gap-4 rounded-2xl bg-kikara-white p-4 shadow-md md:px-12 md:py-8 xl:ml-auto xl:w-fit'
          >
            <h2 className='text-md md:text-2xl'>03</h2>
            <h4 className='text-start text-sm md:text-md'>
              片付けたいけれど、どこから<br></br>手をつけていいかわからない
            </h4>
          </motion.div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.div
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
          className='flex flex-col items-center gap-2'
        >
          <p className='section_sub'>voice</p>
          <h2>お客様の声</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <div className='mx-auto mt-12 grid gap-6 md:w-[90%] md:grid-cols-2 xl:w-[1040px]'>
          {voices.map((voice, i) => (
            <VoiceCard key={i} voice={voice} />
          ))}
        </div>
        <motion.div
          className='m-auto mt-12'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <CommonButton url={'/tidying/detail'} buttonText={'詳細を確認する'} />
        </motion.div>
      </div>
      <OtherServices decoration={false} />
    </div>
  )
}

export default TidyingPage
