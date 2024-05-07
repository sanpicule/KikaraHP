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

const TidyingDetail = () => {
  return (
    <div>
      <ServicePageHero serviceImage={tidyingHeroImage} serviceTitle={'片付け・お手伝いについて'} />
      <div className='py-24 max-w-[90%] mx-auto md:w-[1040px] md:tracking-wide'>
        <div className="flex flex-col items-center gap-2">
          <p className='section_sub'>detail</p>
          <h2>片付け・お手伝い</h2>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className='mt-12'>
          <div className='pb-12'>
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
                <h3>単発利用</h3>
                <div className='mt-8'>
                  <p className='bg-text-color inline-block py-2 px-8 text-main-color rounded-full'>料金</p>
                  <div className='flex flex-col gap-4 ml-8'>
                    <h4 className='mt-2'>
                      <span className='text-accent-color text-4xl tracking-normal'>15,000円</span>/180分<br></br>(出張費・税込)
                    </h4>
                    <p className='tracking-normal'>※３時間の範囲でしたら、２ヶ所でも可能です</p>
                    <p className='tracking-normal'>※1日で終わらない場合</p>
                    <p className='tracking-normal ml-4'><span className='text-accent-color'>6,000円</span>/120分（延長料金／1時間3,000円）</p>
                  </div>
                </div>
              </div>
              <div className='border-4 border-menu-border rounded-xl p-8'>
                <h3>長期利用</h3>
                <div className='mt-8'>
                  <p className='bg-text-color inline-block py-2 px-8 text-main-color rounded-full'>料金</p>
                  <div className='flex flex-col gap-4 ml-8'>
                    <h4>
                      <span className='text-accent-color text-4xl tracking-normal'>8,000円</span>/90分<br></br>(出張費・税込)
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
              <p className='py-2 px-8 bg-accent-color inline-block rounded-full text-main-color'>準備していただくもの</p>
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
              <p className='py-2 px-8 bg-menuItem-color inline-block rounded-full text-main-color'>注意事項</p>
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
              <p className='py-2 px-8 bg-accent-color inline-block rounded-full text-main-color'>片付け手伝い例</p>
            </div>
            <div className='mt-12 flex items-center justify-between'>
              <div className='flex flex-col items-center gap-4'>
                <p>Before</p>
                <Image
                  src={beforeImage}
                  alt="片付け・お手伝い実施前の写真"
                  width={450}
                  height={800}
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
                  width={450}
                  height={800}
                />
              </div>
            </div>
          </div>
          <a className='flex justify-center mt-12' href='https://totonou-kikara.com/index.php?Form' target="_blank">
            <button className='py-4 px-24 bg-accent-color text-main-color transition duration-300 hover:opacity-50'>
              <p className='text-md'>予約はこちらから</p>
            </button>
          </a>
        </div>
      </div>
      <OtherServices></OtherServices>
    </div>
  )
}

export default TidyingDetail
