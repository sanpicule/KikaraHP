'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SnsLongBtn from '@/components/features/common/Buttons/SnsLongBtn'
import FlowRightArrow from '@/components/features/common/FlowRightArrow'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import VoiceCard from '@/components/features/common/VoiceCard'
import EmblaCarousel from '@/components/features/mineral/EmblaCarousel'
import voices from '@/data/voiceMineral.json'
import useAnimation from '@/hooks/useAnimation'
import useMediaQuery from '@/hooks/useMediaQuery'
import one from '@/public/images/1.png'
import two from '@/public/images/2.png'
import three from '@/public/images/3.png'
import four from '@/public/images/4.png'
import classImage from '@/public/images/classImage.png'
import cooking1 from '@/public/images/cooking1.png'
import cooking2 from '@/public/images/cooking2.png'
import decoration from '@/public/images/decoration.png'
import infoImage from '@/public/images/infoImage.png'
import mineral from '@/public/images/mineral.png'
import preparationImage from '@/public/images/preparationImage.png'
import profileImage from '@/public/images/profileImage.png'
import slideImage1 from '@/public/images/throw1.png'
import slideImage3 from '@/public/images/throw1.png'
import slideImage2 from '@/public/images/throw2.png'
import slideImage4 from '@/public/images/throw2.png'
import replyImage from '@/public/images/tidyingReply.png'

const MineralDetail = () => {
  const OPTIONS = { loop: true }
  const SLIDES = [slideImage1, slideImage2, slideImage3, slideImage4]
  const { isMobile } = useMediaQuery()

  const animate = useAnimation()

  return (
    <div>
      <motion.div>
        <ServicePageHero
          serviceImage={mineral}
          serviceTitle={'ミネラル醗酵ドリンク'}
          variants={animate.scrollFadeIn}
          initial={animate.scrollFadeIn.initial}
          whileInView={animate.scrollFadeIn.whileInView}
          viewport={animate.scrollFadeIn.viewport}
        />
      </motion.div>
      <div className='mx-auto max-w-[90%] py-12 text-center md:py-24 md:tracking-wide'>
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
          className=' mt-24 flex flex-col gap-8 text-center'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <p>Kikaraではみなさまと一緒にミネラル醗酵ドリンクの</p>
          <Image src={decoration} alt='' width={500} height={20} className='mx-auto' />
          <p>を学べる教室を開催しています！</p>
          <motion.div
            variants={animate.scrollFadeInFromRight}
            initial={animate.scrollFadeInFromRight.initial}
            whileInView={animate.scrollFadeInFromRight.whileInView}
            viewport={animate.scrollFadeInFromRight.viewport}
          >
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </motion.div>
        </motion.div>
      </div>
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.div
          className='flex flex-col items-center gap-2'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <p className='section_sub'>voice</p>
          <h2>お客様の声</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <div className='mx-auto mt-12 grid w-[90%] grid-cols-1 gap-12 md:grid-cols-1 xl:w-[1040px]'>
          {voices.map((voice, i) => (
            <VoiceCard key={i} name={voice.name} info={voice.info} voice={voice.voice} index={i} />
          ))}
        </div>
      </div>
      <div className='bg-primary-pink py-24'>
        <div className='mx-auto max-w-[90%] md:w-[1040px] md:tracking-wide'>
          <motion.div
            className=' flex flex-col items-center gap-2'
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <p className='section_sub'>detail</p>
            <h2>ドリンク教室詳細</h2>
            <div className='h-0.1 w-12 bg-secondary-brown'></div>
          </motion.div>
          <motion.div
            className='mt-12 rounded-xl bg-kikara-white px-2 py-12 shadow-2xl xl:px-44'
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <motion.div className='flex flex-col items-center justify-center gap-8 border-b border-gray-300 px-4 py-8 xl:flex-row xl:justify-between xl:p-4'>
              <p className='rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>講師</p>
              <div className='flex flex-col items-center justify-center xl:w-1/2 xl:items-start'>
                <Image src={profileImage} alt='' width={100} height={100} />
                <h2 className='mt-4'>檜皮 園江</h2>
              </div>
            </motion.div>
            <div className='flex flex-col items-center justify-center gap-8 border-b border-gray-300 px-4 py-12 xl:flex-row xl:justify-between xl:p-4'>
              <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>場所</p>
              <div className='text-center xl:w-1/2 xl:text-start'>
                <p>
                  <span className='text-2xl'>Kikara</span>で行っています。
                </p>
                <p className='mt-2'>※ご予約を頂いた方には詳細な住所をお知らせします</p>
                <p className='mt-4'>
                  <span className='text-xl text-secondary-brown-light'>出張教室</span>も承ってます！{' '}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-8 border-b border-gray-300 px-4 py-12 xl:flex-row xl:justify-between xl:p-4'>
              <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>持ち物</p>
              <ul className='text-xl xl:w-1/2'>
                <li>包丁</li>
                <li>まな板</li>
                <li>エプロン</li>
                <li>はかり</li>
              </ul>
            </div>
            <div className='flex flex-col items-center justify-center gap-8 border-b border-gray-300 px-4 py-12 xl:flex-row xl:justify-between xl:p-4'>
              <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>参加費</p>
              <div className='ml-8 xl:w-1/2'>
                <h4>
                  <span className='text-2xl tracking-normal text-kikara-chip-red xl:text-4xl'>4,000円</span>/1回(税込)
                </h4>
                <p className='mt-2 tracking-normal'>※当日現金払いとなります</p>
                <p className='mt-2 tracking-normal'>※出張教室も同じ参加費です</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-8 border-b border-gray-300 px-4 py-12 xl:flex-row xl:justify-between xl:p-4'>
              <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>申込方法</p>
              <div className='xl:ml-8 xl:w-1/2'>
                <div className='flex flex-col items-center justify-start xl:items-start'>
                  <p className='text-center xl:text-left'>
                    InstagramもしくはFacebookのダイレクトメッセージにてご連絡ください。
                  </p>
                  <div className='mt-8 flex flex-col justify-start gap-2'>
                    <SnsLongBtn snsId='facebook' iconSize={18} />
                    <SnsLongBtn snsId='instagram' iconSize={18} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='py-24 md:tracking-wide'>
        <motion.div
          className='flex flex-col items-center gap-2'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <p className='section_sub'>cooking</p>
          <h2>料理教室</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <div className='relative mx-auto mt-12 flex h-96 w-[90%] items-end md:mt-24 xl:mt-56 xl:w-full'>
          <div className='absolute bottom-8 left-1/2 z-10 mx-auto flex w-full -translate-x-1/2 flex-col items-center justify-between text-center md:-bottom-36 xl:-bottom-8 xl:w-[1040px] xl:flex-row '>
            <motion.div
              className='text-start'
              variants={animate.scrollFadeInFromLeft}
              initial={animate.scrollFadeInFromLeft.initial}
              whileInView={animate.scrollFadeInFromLeft.whileInView}
              viewport={animate.scrollFadeInFromLeft.viewport}
            >
              <h4>ミネラルで作る</h4>
              <h2 className='ml-8 mt-2'>自家製味噌教室</h2>
            </motion.div>
            <motion.div
              variants={animate.scrollFadeInFromRight}
              initial={animate.scrollFadeInFromRight.initial}
              whileInView={animate.scrollFadeInFromRight.whileInView}
              viewport={animate.scrollFadeInFromRight.viewport}
            >
              <Image src={cooking1} alt='' width={700} height={500} />
            </motion.div>
          </div>
          <motion.div
            className='h-32 w-full bg-primary-pink-light xl:w-1/2'
            variants={animate.scrollFadeInFromLeft}
            initial={animate.scrollFadeInFromLeft.initial}
            whileInView={animate.scrollFadeInFromLeft.whileInView}
            viewport={animate.scrollFadeInFromLeft.viewport}
          ></motion.div>
        </div>
        <div className='relative mx-auto mt-12 flex h-96 w-[90%] items-end justify-end md:mt-24 xl:mt-56 xl:w-full'>
          <div className='absolute bottom-8 right-1/2 z-10 mx-auto flex w-full translate-x-1/2 flex-col-reverse items-center justify-between text-center md:-bottom-48 xl:-bottom-8 xl:w-[1040px] xl:flex-row'>
            <motion.div
              variants={animate.scrollFadeInFromLeft}
              initial={animate.scrollFadeInFromLeft.initial}
              whileInView={animate.scrollFadeInFromLeft.whileInView}
              viewport={animate.scrollFadeInFromLeft.viewport}
            >
              <Image src={cooking2} alt='' width={700} height={500} />
            </motion.div>
            <motion.div
              className='text-start'
              variants={animate.scrollFadeInFromRight}
              initial={animate.scrollFadeInFromRight.initial}
              whileInView={animate.scrollFadeInFromRight.whileInView}
              viewport={animate.scrollFadeInFromRight.viewport}
            >
              <h4 className='ml-24'>ミネラルたっぷり</h4>
              <h2 className='mt-2'>米粉うどん教室</h2>
            </motion.div>
          </div>
          <motion.div
            className=' h-32 w-full bg-primary-pink-light xl:w-1/2'
            variants={animate.scrollFadeInFromRight}
            initial={animate.scrollFadeInFromRight.initial}
            whileInView={animate.scrollFadeInFromRight.whileInView}
            viewport={animate.scrollFadeInFromRight.viewport}
          ></motion.div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <motion.div
          className=' flex flex-col items-center gap-2'
          variants={animate.scrollFadeInFromBottom}
          initial={animate.scrollFadeInFromBottom.initial}
          whileInView={animate.scrollFadeInFromBottom.whileInView}
          viewport={animate.scrollFadeInFromBottom.viewport}
        >
          <p className='section_sub'>flow</p>
          <h2>参加までの流れ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </motion.div>
        <div className='mt-24 flex h-full w-full flex-col items-center justify-between gap-12 tracking-normal xl:flex-row xl:gap-0'>
          <motion.div
            className=' relative flex h-[450px] w-[90%] flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12 xl:w-full'
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <Image
              src={one}
              alt=''
              width={60}
              height={60}
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
            />
            <h3>開催情報</h3>
            <Image src={infoImage} alt='' width={150} height={150} />
            <p className='xl:h-full'>当サイトのNewsまたはInstagram、Facebookをご確認ください。</p>
          </motion.div>
          {!isMobile && <FlowRightArrow />}
          <motion.div
            className='relative flex h-[450px] w-[90%] flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12 xl:w-full'
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <Image
              src={two}
              alt=''
              width={60}
              height={60}
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
            />
            <h3>お申し込み</h3>
            <Image src={replyImage} alt='' width={150} height={150} />
            <p className='xl:h-full'>Facebook、Instagramからお申し込みいただけます。</p>
          </motion.div>
          {!isMobile && <FlowRightArrow />}
          <motion.div
            className='relative flex h-[450px] w-[90%] flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12 xl:w-full'
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <Image
              src={three}
              alt=''
              width={60}
              height={60}
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
            />
            <h3>持ち物準備</h3>
            <Image src={preparationImage} alt='' width={150} height={150} />
            <p className='xl:h-full'>ご持参いただきたいものがあります。教室詳細をご確認ください。</p>
          </motion.div>
          {!isMobile && <FlowRightArrow />}
          <motion.div
            className=' relative flex h-[450px] w-[90%] flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12 xl:w-full'
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <Image
              src={four}
              alt=''
              width={60}
              height={60}
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
            />
            <h3>教室に参加</h3>
            <Image src={classImage} alt='' width={150} height={150} />
            <p className='xl:h-full'>Kikaraにて開催しております。アクセスはこちらからご確認ください。</p>
          </motion.div>
        </div>
      </div>
      <OtherServices decoration={false} />
    </div>
  )
}

export default MineralDetail
