import Image from 'next/image'

const ServicePageHero = ({ serviceImage, serviceTitle }) => {
  return (
    <div>
      <div className='relative mt-[85px] h-4/5 w-full'>
        <Image
          src={serviceImage}
          alt='hero_image'
          className='h-full w-full'
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.3)',
          }}
        />
        <div className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white md:pl-24 md:text-left'>
          <h2>{serviceTitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default ServicePageHero
