import Image from 'next/image'
import React from 'react'

import NewsSection from '@/components/features/common/News'
import ServicePageHero from '@/components/features/common/ServicePageHero'

import reikiHero from '@/public/images/reikiHero.png'
import reikiAboutImage from '@/public/images/reikiAbout.png'
import targetOneImage from '@/public/images/reikiTargetOne.png'
import targetTwoImage from '@/public/images/reikiTargetTwo.png'
import targetThreeImage from '@/public/images/reikiTargetThree.png'
import targetFourImage from '@/public/images/reikiTargetFour.png'
import reikiDetailImageLeft from '@/public/images/reikiDetailLeft.png'
import reikiDetailImageRight from '@/public/images/reikiDetailRight.png'
import OtherServices from '@/components/features/common/OtherServices'
import favoImage from '@/public/images/favo.png'


const ReikiPage = () => {
  return (
    <div>
      <ServicePageHero serviceImage={reikiHero} serviceTitle={'直傳靈氣について'} />
      <NewsSection decoration={false} />
      <div className='py-24 text-center max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>about</p>
          <h2>直傳靈氣について</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className="mt-24 text-center">
          <h3>直傳靈氣とは</h3>
          <p className='mt-8 leading-8 md:leading-10'>
            正式名称は「心身改善臼井靈氣療法」で、1922年大正11年臼井甕男により開発された手当による癒しの技術です。日本古来100年以上つづく自然療法であり家庭療法として知られています。靈氣は、心身改善を目的に天からのエネルギーを私の身体を通し貴方へ流していきます。人間がもつ自然治癒力と免疫力を整え不調を治療していきます。
          </p>
          <a href='https://www.jikiden-reiki.com/' target="_blank" className='border-b border-blue-500 text-blue-500 transition duration-300 hover:opacity-50'>直傳靈氣公式</a>
        </div>
        <div className="mt-24 text-center">
          <h3>直傳靈氣の良さとは？</h3>
          <p className='mt-8 leading-8 md:leading-10'>
            靈氣は、小さなお子様や妊婦の方・高齢者にも安心して受けて頂けます。また、未病を病線から発見できるので、改善が早いという利点もあります。
          </p>
          <div className='mt-4'>
            <Image
              src={reikiAboutImage}
              alt="hero_image"
              className="w-full"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
      <div className='bg-sub-color py-24 text-center w-full md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>target</p>
          <h2>このような方へ</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className='grid grid-cols-2 md:w-[1040px] mx-auto mt-12 gap-12'>
          <div className='flex justify-center items-center gap-8 bg-main-color py-8'>
            <Image
              src={targetOneImage}
              alt='このような方へ1'
              width={50}
              height={50}
            />
            <p className='text-start'>日常の生活からリラックスし<br></br>深い癒しを求めている</p>
          </div>
          <div className='flex justify-center items-center gap-8 bg-main-color py-8'>
            <Image
              src={targetTwoImage}
              alt='このような方へ1'
              width={50}
              height={50}
            />
            <p className='text-start'>日常の生活からリラックスし<br></br>深い癒しを求めている</p>
          </div>
          <div className='flex justify-center items-center gap-8 bg-main-color py-8'>
            <Image
              src={targetThreeImage}
              alt='このような方へ1'
              width={50}
              height={50}
            />
            <p className='text-start'>日常の生活からリラックスし<br></br>深い癒しを求めている</p>
          </div>
          <div className='flex justify-center items-center gap-8 bg-main-color py-8'>
            <Image
              src={targetFourImage}
              alt='このような方へ1'
              width={50}
              height={50}
            />
            <p className='text-start'>日常の生活からリラックスし<br></br>深い癒しを求めている</p>
          </div>
        </div>
      </div>
      <div className='py-24 max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>detail</p>
          <h2>施術詳細</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className='mt-12'>
          <div className='flex justify-center'>
            <p className='py-2 px-8 bg-accent-color inline-block rounded-full text-main-color'>メニュー</p>
          </div>
          <div className='grid grid-cols-2 gap-12 mt-12'>
            <div className='relative border-4 border-menu-border rounded-xl p-8'>
              <Image
                src={favoImage}
                alt=""
                width={100}
                height={70}
                className='absolute top-8 right-8'
              />
              <h3>通常施術</h3>
              <div className='mt-8'>
                <p className='bg-text-color inline-block py-2 px-8 text-main-color rounded-full'>料金</p>
                <div className='flex flex-col gap-4 ml-8'>
                  <h4 className='mt-2'>
                    <span className='text-accent-color text-4xl tracking-normal'>3,000円</span>/60分(税込)
                  </h4>
                  <p>お申込みフォームに第一希望、第二希望をお書き下さい</p>
                  <p>①10時～ ②13時～ ③15時～</p>
                  <p>※当日現金払い</p>
                </div>
              </div>
            </div>
            <div className='border-4 border-menu-border rounded-xl p-8'>
              <h3>遠隔施術</h3>
              <div className='mt-8'>
                <div>
                  <p className='bg-text-color inline-block py-2 px-8 text-main-color rounded-full'>料金</p>
                  <div className='flex flex-col gap-4 ml-8'>
                    <h4>
                      <span className='text-accent-color text-4xl tracking-normal'>8,000円</span>/3夜連続(税込)
                    </h4>
                    <p className='tracking-normal'>片付けをご自身でできるようになりたい方向け</p>
                    <p className='tracking-normal'>※ 定期的にお伺いし、片付けのサポートをさせていただきます</p>
                  </div>
                </div>
                <div className='mt-8'>
                  <p className='bg-text-color inline-block py-2 px-8 text-main-color rounded-full'>内容</p>
                  <div className='flex flex-col gap-4 ml-8 mt-4'>
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
            <div className='flex justify-center'>
              <p className='py-2 px-8 bg-accent-color inline-block rounded-full text-main-color'>場所</p>
            </div>
            <div className='text-center'>
              <h4 className='mt-12'>Kikaraで行っています。熊本市東区三郎／県立大学近く</h4>
              <p className='mt-4'>※ご予約を頂いた方には詳細な住所をお知らせします</p>
              <p>※駐車場完備</p>
            </div>
          </div>
          <div className='mx-auto mt-12 flex flex-col gap-4 grow md:flex-row max-w-sm md:max-w-5xl'>
            <div className='w-full'>
              <Image
                src={reikiDetailImageLeft}
                alt=""
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className='w-full'>
              <Image
                src={reikiDetailImageRight}
                alt=""
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <a className='flex justify-center mt-12' href='https://totonou-kikara.com/index.php?Form' target="_blank">
            <button className='py-4 px-24 bg-accent-color text-main-color transition duration-300 hover:opacity-50'>
              <p className='text-md'>予約はこちらから</p>
            </button>
          </a>
        </div>     
      </div>
      <OtherServices />
    </div>
  )
}

export default ReikiPage
