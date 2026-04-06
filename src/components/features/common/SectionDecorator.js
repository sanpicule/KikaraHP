/**
 * 全セクション共通のサイド装飾
 * News セクションと同じ：縦線 ＋ 縦書きテキスト
 */
const SectionDecorator = ({ label, light = false }) => (
  <div className='hidden xl:flex items-center gap-2 [writing-mode:vertical-lr] self-center'>
    <div className={`h-16 w-[1px] ${light ? 'bg-kikara-white/50' : 'bg-secondary-brown'}`} />
    <p className={`text-sm tracking-wide ${light ? 'text-kikara-white/70' : 'text-secondary-brown'}`}>
      {label}
    </p>
  </div>
)

export default SectionDecorator
