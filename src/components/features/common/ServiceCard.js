'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import useAnimation from '@/hooks/useAnimation'
import serviceMineral from '@/public/images/serviceMineral.png'
import serviceReiki from '@/public/images/serviceReiki.png'
import serviceTidying from '@/public/images/serviceTidying.png'

const ServiceCard = ({ service, title, index }) => {
  const animate = useAnimation()

  let serviceImage
  switch (service) {
    case 'mineral':
      serviceImage = serviceMineral
      break
    case 'reiki':
      serviceImage = serviceReiki
      break
    case 'tidying':
      serviceImage = serviceTidying
      break
    default:
      serviceImage = serviceMineral
  }

  return (
    <motion.div
      variants={animate.scrollFadeInFromBottom}
      initial={animate.scrollFadeInFromBottom.initial}
      whileInView={animate.scrollFadeInFromBottom.whileInView}
      viewport={animate.scrollFadeInFromBottom.viewport}
      custom={index}
      className='relative h-[150px] overflow-hidden rounded-xl shadow-2xl md:w-1/3 md:flex-col xl:h-full'
    >
      <Link href={`/${service}`}>
        <Image
          src={serviceImage}
          alt={`${title}の背景画像`}
          className='h-full w-full transition duration-500 md:hover:scale-125'
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.6)',
          }}
        />
        <h4 className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center text-kikara-white'>
          {title}
        </h4>
      </Link>
    </motion.div>
  )
}

export default ServiceCard
