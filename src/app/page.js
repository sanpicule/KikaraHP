'use client'

import React, { useEffect } from 'react'
import NewsSection from '@/components/features/common/News'
import ConceptSection from '@/components/features/home/Concept'
import HeroSection from '@/components/features/home/Hero'
import ProfileSection from '@/components/features/home/Profile'
import ServiceIntroductionSection from '@/components/features/home/ServiceIntroduction'

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <div className='text-center'>
      <HeroSection />
      <ConceptSection />
      <ProfileSection />
      <ServiceIntroductionSection />
      <NewsSection />
    </div>
  )
}
