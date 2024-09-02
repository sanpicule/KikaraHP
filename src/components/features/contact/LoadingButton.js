import Image from 'next/image'
import back from '@/public/images/contactBack.png'

const LoadingButton = ({ handleClick, handleBack, loading }) => {
  return (
    <div className='text-center'>
      <button
        type='button'
        onClick={handleClick}
        className={`rounded px-12 py-2 text-white ${loading ? 'bg-gray-400' : 'bg-secondary-brown-light'} ${loading ? 'cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? (
          <div className='flex items-center'>
            <svg className='mr-3 h-5 w-5 animate-spin' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            送信中...
          </div>
        ) : (
          <p className='text-center'>送信</p>
        )}
      </button>
      <Image
        src={back}
        alt='back_button'
        width={60}
        height={40}
        onClick={handleBack}
        className='mx-auto mt-12 cursor-pointer transition-all duration-300 hover:opacity-70'
      />
    </div>
  )
}

export default LoadingButton
