import Image from 'next/image'
import React from 'react'

const ServicePageHero = ({ serviceImage, serviceTitle }) => {
  return (
    <div>
      <div className="w-full h-4/5 relative">
        <Image
          src={serviceImage}
          alt="hero_image"
          className="w-full h-full"
          style={{
            objectFit: 'cover',
            filter: "brightness(0.3)"
          }}
        />
        <div className="w-full text-white text-center md:text-left md:pl-24 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h2>{serviceTitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default ServicePageHero
