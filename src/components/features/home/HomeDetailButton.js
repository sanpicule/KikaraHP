import Link from 'next/link'
import React from 'react'

const HomeDetailButton = ({ url }) => {
  return (
    <div className='flex justify-end'>
      <Link href={url} className="mt-4 bg-secondary-brown-light relative inline-block text-kikara-white border py-2 px-12 no-underline outline-none transition-all duration-300 group hover:bg-secondary-brown">
        詳細を確認する
        <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-secondary-brown-light transition-all duration-300 group-hover:w-[107%] group-hover:h-[140%] group-hover:border-secondary-brown"></span>
        <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-secondary-brown-light transition-all duration-300 group-hover:w-[107%] group-hover:h-[140%] group-hover:border-secondary-brown"></span>
      </Link>
    </div>
  )
}

export default HomeDetailButton
