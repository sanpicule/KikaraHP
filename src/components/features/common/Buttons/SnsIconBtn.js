import React from 'react'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import SnsConfigs from './SnsConfigs'

const SnsIconBtn = ({ snsId, size = 64 }) => {
  return (
    <a href={SnsConfigs[snsId].url} target='_blank'>
      {snsId === 'instagram' && <InstagramIcon size={size} color={'fill-Instagram active:fill-Instagram-hover'} />}
      {snsId === 'facebook' && <FacebookIcon size={size} color={'fill-Facebook active:fill-Facebook-hover'} />}
    </a>
  )
}

export default SnsIconBtn
