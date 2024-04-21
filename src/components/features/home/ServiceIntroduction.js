'use client';

import React from 'react';
import { useEffect } from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import Image from 'next/image';
import Link from 'next/link'
import serviceHeadNumber1 from '@/public/images/serviceHeadNumber1.png';
import serviceHeadNumber2 from '@/public/images/serviceHeadNumber2.png';
import serviceHeadNumber3 from '@/public/images/serviceHeadNumber3.png';
import service1bg from '@/public/images/service1bg.png';
import service2bg from '@/public/images/service2bg.png';
import service3bg from '@/public/images/service3bg.png';
import chevronRight from '@/public/images/chevronRight.png';

const ServiceIntroductionPages = () => {
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll]);
  return (
    <div className="flex justify-around p-20">
      <div>
        <div className="flex items-center -rotate-90 translate-y-full gap-2">
          <p className="text-sm tracking-wide">concept</p>
          <div className="w-16 h-0.1 bg-text-color"></div>
        </div>
      </div>
      <div className="w-[1040px]">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm tracking-wider">service</p>
          <h1 className="tracking-wide text-3xl">サービス紹介</h1>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className="pt-32">
          <div>
            <h3 className="flex items-center text-3xl js-show-on-scroll-from-right">
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
              ミネラル発酵ドリンク教室
            </h3>
            <div className="relative py-20">
              <Image
                src={service1bg}
                alt=""
                width={780}
                height={460}
                className="shadow js-show-on-scroll-from-bottom"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className="bg-white absolute top-1/2 right-0 w-[600px] px-10 py-6 shadow js-show-on-scroll-from-left">
                <p className="text-lg text-left leading-10">
                  Kikaraが今一番力を入れて取り組んでいるのが、ミネラル後素ドリンクです。そもそもミネラルって何だっけ？そんな方でも大丈夫です。ミネラル発酵ドリンクを一緒に作りながら、ミネラルや、健康について一緒に勉強していけます！
                </p>
                <Link href="/mineral" className="flex w-[200px] mt-6 ml-auto px-6 py-2 items-center justify-center bg-accent-color text-white">
                  詳しく見る
                  <Image
                    src={chevronRight}
                    alt=""
                    width={55}
                    height={30}
                    className="ml-2"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-40">
            <h3 className="flex justify-end items-center text-3xl js-show-on-scroll-from-left">
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
              片付け・お手伝い
            </h3>
            <div className="relative py-20">
              <Image
                src={service2bg}
                alt=""
                width={780}
                height={460}
                className="ml-auto shadow js-show-on-scroll-from-bottom"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className="bg-white absolute top-1/2 w-[600px] px-10 py-6 shadow js-show-on-scroll-from-right">
                <p className="text-lg text-left leading-10">
                  Kikaraが今一番力を入れて取り組んでいるのが、ミネラル後素ドリンクです。そもそもミネラルって何だっけ？そんな方でも大丈夫です。ミネラル発酵ドリンクを一緒に作りながら、ミネラルや、健康について一緒に勉強していけます！
                </p>
                <Link href="/tidying" className="flex w-[200px] mt-6 ml-auto px-6 py-2 items-center justify-center bg-accent-color text-white">
                  詳しく見る
                  <Image
                    src={chevronRight}
                    alt=""
                    width={55}
                    height={30}
                    className="ml-2"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </Link>
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
              直伝霊気
            </h3>
            <div className="relative py-20">
              <Image
                src={service3bg}
                alt=""
                width={780}
                height={460}
                className="shadow js-show-on-scroll-from-bottom"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className="bg-white absolute top-1/2 right-0 w-[600px] px-10 py-6 shadow js-show-on-scroll-from-left">
                <p className="text-lg text-left leading-10">
                  Kikaraが今一番力を入れて取り組んでいるのが、ミネラル後素ドリンクです。そもそもミネラルって何だっけ？そんな方でも大丈夫です。ミネラル発酵ドリンクを一緒に作りながら、ミネラルや、健康について一緒に勉強していけます！
                </p>
                <Link href="/reiki" className="flex w-[200px] mt-6 ml-auto px-6 py-2 items-center justify-center bg-accent-color text-white">
                  詳しく見る
                  <Image
                    src={chevronRight}
                    alt=""
                    width={55}
                    height={30}
                    className="ml-2"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto -translate-y-full">
        <div className="flex items-center -rotate-90 translate-y-full gap-2">
          <p className="text-sm tracking-wide">concept</p>
          <div className="w-16 h-0.1 bg-text-color"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntroductionPages;
