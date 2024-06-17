'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import FlowRightArrow from '@/components/features/common/FlowRightArrow'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import useScrollFadeIn from '@/components/features/home/useScrollFadeIn'
import preparationList from '@/data/tidyingPreparationList.json'
import useMediaQuery from '@/hooks/useMediaQuery'
import one from '@/public/images/1.png'
import two from '@/public/images/2.png'
import three from '@/public/images/3.png'
import favoImage from '@/public/images/favo.png'
import afterImage from '@/public/images/tidyingAfter.png'
import tidyingApplication from '@/public/images/tidyingApplication.png'
import arrowImage from '@/public/images/tidyingArrow.png'
import beforeImage from '@/public/images/tidyingBefore.png'
import tidyingDo from '@/public/images/tidyingDo.png'
import tidyingHeroImage from '@/public/images/tidyingHero.png'
import tidyingReply from '@/public/images/tidyingReply.png'

const TidyingDetail = () => {
  const { isTab } = useMediaQuery()
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])
  return (
    <div>
      <ServicePageHero serviceImage={tidyingHeroImage} serviceTitle={'片付け・お手伝いについて'} />
      <div className='mx-auto max-w-[90%] py-24 md:w-[1040px] md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>detail</p>
          <h2>片付け・お手伝い</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mt-12'>
          <div className='pb-12'>
            <div className='js-show-on-scroll-from-bottom flex justify-center'>
              <p className='inline-block rounded-full bg-secondary-brown-light px-8 py-2 text-kikara-white'>メニュー</p>
            </div>
            <div className='mt-12 grid grid-cols-1 gap-12 xl:grid-cols-2'>
              <div className='js-show-on-scroll-from-bottom relative rounded-xl border-2 border-secondary-brown p-8'>
                <Image src={favoImage} alt='' width={100} height={70} className='absolute right-8 top-8' />
                <h3>単発利用</h3>
                <div className='mt-8'>
                  <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>料金</p>
                  <div className='ml-8 flex flex-col gap-4'>
                    <h4 className='mt-2'>
                      <span className='text-3xl tracking-normal text-secondary-brown-light xl:text-4xl'>15,000円</span>
                      /180分
                      <br></br>(出張費・税込)
                    </h4>
                    <p className='tracking-normal'>※３時間の範囲でしたら、２ヶ所でも可能です</p>
                    <p className='tracking-normal'>※1日で終わらない場合</p>
                    <p className='ml-4 tracking-normal'>
                      <span className='text-secondary-brown-light'>6,000円</span>/120分（延長料金／1時間3,000円）
                    </p>
                  </div>
                </div>
              </div>
              <div className='js-show-on-scroll-from-bottom rounded-xl border-2 border-secondary-brown p-8'>
                <h3>長期利用</h3>
                <div className='mt-8'>
                  <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>料金</p>
                  <div className='ml-8 flex flex-col gap-4'>
                    <h4>
                      <span className='text-3xl tracking-normal text-secondary-brown-light xl:text-4xl'>8,000円</span>
                      /90分<br></br>
                      (出張費・税込)
                    </h4>
                    <p className='tracking-normal'>片付けをご自身でできるようになりたい方向け</p>
                    <p className='tracking-normal'>※ 定期的にお伺いし、片付けのサポートをさせていただきます</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <div className='js-show-on-scroll-from-bottom flex justify-center'>
              <p className='inline-block rounded-full bg-secondary-brown-light px-8 py-2 text-kikara-white'>
                準備していただくもの
              </p>
            </div>
            <div className='js-show-on-scroll-from-bottom mt-12 pl-8'>
              <ul className='flex flex-col gap-2 text-xl'>
                {preparationList.map((preparation, index) => (
                  <li key={index}>
                    <p>{`・${preparation.listItem}`}</p>
                  </li>
                ))}
              </ul>
              <p className='mt-4 font-bold'>
                ※以下は、ストックがある際に準備してください。カスタマイズの際、重宝します
              </p>
              <ul className='mt-4 flex flex-col gap-2 text-xl'>
                <li>
                  <p>・綺麗な紙袋（大・中・小）</p>
                </li>
                <li>
                  <p>・収納に使えそうな缶（大・中・小）</p>
                </li>
                <li>
                  <p>・収納ケース（プラスチックや布地）</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-12'>
            <div className='js-show-on-scroll-from-bottom flex justify-center'>
              <p className='inline-block rounded-full bg-kikara-chip-red px-8 py-2 text-kikara-white'>注意事項</p>
            </div>
            <div className='js-show-on-scroll-from-bottom mt-12 px-2 xl:pl-8'>
              <ul className='mt-4 flex flex-col gap-2 text-xl'>
                <li>
                  <p>1. 片付けお手伝いでお伺いするエリアは現時点で、熊本市東区から約60分圏内</p>
                </li>
                <li>
                  <p>2. 片付けお手伝いの目的は掃除でなく整理整頓、片付け、カスタマイズです</p>
                </li>
                <li>
                  <p>3. 大きな家具の移動やゴミの回収はいたしません</p>
                </li>
                <li>
                  <p>4. 片付けする場所は簡単で良いですのでお掃除しておいて下さい（特に、キッチンの際）</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-12'>
            <div className='js-show-on-scroll-from-bottom flex justify-center'>
              <p className='inline-block rounded-full bg-secondary-brown-light px-8 py-2 text-kikara-white'>
                片付け手伝い例
              </p>
            </div>
            <div className='mt-12 flex flex-col items-center justify-between gap-12 md:flex-row xl:gap-2'>
              <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-4'>
                <p>Before</p>
                <Image
                  src={beforeImage}
                  alt='片付け・お手伝い実施前の写真'
                  className='rounded-xl shadow-2xl'
                  width={450}
                  height={700}
                />
              </div>
              <div className='js-show-on-scroll-from-bottom'>
                <Image src={arrowImage} alt='矢印' width={70} height={30} className='rotate-90 md:rotate-0' />
              </div>
              <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-4'>
                <p>After</p>
                <Image
                  src={afterImage}
                  alt='片付け・お手伝い実施後の写真'
                  className='rounded-xl shadow-2xl'
                  width={450}
                  height={700}
                />
              </div>
            </div>
          </div>
          <div className='mx-auto max-w-[90%] py-24 text-center md:w-[1040px] md:tracking-wide'>
            <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
              <p className='section_sub'>flow</p>
              <h2>片付けまでの流れ</h2>
              <div className='h-0.1 w-12 bg-secondary-brown'></div>
            </div>
            <div className='mt-12 flex h-full flex-col items-center justify-center gap-4'>
              <div className='mt-24 flex h-full w-full flex-col justify-around gap-12 tracking-normal md:flex-row xl:gap-0'>
                <div className='js-show-on-scroll-from-bottom relative mx-auto flex w-[90%] flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12'>
                  <Image
                    src={one}
                    alt=''
                    width={60}
                    height={60}
                    className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
                  />
                  <h3>申込</h3>
                  <Image src={tidyingApplication} alt='' width={150} height={150} />
                  <p className='h-full'>当サイトのNewsまたはInstagram、Facebookをご確認ください。</p>
                </div>
                {!isTab && <FlowRightArrow />}
                <div className='js-show-on-scroll-from-bottom relative mx-auto flex w-[90%] flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12'>
                  <Image
                    src={two}
                    alt=''
                    width={60}
                    height={60}
                    className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
                  />
                  <h3>返信</h3>
                  <Image src={tidyingReply} alt='' width={150} height={150} />
                  <p className='h-full'>
                    下記の<span className='text-kikara-chip-red'>「予約はこちら」</span>からお申し込みいただけます。
                  </p>
                </div>
                {!isTab && <FlowRightArrow />}
                <div className='js-show-on-scroll-from-bottom relative mx-auto flex w-[90%] flex-1 flex-col items-center justify-center gap-8 rounded-3xl px-4 py-12'>
                  <Image
                    src={three}
                    alt=''
                    width={60}
                    height={60}
                    className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
                  />
                  <h3>片付け</h3>
                  <Image src={tidyingDo} alt='' width={150} height={150} />
                  <p className='h-full'>ご持参いただきたいものがあります。教室詳細をご確認ください。</p>
                </div>
              </div>
            </div>
          </div>
          <div className='js-show-on-scroll-from-bottom text-center'>
            <a
              href='https://totonou-kikara.com/index.php?Form'
              target='_blank'
              className='group relative mx-auto inline-block w-full border bg-secondary-brown-light py-4 text-kikara-white no-underline outline-none transition-all duration-300 hover:bg-secondary-brown md:w-1/3'
            >
              <p>予約はこちらから</p>
              <span className='absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[129%] group-hover:w-[105%] group-hover:border-secondary-brown'></span>
              <span className='absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[128%] group-hover:w-[105%] group-hover:border-secondary-brown'></span>
            </a>
          </div>
        </div>
      </div>
      <OtherServices></OtherServices>
    </div>
  )
}

export default TidyingDetail
