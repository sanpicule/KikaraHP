import React from 'react'
import SnsIconBtn from '../features/common/Buttons/SnsIconBtn'
import SnsLongBtn from '../features/common/Buttons/SnsLongBtn'

const Footer = () => {
  return (
    <div className="py-12">
      <div className="sm:flex justify-between items-center mx-auto max-w-7xl sm:px-10">
        <div className="">
          <div className="flex justify-center sm:justify-start">
            <div className="inline-block">
              <p className="text-xs tracking-wider">くらし・ととのう・さろん</p>
              <h3 className="tracking-wide text-3xl">Kikara</h3>
              <p className="text-sm tracking-wider">熊本県熊本市東区三郎1-13-38</p>
              <p className="text-sm tracking-wider">〒862-0922</p>
              <p className="text-sm tracking-wider">070-5414-3874</p>
              <p className="text-sm tracking-wider">chiisonoblog@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start mt-4">
            <div className="flex sm:hidden gap-12">
              <SnsIconBtn snsId="facebook" />
              <SnsIconBtn snsId="instagram" />
            </div>
            <div className="sm:flex flex-col space-y-4 hidden">
              <SnsLongBtn snsId="facebook" iconSize={18} />
              <SnsLongBtn snsId="instagram" iconSize={18} />
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.112437266134!2d130.75854487567454!3d32.80082585312649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f1805d32dac9%3A0x8fde90f8f28c9cc6!2z44CSODYyLTA5MjIg54aK5pys55yM54aK5pys5biC5p2x5Yy65LiJ6YOO77yR5LiB55uu77yR77yT4oiS77yT77yY!5e0!3m2!1sja!2sjp!4v1713188773076!5m2!1sja!2sjp" allowFullScreen="" loading="lazy" className="sm:pl-10 lg:pl-64 w-full h-64 pt-4 sm:pt-0" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="text-center pt-12">
        <div className="sm:flex flex-col sm:flex-row justify-center gap-12 text-sm">
          <div>
            <a href="https://totonou-kikara.com/index.php?Law" target="_blank" rel="noopener noreferrer">
              プライバシーポリシー
            </a>
          </div>
          <div>
            <a href="https://totonou-kikara.com/index.php?Privacypolicy" target="_blank" rel="noopener noreferrer">
              特定商取引法
            </a>
          </div>
          <div>
            {/* TODO: 適切なURLを設定 */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              サイトマップ
            </a>
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
