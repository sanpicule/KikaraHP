import React from 'react'
import hereImage from '@/public/images/hero.png'
import ServicePageHero from '@/components/features/common/ServicePageHero'

const MineralHero = () => {
  return (
    <div>
      <ServicePageHero
        serviceImage={hereImage}
        serviceTitle={'ミネラル酵素ドリンク'}
      />
    </div>
  )
}

export default MineralHero
