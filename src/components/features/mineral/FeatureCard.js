import React from 'react'
import Image from 'next/image'

import featureOne from '@/public/images/orange.png'
import featureTwo from '@/public/images/beauty.png'
import featureThree from '@/public/images/meal.png'

const FeatureCard = ({ feature, number, content }) => {
  let featureImage;
  switch (number) {
    case 1:
      featureImage = featureOne;
      break;
    case 2:
      featureImage = featureTwo;
      break;
    case 3:
      featureImage = featureThree;
      break;
    default:
      featureImage = featureOne;
  }
  return (
    <div className='rounded-xl py-4 px-8 bg-kikara-white shadow-2xl'>
      <div className='flex items-center justify-center gap-4'>
        <div className="w-10 h-10 rounded-full bg-secondary-brown-light flex justify-center items-center text-white text-lg font-bold">
          {number}
        </div>
        <h4 className='tracking-normal'>{feature}</h4>
      </div>
      <Image
        src={featureImage}
        alt={feature}
        className='w-full h-[150px] mt-4 rounded-md'
        style={{
          objectFit: 'cover'
        }}
      />
      <p className='mt-8 leading-8 md:tracking-wide md:leading-8'>{content}</p>
    </div>
  )
}

export default FeatureCard
