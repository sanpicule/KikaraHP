import React from 'react'
import heroImage from '@/public/images/hero.png'
import ServicePageHero from '@/components/features/common/ServicePageHero'

const MineralHero = () => {
  return (
    <div>
      <ServicePageHero
        serviceImage={heroImage}
        serviceTitle={'ミネラル酵素ドリンク'}
      />
    </div>
  )
}

export default MineralHero
