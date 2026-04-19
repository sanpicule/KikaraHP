import React from 'react'

// Tinypost (Tiptap) が出力するHTML本文を整形して表示
const FormatText = ({ text }) => {
  if (!text) return null

  const isHtml = /<[a-z][\s\S]*>/i.test(text)

  if (!isHtml) {
    // 後方互換: プレーンテキスト時は改行を<br />で描画
    const lines = text.split('\n')
    return (
      <div className='mt-8 whitespace-pre-wrap text-start text-[15px] leading-[1.9] tracking-[0.05em] text-gray-800 md:mt-12 md:text-base'>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    )
  }

  return (
    <div
      className={[
        'mt-8 text-start text-[15px] leading-[1.9] tracking-[0.05em] text-gray-800 md:mt-12 md:text-base',
        '[&_h1]:text-lg [&_h1]:mb-4 [&_h1]:mt-10 [&_h1]:font-semibold [&_h1]:leading-[1.5] [&_h1]:tracking-[0.05em] [&_h1]:text-gray-900 md:[&_h1]:text-2xl',
        '[&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:leading-[1.5] [&_h2]:tracking-[0.05em] [&_h2]:text-gray-900 md:[&_h2]:text-xl',
        'md:[&_h3]:text-lg [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:leading-[1.5] [&_h3]:tracking-[0.05em] [&_h3]:text-gray-900',
        '[&_p]:my-4',
        '[&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6',
        '[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6',
        '[&_li]:my-1',
        '[&_a]:text-blue-600 [&_a]:underline hover:[&_a]:opacity-70',
        '[&_strong]:font-bold',
        '[&_em]:italic',
        '[&_u]:underline',
        '[&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600',
        '[&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm',
        '[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-gray-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-white',
        '[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-white',
        '[&_img]:my-4 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded',
        '[&_hr]:my-6 [&_hr]:border-gray-200',
      ].join(' ')}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default FormatText
