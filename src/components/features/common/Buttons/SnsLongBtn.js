import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import SnsConfigs from './SnsConfigs'

const SnsLongBtn = ({ snsId, iconSize }) => {
  return (
    <a
      href={SnsConfigs[snsId].url}
      target='_blank'
      className={`flex w-64 items-center justify-center gap-4 rounded-md px-2 py-2 font-bold text-white transition duration-300 ease-in-out ${
        (snsId === 'instagram' && 'bg-Instagram hover:bg-Instagram-hover') ||
        (snsId === 'facebook' && 'bg-Facebook hover:bg-Facebook-hover')
      }`}
    >
      {snsId === 'instagram' && <InstagramIcon size={iconSize} color={'fill-white'} />}
      {snsId === 'facebook' && <FacebookIcon size={iconSize} color={'fill-white'} />}
      <p>{SnsConfigs[snsId].title}</p>
    </a>
  )
}

export default SnsLongBtn
