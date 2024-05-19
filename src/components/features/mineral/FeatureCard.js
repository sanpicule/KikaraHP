import Image from 'next/image'
import React from 'react'
import featureTwo from '@/public/images/beauty.png'
import featureThree from '@/public/images/meal.png'
import featureOne from '@/public/images/orange.png'

const FeatureCard = ({ feature, number, content }) => {
  let featureImage
  switch (number) {
    case 1:
      featureImage = featureOne
      break
    case 2:
      featureImage = featureTwo
      break
    case 3:
      featureImage = featureThree
      break
    default:
      featureImage = featureOne
  }
  return (
    <div className='rounded-xl bg-kikara-white px-8 py-4 shadow-2xl'>
      <div className='flex items-center justify-center gap-4'>
        <div className='text-lg flex h-10 w-10 items-center justify-center rounded-full bg-secondary-brown-light font-bold text-white'>
          {number}
        </div>
        <h4 className='tracking-normal'>{feature}</h4>
      </div>
      <Image
        src={featureImage}
        alt={feature}
        className='mt-4 h-[150px] w-full rounded-md'
        style={{
          objectFit: 'cover',
        }}
      />
      <p className='mt-8 leading-8 md:leading-8 md:tracking-wide'>{content}</p>
    </div>
  )
}

export default FeatureCard
