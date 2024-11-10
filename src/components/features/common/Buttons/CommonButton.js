import Link from 'next/link'
import React from 'react'

const CommonButton = ({ url, buttonText, target = false }) => {
  return (
    <div className='flex justify-center'>
      <Link
        href={url}
        target={target ? '_blank' : ''}
        className='group relative mt-4 inline-block border bg-secondary-brown-light px-12 py-2 text-kikara-white no-underline outline-none transition-all duration-300 hover:bg-secondary-brown'
      >
        {buttonText}
        <span className='absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[140%] group-hover:w-[calc(100%+1rem)] group-hover:border-secondary-brown'></span>
        <span className='absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-secondary-brown-light transition-all duration-300 group-hover:h-[140%] group-hover:w-[calc(100%+1rem)] group-hover:border-secondary-brown'></span>
      </Link>
    </div>
  )
}

export default CommonButton
