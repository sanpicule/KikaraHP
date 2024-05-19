import Image from 'next/image'
import React from 'react'
import profileImage from '@/public/images/profile.png'

const ProfileSection = () => {
  return (
    <div className='flex justify-between p-20'>
      <div>
        <div className='flex translate-y-full -rotate-90 items-center gap-2'>
          <p className='section_sub'>profile</p>
          <div className='h-0.1 w-16 bg-secondary-brown'></div>
        </div>
      </div>
      <div className='w-[1040px]'>
        <div className='flex flex-col items-center gap-2'>
          <p className='section_sub'>profile</p>
          <h2>プロフィール</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='relative mx-auto mt-12 h-96 rounded-xl bg-black shadow-2xl'>
          <Image
            src={profileImage}
            alt='profile_image'
            className='h-full w-full rounded-xl shadow-2xl'
            style={{
              objectFit: 'cover',
              filter: 'brightness(0.3)',
            }}
          />
          <div className='absolute left-24 top-1/2 w-1/2 -translate-y-1/2 text-white'>
            <div className='text-start'>
              <ruby>
                <h2>檜皮</h2>
                <rt>ひかわ</rt>
              </ruby>
              <ruby className='ml-2'>
                <h2>園江</h2>
                <rt>そのえ</rt>
              </ruby>
            </div>
            <p className='mt-6 text-start leading-8 tracking-wide'>
              1965年 8月 26日<br></br>
              静岡県生まれ<br></br>
              東京暮らしを経て<br></br>
              2011年から熊本在住<br></br>
              健康オタクのミニマリスト
            </p>
          </div>
        </div>
      </div>
      <div className='mt-auto -translate-y-full'>
        <div className='flex translate-y-full -rotate-90 items-center gap-2'>
          <p className='section_sub'>profile</p>
          <div className='h-0.1 w-16 bg-secondary-brown'></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
