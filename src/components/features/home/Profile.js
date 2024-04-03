import React from 'react'
import Image from "next/image";
import profileImage from '../../../public/images/profile.png'

const ProfileSection = () => {
  return (
    <div className="flex justify-around p-20">
      <div>
        <div className='flex items-center -rotate-90 translate-y-full gap-2'>
          <p className='text-sm tracking-wide'>profile</p>
          <div className="w-16 h-0.1 bg-text-color"></div>
        </div>
      </div>
      <div className='w-full'>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm tracking-wider">profile</p>
          <h1 className="tracking-wide text-3xl">プロフィール</h1>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className="mt-12 mx-auto w-5/6 h-96 bg-black relative">
          <Image
            src={profileImage}
            alt="profile_image"
            className="w-full h-full"
            style={{
              objectFit: 'cover',
              filter: "brightness(0.3)"
            }}
          />
          <div className="w-1/2 absolute top-1/2 left-24 -translate-y-1/2 text-white">
            <div className="text-start">
              <ruby>
                <h2 className="text-3xl">檜皮</h2>
                <rt>ひかわ</rt>
              </ruby>
              <ruby className="ml-2">
                <h2 className="text-3xl">園江</h2>
                <rt>そのえ</rt>
              </ruby>
            </div>
            <p className="mt-6 text-start leading-8 tracking-wide">
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
        <div className='flex items-center -rotate-90 translate-y-full gap-2'>
          <p className='text-sm tracking-wide'>profile</p>
          <div className="w-16 h-0.1 bg-text-color"></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection