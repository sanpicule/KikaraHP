import InstagramIcon from "./InstagramIcon"
import FacebookIcon from "./FacebookIcon"
import colors from "./BtnColors"

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const SnsLongBtn = ({
  snsId,
  iconSize,
}) => {
  const capitalizedSnsId = capitalizeFirstLetter(snsId)

  const defaultColor = colors.default[snsId]
  const touchedColor = colors.touched[snsId]

  console.log(defaultColor, touchedColor)

  return (
    <button className={`bg-${capitalizedSnsId} hover:bg-${capitalizedSnsId}-hover text-white font-bold py-2 px-4 rounded w-36 md:w-64 flex items-center justify-center gap-2`}>
      {snsId === 'instagram' ? <InstagramIcon size={iconSize} color={"#fff"} /> : null}
      {snsId === 'facebook' ? <FacebookIcon size={iconSize} color={"#fff"} /> : null}
      {capitalizedSnsId}

    </button>
  )
}

export default SnsLongBtn
