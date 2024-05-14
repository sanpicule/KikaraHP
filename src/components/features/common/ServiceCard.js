'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import serviceMineral from '@/public/images/serviceMineral.png'
import serviceReiki from '@/public/images/serviceReiki.png'
import serviceTidying from '@/public/images/serviceTidying.png'

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
    <div className='relative md:w-1/3 shadow-2xl md:flex-col overflow-hidden rounded-xl'>
      <Link href={`/${service}`}>
        <Image
          src={serviceImage}
          alt={`${title}の背景画像`}
          className='transition duration-500 w-full h-full md:hover:scale-125'
          style={{
            objectFit: 'cover',
            filter: "brightness(0.6)"
          }}
        />
        <h4 className='absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-kikara-white text-2xl text-center'>{title}</h4>
      </Link>
    </div>
  )
}

export default ServiceCard
