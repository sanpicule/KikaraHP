import React from 'react'
import Image from "next/image";
import mainHeroImage from '@/public/images/mainHeroImage.png'

const HeroSection = () => {
  return (
    <div className="w-full relative">
      <Image
        src={mainHeroImage}
        alt="hero_image"
        className="w-full h-svh"
        style={{
          objectFit: 'cover',
          filter: "brightness(0.3)"
        }}
      />
      <div className="text-white tracking-wide text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p>わたし・ととのう・さろん</p>
        <h1 className="text-5xl tracking-wide mt-2">Kikara</h1>
        <p className="mt-20 text-xl font-thin leading-10">身体と暮らしと食事を<br></br>ととのえる</p>
        <div className="mt-32 flex flex-col-reverse items-center justify-center">
          <span className="text-white tracking-wide">Scroll</span>
          <div className="animate-bounce w-0.5 h-20 bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
