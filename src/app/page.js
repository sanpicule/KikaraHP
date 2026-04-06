'use client'

import NewsSection from '@/components/features/common/News'
import FAQSection from '@/components/features/home/FAQ'
import HeroSection from '@/components/features/home/Hero'
import HowToBuySection from '@/components/features/home/HowToBuy'
import ConceptSection from '@/components/features/home/LPConcept'
import FeaturesSection from '@/components/features/home/LPFeatures'
import VoicesSection from '@/components/features/home/LPVoices'

export default function Home() {
  return (
    <div className='text-center'>
      <HeroSection />
      <ConceptSection />
      <FeaturesSection />
      <VoicesSection />
      <HowToBuySection />
      <FAQSection />
      <div id='news'>
        <NewsSection />
      </div>
    </div>
  )
}
