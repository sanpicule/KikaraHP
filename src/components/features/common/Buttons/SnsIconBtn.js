"use client"

import React, { useState } from 'react'
import InstagramIcon from './InstagramIcon'
import FacebookIcon from './FacebookIcon'
import SnsConfigs from './SnsConfigs'

const SnsIconBtn = ({
  snsId,
  size = 64,
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    window.open(SnsConfigs[snsId].url, '_blank');
  };
  const handleTouchStart = () => setIsActive(true)
  const handleTouchEnd = () => setIsActive(false)

  const fillColor = isActive ? SnsConfigs[snsId].touchedColor : SnsConfigs[snsId].defaultColor

  return (
    <button
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
    {snsId === 'instagram' ? <InstagramIcon size={size} color={fillColor} /> : null}
    {snsId === 'facebook' ? <FacebookIcon size={size} color={fillColor} /> : null}
    </button>
  )
}

export default SnsIconBtn
