'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import serviceMineral from '@/public/images/serviceMineral.png'
import serviceReiki from '@/public/images/serviceReiki.png'
import serviceTidying from '@/public/images/serviceTidying.png'

const ServiceCard = ({ service, title }) => {
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
        <Link href={`/${service}`}>
          <button className="mt-12 border py-4 px-12 btn relative inline-flex items-center justify-start overflow-hidden transition-all  group shadow-md bg-white hover:bg-white hover:shadow-none">
            <span className="w-0 h-0 bg-accent-color absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full"></span>
            <span className="w-full text-text-color transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              <p className="md:tracking-wide text-sm">詳細を確認</p>
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
