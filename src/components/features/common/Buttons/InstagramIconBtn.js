"use client"

import React, { useState } from 'react'
import Icon from './InstagramIcon'

const InstagramIcon = ({
  size = 64,
  defaultColor = "#C13584",
  touchedColor = "#991861",
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleTouchStart = () => setIsActive(true)
  const handleTouchEnd = () => setIsActive(false)

  const fillColor = isActive ? touchedColor : defaultColor

  return (
    <button
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Icon size={size} color={fillColor} />
    </button>
  )
}

export default InstagramIcon
