"use client"

import React, { useState } from "react"
import Icon from "./FacebookIcon"

const FacebookIcon = ({
  size = 64,
  defaultColor = "#4267B2",
  touchedColor = "#183b80",
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

export default FacebookIcon
