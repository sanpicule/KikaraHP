'use client'

import React, { useEffect } from 'react'
import otherServices from '@/data/otherServices.json'
import useScrollFadeIn from '../home/useScrollFadeIn'
import ServiceCard from './ServiceCard'

const OtherServices = () => {
  const scroll = useScrollFadeIn()
  useEffect(() => {
    scroll.scrollFadeInFromBottom()
    scroll.scrollFadeInFromRight()
    scroll.scrollFadeInFromLeft()
  }, [scroll])
  return (
    <div className='bg-primary-pink py-24 md:tracking-wider'>
      <div className='js-show-on-scroll-from-bottom flex flex-col items-center gap-2'>
        <p className='section-sub'>others</p>
        <h2>その他のサービス</h2>
        <div className='h-0.1 w-12 bg-secondary-brown'></div>
      </div>
      <div className='mx-auto mt-24 max-w-[90%] md:w-[1040px]'>
        <div className='flex grow flex-col gap-4 md:flex-row'>
          {otherServices.map((service) => (
            <ServiceCard key={service.service} service={service.service} title={service.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherServices
