"use client"

import React, { useState } from 'react'
import InstagramIcon from './InstagramIcon'
import FacebookIcon from './FacebookIcon'
import colors from './BtnColors'

const SnsIconBtn = ({
  snsId,
  size = 64,
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleTouchStart = () => setIsActive(true)
  const handleTouchEnd = () => setIsActive(false)

  const fillColor = isActive ? colors.default[snsId] : colors.touched[snsId]

  return (
    <button
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
    {snsId === 'instagram' ? <InstagramIcon size={size} color={fillColor} /> : null}
    {snsId === 'facebook' ? <FacebookIcon size={size} color={fillColor} /> : null}
    </button>
  )
}

export default SnsIconBtn
