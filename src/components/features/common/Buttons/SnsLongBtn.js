import InstagramIcon from './InstagramIcon'
import FacebookIcon from './FacebookIcon'
import SnsConfigs from './SnsConfigs'

const SnsLongBtn = ({
  snsId,
  iconSize,
}) => {
  return (
    <a
      href={SnsConfigs[snsId].url}
      target="_blank"
      className={`text-white font-bold py-2 px-2 w-24 md:w-64 flex items-center justify-center gap-4 transition duration-300 ease-in-out ${
        snsId === 'instagram' && 'bg-Instagram hover:bg-Instagram-hover' ||
        snsId === 'facebook' && 'bg-Facebook hover:bg-Facebook-hover'
      }`
    }>
      {snsId === 'instagram' && <InstagramIcon size={iconSize} color={'fill-white'} />}
      {snsId === 'facebook' && <FacebookIcon size={iconSize} color={'fill-white'} />}
      <p>{SnsConfigs[snsId].title}</p>
    </a>
  )
}

export default SnsLongBtn
