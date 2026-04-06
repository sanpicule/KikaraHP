import Image from 'next/image'
import mainHeroImage from '@/public/images/mainHeroImage.png'

const HeroSection = () => {
  return (
    <div id='hero' className='relative flex min-h-screen'>
      {/* Background image (full-screen on SP, right panel on md+) */}
      <div className='absolute inset-0 md:relative md:inset-auto md:w-[60%] md:flex-shrink-0'>
        <Image src={mainHeroImage} alt='Kikara' fill priority className='object-cover' />
        <div className='absolute inset-0 bg-black/40 md:hidden' />
      </div>

      {/* Text overlay: centered on SP, left panel on md+ */}
      <div className='relative z-10 flex w-full flex-col items-center justify-center px-8 text-center md:order-first md:w-[40%] md:items-start md:px-14 md:text-left lg:px-20'>
        <p className='text-xs tracking-[.3em] text-white drop-shadow md:text-gray-400 md:drop-shadow-none'>
          ミネラル醗酵ドリンク
        </p>
        <h1 className='mt-3 text-[38px] font-thin leading-none tracking-[.15em] text-white drop-shadow md:text-[54px] md:text-gray-800 md:drop-shadow-none lg:text-[72px]'>
          Kikara
        </h1>
        <div className='mt-6 h-px w-8 bg-white md:bg-gray-300' />
      </div>
    </div>
  )
}

export default HeroSection
