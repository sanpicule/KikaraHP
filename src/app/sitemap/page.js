'use client'

import Link from 'next/link'
import SnsLongBtn from '@/components/features/common/Buttons/SnsLongBtn'
import sitemapData from '@/data/sitemapData.json'

const Sitemap = () => {
  return (
    <div className='mt-[85px]'>
      <div className='mt-20 flex h-28 w-full items-center bg-secondary-brown'>
        <h1 className='mx-auto w-[70%] text-2xl text-white sm:text-3xl'>サイトマップ</h1>
      </div>
      <div className='mx-auto mb-24 mt-12 grid w-[70%] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
        {sitemapData.map((section, sectionIndex) => (
          <div key={sectionIndex} className='col-span-1 grid grid-cols-subgrid gap-6 md:col-span-2 lg:col-span-3'>
            <h3 className='col-span-1 md:col-span-2 lg:col-span-3'>{section.title}</h3>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className='grid gap-3'>
                <Link
                  href={item.subLink}
                  className='group relative flex h-[52px] w-full items-center justify-between overflow-hidden border border-l-8 border-x-secondary-brown-light bg-white px-4 text-left leading-[50px] text-secondary-brown no-underline transition-colors duration-500 hover:text-white'
                >
                  <span className='relative z-10'>{item.subTitle}</span>
                  <div className='absolute inset-0 origin-right scale-x-0 transform bg-secondary-brown-light transition-transform delay-100 duration-500 group-hover:origin-left group-hover:scale-x-100'></div>
                  <div className='z-10 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-secondary-brown-light delay-100 duration-500 group-hover:bg-white'>
                    <div className='h-2 w-2 translate-x-[-25%] rotate-45 border-r-2 border-t-2 border-white delay-100 duration-500 group-hover:border-secondary-brown-light'></div>
                  </div>
                </Link>
                {item.subItems.map((subItem, subItemIndex) => (
                  <Link
                    key={subItemIndex}
                    href={subItem.menuLink}
                    target={subItem.menuLink.startsWith('http') ? '_blank' : undefined}
                    rel={subItem.menuLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className='group relative ml-2 flex items-center'
                  >
                    <span className='absolute h-3 w-3 rotate-45 border-r-4 border-t-4 border-secondary-brown-light duration-300 group-hover:-ml-1'></span>
                    <span className='relative ml-5 inline-block no-underline transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-secondary-brown after:transition-all group-hover:after:w-full'>
                      {subItem.menu}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
            {section.title === 'SNS' && (
              <>
                <SnsLongBtn snsId='facebook' iconSize={18} />
                <SnsLongBtn snsId='instagram' iconSize={18} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sitemap
