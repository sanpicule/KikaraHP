'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import serviceMineral from '@/public/images/serviceMineral.png'
import serviceReiki from '@/public/images/serviceReiki.png'
import serviceTidying from '@/public/images/serviceTidying.png'
import { usePathname } from 'next/navigation'

const ServiceCard = ({ service, title }) => {
  const pathname = usePathname();
let sanitizedPathname = pathname.replace(/^\/|\/$/g, '')
sanitizedPathname = sanitizedPathname.replace(/\/detail$/i, '')
  let serviceImage;
  switch (service) {
    case 'mineral':
      serviceImage = serviceMineral;
      break;
    case 'reiki':
      serviceImage = serviceReiki;
      break;
    case 'tidying':
      serviceImage = serviceTidying;
      break;
    default:
      serviceImage = serviceMineral;
  }

  return (
    <div className='flex grow gap-2 text-center py-4 px-4 bg-main-color shadow-[0_0_15px_0_rgba(0,0,0,0.2)] md:flex-col'>
      <Image
        src={serviceImage}
        alt="特徴番号"
        className='w-1/3 md:w-full'
        style={{
          objectFit: 'cover',
          filter: "brightness(0.9)"
        }}
      />
      <div className='mx-auto'>
        <h4 className='mt-12'>{title}</h4>
        {service !== sanitizedPathname ? (
            <Link href={`/${service}`}>
              <button className='py-2 px-12 mt-12 bg-accent-color text-main-color transition duration-300 hover:opacity-50'>
                <p>詳しく見る</p>
              </button>
            </Link>
          ) : (
            <button disabled className='py-2 px-12 mt-12 bg-gray-300 text-main-color'>
              <p>詳しく見る</p>
            </button>
          )}
      </div>
    </div>
  )
}

export default ServiceCard
