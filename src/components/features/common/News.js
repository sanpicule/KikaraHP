import React from 'react'
import NewsList from '../../../data/news.json'

const NewsSection = ({ decoration = true }) => {
  return (
    <div className="flex justify-between p-20 bg-primary-pink">
      {decoration &&
        <div>
          <div className='flex items-center -rotate-90 translate-y-full gap-2'>
            <p className='section_sub'>News</p>
            <div className="w-16 h-0.1 bg-secondary-brown"></div>
          </div>
        </div>
      }
      <div className='w-[1040px] mx-auto'>
        <div className="flex flex-col items-center gap-2">
          <p className="section_sub">News</p>
          <h2>お知らせ</h2>
          <div className="w-12 h-0.1 bg-secondary-brown"></div>
        </div>
        <div className='my-10 mx-auto p-10 bg-kikara-white rounded-xl shadow-2xl'>
          {NewsList.map((news, index) => (
            <div key={index} className='cursor-pointer py-4 border-b'>
              <div className='border-l-4 border-secondary-brown p-2 text-start  transition duration-500 ease-in-out hover:text-secondary-brown-light'>
                <p className='text-sm font-thin'>{news.date}</p>
                <p className='tracking-wide'>{news.newsTitle}</p>
              </div>
            </div>
          ))}    
        </div>
      </div>
      {decoration &&
        <div className='mt-auto -translate-y-full'>
          <div className='flex items-center -rotate-90 translate-y-full gap-2'>
            <p className='section_sub'>News</p>
            <div className="w-16 h-0.1 bg-secondary-brown"></div>
          </div>
        </div>
      }
    </div>
  )
}

export default NewsSection
