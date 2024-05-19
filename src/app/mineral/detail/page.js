'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import SnsLongBtn from '@/components/features/common/Buttons/SnsLongBtn'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import useScrollFadeIn from '@/components/features/home/useScrollFadeIn'
import EmblaCarousel from '@/components/features/mineral/EmblaCarousel'
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
import { default as slideImage1, default as slideImage3 } from '@/public/images/throw1.png'
import { default as slideImage2, default as slideImage4 } from '@/public/images/throw2.png'
import replyImage from '@/public/images/tidyingReply.png'
import userMan from '@/public/images/userMan.png'
import userWoman from '@/public/images/userWoman.png'

const MineralDetail = () => {
  const OPTIONS = { loop: true }
  const SLIDES = [slideImage1, slideImage2, slideImage3, slideImage4]

  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])

  return (
    <div>
      <ServicePageHero serviceImage={mineral} serviceTitle={'ミネラル醗酵ドリンク'} />
      <div className='mx-auto max-w-[90%] py-24 text-center md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>about</p>
          <h2>ミネラル醗酵ドリンクについて</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom mt-24 flex flex-col gap-8 text-center'>
          <p>Kikaraではみなさまと一緒にミネラル醗酵ドリンクの</p>
          <Image src={decoration} alt='' width={500} height={20} className='mx-auto' />
          <p>を学べる教室を開催しています！</p>
          <div className='js-show-on-scroll-from-right'>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] py-24 text-center md:w-[1040px] md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>voice</p>
          <h2>お客様の声</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom mt-12 flex w-[1040px] gap-4'>
          <div className='flex flex-col items-center rounded-xl bg-kikara-white p-4 shadow-2xl'>
            <Image src={userMan} alt='' width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
            </p>
          </div>
          <div className='flex flex-col items-center rounded-xl bg-kikara-white p-4 shadow-2xl'>
            <Image src={userWoman} alt='' width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
            </p>
          </div>
          <div className='flex flex-col items-center rounded-xl bg-kikara-white p-4 shadow-2xl'>
            <Image src={userMan} alt='' width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
            </p>
          </div>
          <div className='flex flex-col items-center rounded-xl bg-kikara-white p-4 shadow-2xl'>
            <Image src={userWoman} alt='' width={60} height={60} />
            <h4 className='mt-4'>ハンドルネーム</h4>
            <p>60代 男性</p>
            <p className='mt-8'>
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
            </p>
          </div>
        </div>
      </div>
      <div className='bg-primary-pink py-24'>
        <div className='mx-auto max-w-[90%] md:w-[1040px] md:tracking-wide'>
          <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
            <p className='section_sub'>detail</p>
            <h2>ドリンク教室詳細</h2>
            <div className='h-0.1 w-12 bg-secondary-brown'></div>
          </div>
          <div className='js-show-on-scroll-from-bottom mt-12 rounded-xl bg-kikara-white px-44 py-12 shadow-2xl'>
            <div className='js-show-on-scroll-from-left flex items-center justify-between border-b border-gray-300 p-4'>
              <p className='rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>講師</p>
              <div className='flex w-1/2 flex-col items-start justify-center'>
                <Image src={profileImage} alt='' width={100} height={100} />
                <h2 className='mt-4'>檜皮 園江</h2>
              </div>
            </div>
            <div className='js-show-on-scroll-from-right flex items-center justify-between border-b border-gray-300 p-4'>
              <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>場所</p>
              <div className='w-1/2'>
                <p>
                  <span className='text-2xl'>Kikara</span>で行っています。
                </p>
                <p className='mt-2'>※ご予約を頂いた方には詳細な住所をお知らせします</p>
                <p className='mt-4'>
                  <span className='text-xl text-secondary-brown-light'>出張教室</span>も承ってます！{' '}
                </p>
              </div>
            </div>
            <div className='js-show-on-scroll-from-left flex items-center justify-between border-b border-gray-300 p-4'>
              <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>持ち物</p>
              <ul className='w-1/2 text-xl'>
                <li>包丁</li>
                <li>まな板</li>
                <li>エプロン</li>
                <li>はかり</li>
              </ul>
            </div>
            <div className='js-show-on-scroll-from-right flex items-center justify-between border-b border-gray-300 p-4'>
              <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>参加費</p>
              <div className='ml-8 w-1/2'>
                <h4>
                  <span className='text-4xl tracking-normal text-kikara-chip-red'>4,000円</span>/1回(税込)
                </h4>
                <p className='mt-2 tracking-normal'>※当日現金払いとなります</p>
                <p className='mt-2 tracking-normal'>※出張教室も同じ参加費です</p>
              </div>
            </div>
            <div className='js-show-on-scroll-from-left flex items-center justify-between border-b border-gray-300 p-4'>
              <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>申込方法</p>
              <div className='ml-8 w-1/2'>
                <div className='flex flex-col items-start justify-start'>
                  <p>InstagramもしくはFacebookのダイレクトメッセージにてご連絡ください。</p>
                  <div className='mt-8 flex flex-col justify-start gap-2'>
                    <SnsLongBtn snsId='facebook' iconSize={18} />
                    <SnsLongBtn snsId='instagram' iconSize={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-24 md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>cooking</p>
          <h2>料理教室</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='relative mt-56 flex h-96 items-end'>
          <div className='absolute bottom-10 left-1/2 z-10 mx-auto flex w-full max-w-[90%] -translate-x-1/2 items-center justify-between text-center md:w-[1040px] '>
            <div className='js-show-on-scroll-from-left text-start'>
              <h4>ミネラルで作る</h4>
              <h2 className='ml-8 mt-2'>自家製味噌教室</h2>
            </div>
            <Image src={cooking1} alt='' width={700} height={500} className='js-show-on-scroll-from-right' />
          </div>
          <div className='js-show-on-scroll-from-left h-32 w-1/2 bg-primary-pink-light'></div>
        </div>
        <div className='relative mt-56 flex h-96 items-end justify-end'>
          <div className='absolute bottom-10 right-1/2 z-10 mx-auto flex w-full max-w-[90%] translate-x-1/2 items-center justify-between text-center md:w-[1040px] '>
            <Image src={cooking2} alt='' width={700} height={500} className='js-show-on-scroll-from-left' />
            <div className='js-show-on-scroll-from-right text-start'>
              <h4 className='ml-24'>ミネラルたっぷり</h4>
              <h2 className='mt-2'>米粉うどん教室</h2>
            </div>
          </div>
          <div className='js-show-on-scroll-from-right h-32 w-1/2 bg-primary-pink-light'></div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] py-24 text-center md:w-[1040px] md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>flow</p>
          <h2>参加までの流れ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='js-show-on-scroll-from-bottom mt-24 flex h-full w-full justify-around tracking-normal'>
          <div className='relative flex flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12'>
            <Image
              src={one}
              alt=''
              width={60}
              height={60}
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
            />
            <h3>開催情報</h3>
            <Image src={infoImage} alt='' width={150} height={150} />
            <p className='h-full'>当サイトのNewsまたはInstagram、Facebookをご確認ください。</p>
          </div>
          <div className='my-auto h-0 w-0 border-b-[30px] border-l-[30px] border-t-[30px] border-solid border-secondary-brown border-b-transparent border-t-transparent' />
          <div className='relative flex flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12'>
            <Image
              src={two}
              alt=''
              width={60}
              height={60}
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
            />
            <h3>お申し込み</h3>
            <Image src={replyImage} alt='' width={150} height={150} />
            <p className='h-full'>Facebook、Instagramからお申し込みいただけます。</p>
          </div>
          <div className='my-auto h-0 w-0 border-b-[30px] border-l-[30px] border-t-[30px] border-solid border-secondary-brown border-b-transparent border-t-transparent' />
          <div className='relative flex flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12'>
            <Image
              src={three}
              alt=''
              width={60}
              height={60}
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
            />
            <h3>持ち物準備</h3>
            <Image src={preparationImage} alt='' width={150} height={150} />
            <p className='h-full'>ご持参いただきたいものがあります。教室詳細をご確認ください。</p>
          </div>
          <div className='my-auto h-0 w-0 border-b-[30px] border-l-[30px] border-t-[30px] border-solid border-secondary-brown border-b-transparent border-t-transparent' />
          <div className='relative flex flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12'>
            <Image
              src={four}
              alt=''
              width={60}
              height={60}
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
            />
            <h3>教室に参加</h3>
            <Image src={classImage} alt='' width={150} height={150} />
            <p className='h-full'>Kikaraにて開催しております。アクセスはこちらからご確認ください。</p>
          </div>
        </div>
      </div>
      <OtherServices decoration={false} />
    </div>
  )
}

export default MineralDetail
