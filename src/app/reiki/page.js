'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import OtherServices from '@/components/features/common/OtherServices'
import ServicePageHero from '@/components/features/common/ServicePageHero'
import useScrollFadeIn from '@/components/features/home/useScrollFadeIn'
import favoImage from '@/public/images/favo.png'
import reikiAboutImage from '@/public/images/reikiAbout.png'
import reikiDetailImageLeft from '@/public/images/reikiDetailLeft.png'
import reikiDetailImageRight from '@/public/images/reikiDetailRight.png'
import reikiHero from '@/public/images/reikiHero.png'
import targetFourImage from '@/public/images/reikiTargetFour.png'
import targetOneImage from '@/public/images/reikiTargetOne.png'
import targetThreeImage from '@/public/images/reikiTargetThree.png'
import targetTwoImage from '@/public/images/reikiTargetTwo.png'

const ReikiPage = () => {
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])

  return (
    <div>
      <ServicePageHero serviceImage={reikiHero} serviceTitle={'直傳靈氣について'} />
      <div className='mx-auto max-w-[90%] py-12 text-center md:w-[1040px] md:py-24 md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>about</p>
          <h2>直傳靈氣について</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mt-24 text-center'>
          <h3 className='js-show-on-scroll-from-bottom'>直傳靈氣とは</h3>
          <p className='js-show-on-scroll-from-bottom mt-8 leading-8 md:leading-10'>
            正式名称は「心身改善臼井靈氣療法」で、1922年大正11年臼井甕男により開発された手当による癒しの技術です。日本古来100年以上つづく自然療法であり家庭療法として知られています。靈氣は、心身改善を目的に天からのエネルギーを私の身体を通し貴方へ流していきます。人間がもつ自然治癒力と免疫力を整え不調を治療していきます。
          </p>
          <a
            href='https://www.jikiden-reiki.com/'
            target='_blank'
            className='js-show-on-scroll-from-bottom border-b border-blue-500 text-blue-500 transition duration-300 hover:opacity-50'
          >
            直傳靈氣公式
          </a>
        </div>
        <div className='js-show-on-scroll-from-bottom mt-24 text-center'>
          <h3 className='js-show-on-scroll-from-bottom'>直傳靈氣の良さとは？</h3>
          <p className='js-show-on-scroll-from-bottom mt-8 leading-8 md:leading-10'>
            靈氣は、小さなお子様や妊婦の方・高齢者にも安心して受けて頂けます。また、未病を病線から発見できるので、改善が早いという利点もあります。
          </p>
          <div className='js-show-on-scroll-from-bottom mt-4'>
            <Image
              src={reikiAboutImage}
              alt='hero_image'
              className='w-full rounded-xl shadow-2xl'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
      <div className='w-full bg-primary-pink py-24 text-center md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>target</p>
          <h2>このような方へ</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mx-auto mt-12 grid w-[90%] grid-cols-1 gap-4 md:w-[1040px] md:grid-cols-2 md:gap-12'>
          <div className='js-show-on-scroll-from-left flex items-center justify-center gap-8 rounded-xl bg-kikara-white py-8 shadow-xl'>
            <Image src={targetOneImage} alt='このような方へ1' width={50} height={50} />
            <p className='text-start'>
              日常の生活からリラックスし<br></br>深い癒しを求めている
            </p>
          </div>
          <div className='js-show-on-scroll-from-left flex items-center justify-center gap-8 rounded-xl bg-kikara-white py-8 shadow-xl'>
            <Image src={targetThreeImage} alt='このような方へ1' width={50} height={50} />
            <p className='text-start'>
              日常の生活からリラックスし<br></br>深い癒しを求めている
            </p>
          </div>
          <div className='js-show-on-scroll-from-right flex items-center justify-center gap-8 rounded-xl bg-kikara-white py-8 shadow-xl'>
            <Image src={targetTwoImage} alt='このような方へ1' width={50} height={50} />
            <p className='text-start'>
              日常の生活からリラックスし<br></br>深い癒しを求めている
            </p>
          </div>
          <div className='js-show-on-scroll-from-right flex items-center justify-center gap-8 rounded-xl bg-kikara-white py-8 shadow-xl'>
            <Image src={targetFourImage} alt='このような方へ1' width={50} height={50} />
            <p className='text-start'>
              日常の生活からリラックスし<br></br>深い癒しを求めている
            </p>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[90%] py-12 md:w-[1040px] md:py-24 md:tracking-wide'>
        <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
          <p className='section_sub'>detail</p>
          <h2>施術詳細</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='mt-12'>
          <div className='js-show-on-scroll-from-bottom flex justify-center'>
            <p className='inline-block rounded-full bg-secondary-brown-light px-8 py-2 text-kikara-white'>メニュー</p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-12 md:grid-cols-2'>
            <div className='js-show-on-scroll-from-bottom relative rounded-xl border-2 border-secondary-brown p-8'>
              <Image src={favoImage} alt='' width={100} height={70} className='absolute right-8 top-8' />
              <h3>通常施術</h3>
              <div className='mt-8'>
                <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>料金</p>
                <div className='ml-8 flex flex-col gap-4'>
                  <h4 className='mt-2'>
                    <span className='text-4xl tracking-normal text-secondary-brown-light'>3,000円</span>/60分(税込)
                  </h4>
                  <p>お申込みフォームに第一希望、第二希望をお書き下さい</p>
                  <p>①10時～ ②13時～ ③15時～</p>
                  <p>※当日現金払い</p>
                </div>
              </div>
            </div>
            <div className='js-show-on-scroll-from-bottom rounded-xl border-2 border-secondary-brown p-8'>
              <h3>遠隔施術</h3>
              <div className='mt-8'>
                <div>
                  <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>料金</p>
                  <div className='ml-8 flex flex-col gap-4'>
                    <h4>
                      <span className='text-4xl tracking-normal text-secondary-brown-light'>8,000円</span>/3夜連続(税込)
                    </h4>
                    <p className='tracking-normal'>片付けをご自身でできるようになりたい方向け</p>
                    <p className='tracking-normal'>※ 定期的にお伺いし、片付けのサポートをさせていただきます</p>
                  </div>
                </div>
                <div className='mt-8'>
                  <p className='inline-block rounded-full bg-secondary-brown px-8 py-2 text-kikara-white'>内容</p>
                  <div className='ml-8 mt-4 flex flex-col gap-4'>
                    <p className='tracking-normal'>1日目: お話しと施術</p>
                    <p className='tracking-normal'>2日目: 施術</p>
                    <p className='tracking-normal'>3日目: 施術とお伝え</p>
                  </div>
                </div>
                <p className='mt-4'>※前納で入金確認後</p>
                <p>※遠隔は夜のみ（21時～）</p>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <div className='js-show-on-scroll-from-bottom flex justify-center'>
              <p className='inline-block rounded-full bg-secondary-brown-light px-8 py-2 text-kikara-white'>場所</p>
            </div>
            <div className='js-show-on-scroll-from-bottom text-center'>
              <h4 className='mt-12'>
                Kikaraで行っています。<br></br>熊本市東区／県立大学近く
              </h4>
              <p className='mt-4'>※ご予約を頂いた方には詳細な住所をお知らせします</p>
            </div>
          </div>
          <div className='mx-auto mt-12 flex max-w-sm grow flex-col gap-4 md:max-w-5xl md:flex-row'>
            <div className='js-show-on-scroll-from-bottom w-full'>
              <Image
                src={reikiDetailImageLeft}
                alt=''
                className='rounded-xl shadow-2xl'
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='js-show-on-scroll-from-bottom w-full'>
              <Image
                src={reikiDetailImageRight}
                alt=''
                className='rounded-xl shadow-2xl'
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className='js-show-on-scroll-from-bottom mt-12 text-center'>
            <a
              href='https://totonou-kikara.com/index.php?Form'
              target='_blank'
              className='group relative mt-12 inline-block border bg-secondary-brown-light px-24 py-4 text-kikara-white no-underline outline-none transition-all duration-300 hover:bg-secondary-brown'
            >
              予約はこちらから
              <span className='absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[129%] group-hover:w-[104.5%] group-hover:border-secondary-brown'></span>
              <span className='absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[129%] group-hover:w-[104.5%] group-hover:border-secondary-brown'></span>
            </a>
          </div>
        </div>
      </div>
      <OtherServices />
    </div>
  )
}

export default ReikiPage
