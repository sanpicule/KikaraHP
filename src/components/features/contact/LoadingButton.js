const LoadingButton = ({ handleClick, handleBack, loading }) => {
  return (
    <div className='mt-10 flex flex-col items-center gap-4'>
      <button
        type='button'
        onClick={handleClick}
        disabled={loading}
        className={`flex items-center gap-3 rounded-full px-16 py-4 text-sm tracking-widest text-white transition-all duration-300 ${
          loading ? 'cursor-not-allowed bg-gray-300' : 'bg-secondary-brown-light shadow-md hover:opacity-70'
        }`}
      >
        {loading && (
          <svg className='h-4 w-4 animate-spin' viewBox='0 0 24 24' fill='none'>
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
        )}
        {loading ? '送信中...' : '送信する'}
      </button>
      <button
        type='button'
        onClick={handleBack}
        className='text-xs tracking-widest text-gray-400 underline underline-offset-4 transition hover:opacity-60'
      >
        ← 入力画面に戻る
      </button>
    </div>
  )
}

export default LoadingButton
