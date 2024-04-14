import React from 'react';
import FacebookLongBtn from '../features/common/Buttons/FacebookLongBtn';
import FacebookIconBtn from '../features/common/Buttons/FacebookIconBtn';
import InstagramLongBtn from '../features/common/Buttons/InstagramLongBtn';
import InstagramIconBtn from '../features/common/Buttons/InstagramIconBtn';


const Footer = () => {
  return (
    <div className="py-12">
      <div className="sm:flex justify-between items-center mx-auto max-w-7xl sm:px-10">
        <div className="">
          <div className="flex justify-center">
            <div className="inline-block">
              <div className="text-xs tracking-wider">くらし・ととのう・さろん</div>
              <div className="tracking-wide text-3xl">Kikara</div>
              <div className="text-sm tracking-wider">熊本県熊本市東区三郎1-13-38</div>
              <div className="text-sm tracking-wider">〒862-0922</div>
              <div className="text-sm tracking-wider">000-0000-0000</div>
              <div className="text-sm tracking-wider">@gmail.com</div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start mt-4">
            <div className="flex sm:hidden gap-12">
              <FacebookIconBtn />
              <InstagramIconBtn />
            </div>
            <div className="sm:flex flex-col space-y-4 hidden">
              <FacebookLongBtn />
              <InstagramLongBtn />
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2189.3415134134952!2d139.7075204400345!3d35.65409678053767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5c94fd47bb%3A0xb5a664f723519eaa!2z5Lit6I-v54Gr6Y2LIOmjn-OBueaUvumhjCDljZflm73kuq0g5riL6LC35LiA5Y-35bqX!5e0!3m2!1sja!2sjp!4v1712229113294!5m2!1sja!2sjp" allowfullscreen="" loading="lazy" className="sm:pl-10 lg:pl-64 w-full h-64 pt-4 sm:pt-0" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="text-center pt-12">
        <div className="sm:flex flex-col sm:flex-row justify-center gap-12 text-sm">
          <div>
            プライバシーポリシー
          </div>
          <div>
            特定商取引法
          </div>
          <div>
            サイトマップ
          </div>
        </div>
        <div className="text-xs mt-4">
          Copyright © 2023 kikara All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
