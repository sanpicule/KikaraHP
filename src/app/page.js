import HeroSection from '@/components/features/home/Hero'
import ConceptSection from '@/components/features/home/Concept'
import ProfileSection from '@/components/features/home/Profile'
import NewsSection from '@/components/features/common/News'

export default function Home() {
  return (
    <div className="text-center">
      <HeroSection />
      <ConceptSection />
      <ProfileSection />
      <NewsSection />
    </div>
  )
}