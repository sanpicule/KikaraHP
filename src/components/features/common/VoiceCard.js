import Image from 'next/image'
import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import userWoman from '@/public/images/userWoman.png'

const VoiceCard = ({ name, info, voice, index }) => {
  const { isMobile } = useMediaQuery()
  const jdgEven = () => {
    if (index % 2 === 0) {
      return true
    } else {
      false
    }
  }
  return (
    <div
      className={`
      js-show-on-scroll-from-bottom 
      flex
      flex-col 
      items-center 
      rounded-xl 
      bg-secondary-brown-light 
      p-4 
      shadow-2xl 
      ${jdgEven() ? 'md:flex-row' : 'md:flex-row-reverse'}
    `}
    >
      <div className='flex items-center gap-4 text-kikara-white md:w-1/5 md:flex-col'>
        <Image src={userWoman} alt='' width={60} height={60} />
        <div className='font-bold'>
          <h4>{name}</h4>
          <p>{info}</p>
        </div>
      </div>
      <div className='relative h-full w-full'>
        {!isMobile && jdgEven() && (
          <div
            className='absolute -left-6 top-8 h-0 w-0 
            border-b-[20px] border-r-[30px]
            border-t-[20px] border-b-transparent
            border-r-kikara-white border-t-transparent'
          ></div>
        )}
        {!isMobile && !jdgEven() && (
          <div
            class='absolute -right-6 top-8 h-0 w-0 
              border-b-[20px] border-l-[30px]
              border-t-[20px] border-b-transparent
              border-l-kikara-white border-t-transparent'
          ></div>
        )}
        {isMobile && (
          <div
            class='absolute left-24 top-4 h-0 w-0 
            border-b-[30px] border-l-[20px]
            border-r-[20px] border-b-kikara-white
            border-l-transparent border-r-transparent'
          ></div>
        )}
        <p className='mt-8 rounded-xl bg-kikara-white p-4 text-start md:mt-0 md:h-full'>{voice}</p>
      </div>
    </div>
  )
}

export default VoiceCard
