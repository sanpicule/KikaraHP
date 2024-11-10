import CommonButton from '@/components/features/common/Buttons/CommonButton'

export const metadata = {
  title: '404 | 該当するページが見つかりません',
}
export default function NotFound() {
  return (
    <div className='m-auto flex h-screen w-[90%] flex-col items-center justify-center bg-white text-center text-black md:w-full'>
      <div className="items-center font-[system-ui,_'Segoe_UI',_Roboto,_Helvetica,_Arial,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji'] leading-[49px] md:flex">
        <h1 className='border-gray-300 text-2xl font-medium md:mr-6 md:border-r md:pr-6'>404</h1>
        <div>
          <h2 className='text-base font-normal'>This page could not be found.</h2>
        </div>
      </div>
      <div className='mt-4 md:mt-8'>
        <p>このURLに該当するページは存在しません。</p>
        <p>お探しのページは移動もしくは削除された可能性がございます。</p>
      </div>
      <div className='mt-12'>
        <CommonButton url={'/'} buttonText={'ホームに戻る'} />
      </div>
    </div>
  )
}
