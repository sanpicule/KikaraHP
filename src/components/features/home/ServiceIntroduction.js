'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

import HomeDetailButton from './HomeDetailButton';
import useScrollFadeIn from './useScrollFadeIn';

import serviceHeadNumber1 from '@/public/images/serviceHeadNumber1.png';
import serviceHeadNumber2 from '@/public/images/serviceHeadNumber2.png';
import serviceHeadNumber3 from '@/public/images/serviceHeadNumber3.png';
import service1bg from '@/public/images/service1bg.png';
import service2bg from '@/public/images/service2bg.png';
import service3bg from '@/public/images/service3bg.png';

const ServiceIntroductionPages = () => {
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])

  return (
    <div className="flex justify-around p-20">
      <div>
        <div className="flex items-center -rotate-90 translate-y-full gap-2">
          <p className="text-sm tracking-wide">concept</p>
          <div className="w-16 h-0.1 bg-secondary-brown"></div>
        </div>
      </div>
      <div className="w-[1040px]">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm tracking-wider">service</p>
          <h1 className="tracking-wide text-3xl">サービス紹介</h1>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className="pt-32">
          <div>
            <div className="flex items-center text-3xl js-show-on-scroll-from-right">
              <Image
                src={serviceHeadNumber1}
                alt="1"
                width={37}
                height={91}
                className="mr-6"
                style={{
                  objectFit: 'cover',
                }}
              />
              <h3>ミネラル醗酵ドリンク教室</h3>
            </div>
            <div className="relative py-20">
              <Image
                src={service1bg}
                alt=""
                width={780}
                height={460}
                className="shadow-2xl rounded-xl js-show-on-scroll-from-bottom"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className="bg-white absolute top-1/2 right-0 w-[600px] px-10 py-6 js-show-on-scroll-from-left rounded-xl shadow-2xl">
                <p className="text-lg text-left leading-10">
                  野菜や果物が持つ酵母菌にミネラルを入れてフレッシュなものとはまた違う栄養価のあるドリンクを手作りします。
                </p>
                <HomeDetailButton url={'/mineral'} />
              </div>
            </div>
          </div>
          <div className="mt-40">
            <div className="flex justify-end items-center text-3xl js-show-on-scroll-from-left">
              <Image
                src={serviceHeadNumber2}
                alt="2"
                width={53}
                height={91}
                className="mr-6"
                style={{
                  objectFit: 'cover',
                }}
              />
              <h3>片付け・お手伝い</h3>
            </div>
            <div className="relative py-20">
              <Image
                src={service2bg}
                alt=""
                width={780}
                height={460}
                className="ml-auto shadow-2xl rounded-xl js-show-on-scroll-from-bottom"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className="bg-white absolute top-1/2 w-[600px] px-10 py-6 js-show-on-scroll-from-right rounded-xl shadow-2xl">
                <p className="text-lg text-left leading-10">
                  暮らしの空間を心地良く、物の存在が意識できる生活に。あなたの理想を現実にしていく最初の一歩を一緒に歩んでいきましょう。
                </p>
                <HomeDetailButton url={'/tidying'} />
              </div>
            </div>
          </div>
          <div className="mt-40">
            <h3 className="flex items-center text-3xl js-show-on-scroll-from-right">
              <Image
                src={serviceHeadNumber3}
                alt="1"
                width={56}
                height={91}
                className="mr-6"
                style={{
                  objectFit: 'cover',
                }}
              />
              直傳靈氣
            </h3>
            <div className="relative py-20">
              <Image
                src={service3bg}
                alt=""
                width={780}
                height={460}
                className="shadow-2xl rounded-xl js-show-on-scroll-from-bottom"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className="bg-white absolute top-1/2 right-0 w-[600px] px-10 py-6 js-show-on-scroll-from-left rounded-xl shadow-2xl">
                <p className="text-lg text-left leading-10">
                  人間には自然浄化力があります。手を当てて天からのエネルギーを身体を通して流し本来持っている自然治癒力を目覚めさせていきます。
                </p>
                <HomeDetailButton url={'/reiki'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto -translate-y-full">
        <div className="flex items-center -rotate-90 translate-y-full gap-2">
          <p className="text-sm tracking-wide">concept</p>
          <div className="w-16 h-0.1 bg-secondary-brown"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntroductionPages;
