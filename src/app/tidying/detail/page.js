import React from 'react'
import Image from 'next/image'

import ServicePageHero from '@/components/features/common/ServicePageHero'
import OtherServices from '@/components/features/common/OtherServices'

import preparationList from '@/data/tidyingPreparationList.json'

import tidyingHeroImage from '@/public/images/tidyingHero.png'
import favoImage from '@/public/images/favo.png'
import beforeImage from '@/public/images/tidyingBefore.png'
import afterImage from '@/public/images/tidyingAfter.png'
import arrowImage from '@/public/images/tidyingArrow.png'
import tidyingApplication from '@/public/images/tidyingApplication.png'
import tidyingDo from '@/public/images/tidyingDo.png'
import tidyingReply from '@/public/images/tidyingReply.png'
import one from '@/public/images/1.png'
import two from '@/public/images/2.png'
import three from '@/public/images/3.png'

const TidyingDetail = () => {
  return (
    <div>
      <ServicePageHero serviceImage={tidyingHeroImage} serviceTitle={'片付け・お手伝いについて'} />
      <div className='py-24 max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>detail</p>
          <h2>片付け・お手伝い</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className='mt-12'>
          <div className='pb-12'>
            <div className='flex justify-center'>
              <p className='py-2 px-8 bg-secondary-brown-light inline-block rounded-full text-kikara-white'>メニュー</p>
            </div>
            <div className='grid grid-cols-2 gap-12 mt-12'>
              <div className='relative border-2 border-secondary-brown rounded-xl p-8'>
                <Image
                  src={favoImage}
                  alt=""
                  width={100}
                  height={70}
                  className='absolute top-8 right-8'
                />
                <h3>単発利用</h3>
                <div className='mt-8'>
                  <p className='bg-secondary-brown inline-block py-2 px-8 text-kikara-white rounded-full'>料金</p>
                  <div className='flex flex-col gap-4 ml-8'>
                    <h4 className='mt-2'>
                      <span className='text-secondary-brown-light text-4xl tracking-normal'>15,000円</span>/180分<br></br>(出張費・税込)
                    </h4>
                    <p className='tracking-normal'>※３時間の範囲でしたら、２ヶ所でも可能です</p>
                    <p className='tracking-normal'>※1日で終わらない場合</p>
                    <p className='tracking-normal ml-4'><span className='text-secondary-brown-light'>6,000円</span>/120分（延長料金／1時間3,000円）</p>
                  </div>
                </div>
              </div>
              <div className='border-2 border-secondary-brown rounded-xl p-8'>
                <h3>長期利用</h3>
                <div className='mt-8'>
                  <p className='bg-secondary-brown inline-block py-2 px-8 text-kikara-white rounded-full'>料金</p>
                  <div className='flex flex-col gap-4 ml-8'>
                    <h4>
                      <span className='text-secondary-brown-light text-4xl tracking-normal'>8,000円</span>/90分<br></br>(出張費・税込)
                    </h4>
                    <p className='tracking-normal'>片付けをご自身でできるようになりたい方向け</p>
                    <p className='tracking-normal'>※ 定期的にお伺いし、片付けのサポートをさせていただきます</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <div className='flex justify-center'>
              <p className='py-2 px-8 bg-secondary-brown-light inline-block rounded-full text-kikara-white'>準備していただくもの</p>
            </div>
            <div className='mt-12 pl-8'>
              <ul className='flex flex-col gap-2 text-xl'>
                {preparationList.map((preparation, index) => (
                  <li key={index}>{`・${preparation.listItem}`}</li>
                ))}
              </ul>
              <p className='mt-4'>※以下は、ストックがある際に準備してください。カスタマイズの際、重宝します</p>
              <ul className='flex flex-col gap-2 text-xl mt-4'>
                <li>・綺麗な紙袋（大・中・小）</li>
                <li>・収納に使えそうな缶（大・中・小）</li>
                <li>・収納ケース（プラスチックや布地）</li>
              </ul>
            </div>
          </div>
          <div className='mt-12'>
            <div className='flex justify-center'>
              <p className='py-2 px-8 bg-kikara-chip-red inline-block rounded-full text-kikara-white'>注意事項</p>
            </div>
            <div className='mt-12 pl-8'>
              <ul className='flex flex-col gap-2 text-xl mt-4'>
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
            <div className='flex justify-center'>
              <p className='py-2 px-8 bg-secondary-brown-light inline-block rounded-full text-kikara-white'>片付け手伝い例</p>
            </div>
            <div className='mt-12 flex items-center justify-between'>
              <div className='flex flex-col items-center gap-4'>
                <p>Before</p>
                <Image
                  src={beforeImage}
                  alt="片付け・お手伝い実施前の写真"
                  className='rounded-xl shadow-2xl'
                  width={450}
                  height={700}
                />
              </div>
              <Image
                  src={arrowImage}
                  alt="矢印"
                  width={70}
                  height={30}
                />
              <div className='flex flex-col items-center gap-4'>
                <p>After</p>
                <Image
                  src={afterImage}
                  alt="片付け・お手伝い実施後の写真"
                  className='rounded-xl shadow-2xl'
                  width={450}
                  height={700}
                />
              </div>
            </div>
          </div>
          <div className='py-24 text-center max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
            <div className="flex flex-col items-center gap-2">
              <p className='section_sub'>flow</p>
              <h2>片付けまでの流れ</h2>
              <div className="w-12 h-0.1 bg-secondary-brown"></div>
            </div>
            <div className='flex flex-col justify-center gap-4 items-center mt-12 h-full'>
              <div className='flex justify-around w-full h-full mt-24 tracking-normal js-show-on-scroll-from-bottom'>
                <div className='relative flex flex-col items-center justify-center flex-1 gap-8 rounded-3xl px-4 py-12'>
                  <Image src={one} alt="" width={60} height={60} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                  <h3>申込</h3>
                  <Image src={tidyingApplication} alt="" width={150} height={150} />
                  <p className='h-full'>当サイトのNewsまたはInstagram、Facebookをご確認ください。</p>
                </div>
                <div className="my-auto w-0 h-0 border-secondary-brown border-t-[30px] border-b-[30px] border-l-[30px] border-t-transparent border-b-transparent border-solid" />
                <div className='relative flex flex-col items-center justify-center flex-1 gap-8 rounded-3xl px-4 py-12'>
                  <Image src={two} alt="" width={60} height={60} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                  <h3>返信</h3>
                  <Image src={tidyingReply} alt="" width={150} height={150} />
                  <p className='h-full'>Facebook、Instagramからお申し込みいただけます。</p>
                </div>
                <div className="my-auto w-0 h-0 border-secondary-brown border-t-[30px] border-b-[30px] border-l-[30px] border-t-transparent border-b-transparent border-solid" />
                <div className='relative flex flex-col items-center justify-center flex-1 gap-8 rounded-3xl px-4 py-12'>
                  <Image src={three} alt="" width={60} height={60} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                  <h3>片付け</h3>
                  <Image src={tidyingDo} alt="" width={150} height={150} />
                  <p className='h-full'>ご持参いただきたいものがあります。教室詳細をご確認ください。</p>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <a href='https://totonou-kikara.com/index.php?Form' target="_blank" className="mt-12 bg-secondary-brown-light relative inline-block text-kikara-white border py-4 px-24 no-underline outline-none transition-all duration-300 group hover:bg-secondary-brown">
              予約はこちらから
              <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-secondary-brown-light transition-all duration-300 group-hover:w-[104.5%] group-hover:h-[129%] group-hover:border-secondary-brown"></span>
              <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-secondary-brown-light transition-all duration-300 group-hover:w-[104.5%] group-hover:h-[129%] group-hover:border-secondary-brown"></span>
            </a>
          </div>
        </div>
      </div>
      <OtherServices></OtherServices>
    </div>
  )
}

export default TidyingDetail
