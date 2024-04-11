import React from 'react'
import hereImage from '@/public/images/hero.png'
import Image from 'next/image'

const MineralHero = () => {
  return (
    <div>
      <div className="w-full h-96 relative">
        <Image
          src={hereImage}
          alt="hero_image"
          className="w-full h-full"
          style={{
            objectFit: 'cover',
            filter: "brightness(0.3)"
          }}
        />
        <div className="w-full text-white text-center md:text-left md:pl-24 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl tracking-wide mt-2">ミネラル酵素ドリンク</h1>
        </div>
      </div>
    </div>
  )
}

export default MineralHero
