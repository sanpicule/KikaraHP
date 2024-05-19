import React from 'react'

const FacebookIcon = ({ size = 64, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 31 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={color}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.491211 15.6174C0.491211 23.0749 5.90746 29.2762 12.9912 30.5337V19.6999H9.24121V15.5337H12.9912V12.1999C12.9912 8.44994 15.4075 6.36744 18.825 6.36744C19.9075 6.36744 21.075 6.53369 22.1575 6.69994V10.5337H20.2412C18.4075 10.5337 17.9912 11.4499 17.9912 12.6174V15.5337H21.9912L21.325 19.6999H17.9912V30.5337C25.075 29.2762 30.4912 23.0762 30.4912 15.6174C30.4912 7.32119 23.7412 0.533691 15.4912 0.533691C7.24121 0.533691 0.491211 7.32119 0.491211 15.6174Z'
      />
    </svg>
  )
}

export default FacebookIcon
