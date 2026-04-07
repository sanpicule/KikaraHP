/**
 * 全セクション共通のタイトルブロック — NANA style: left-aligned
 */
const SectionHeader = ({ en, ja, light = false }) => {
  const textColor = light ? 'text-white' : 'text-gray-800'
  const subColor = light ? 'text-white/70' : 'text-gray-500'
  const lineColor = light ? 'bg-white/40' : 'bg-secondary-brown-light'
  return (
    <div className='text-left'>
      <h2 className={`text-2xl font-thin tracking-[.2em] md:text-3xl ${textColor}`}>{en}</h2>
      <p className={`mt-2 text-sm tracking-[.2em] ${subColor}`}>{ja}</p>
      <div className={`mt-4 h-px w-8 ${lineColor}`} />
    </div>
  )
}

export default SectionHeader
