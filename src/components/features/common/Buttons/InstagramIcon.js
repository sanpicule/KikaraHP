"use client"

import React, { useState } from 'react'

const InstagramIcon = ({
  size = 64,
  color = "#C13584",
}) => {
  return (
    <div>
      <svg width={size} height={size} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4872 10.5316C12.7329 10.5316 10.4851 12.7793 10.4851 15.5337C10.4851 18.2881 12.7329 20.5358 15.4872 20.5358C18.2415 20.5358 20.4892 18.2881 20.4892 15.5337C20.4892 12.7793 18.2415 10.5316 15.4872 10.5316ZM30.4895 15.5337C30.4895 13.4623 30.5083 11.4097 30.392 9.34201C30.2756 6.94038 29.7278 4.80894 27.9716 3.05276C26.2117 1.29282 24.0841 0.748702 21.6825 0.632373C19.6111 0.516045 17.5585 0.534808 15.4909 0.534808C13.4196 0.534808 11.367 0.516045 9.29937 0.632373C6.89779 0.748702 4.76639 1.29657 3.01023 3.05276C1.25033 4.8127 0.706218 6.94038 0.589891 9.34201C0.473565 11.4134 0.492327 13.466 0.492327 15.5337C0.492327 17.6013 0.473565 19.6577 0.589891 21.7254C0.706218 24.127 1.25408 26.2584 3.01023 28.0146C4.77014 29.7746 6.89779 30.3187 9.29937 30.435C11.3707 30.5513 13.4233 30.5326 15.4909 30.5326C17.5623 30.5326 19.6149 30.5513 21.6825 30.435C24.0841 30.3187 26.2155 29.7708 27.9716 28.0146C29.7315 26.2547 30.2756 24.127 30.392 21.7254C30.5121 19.6577 30.4895 17.6051 30.4895 15.5337ZM15.4872 23.2301C11.2281 23.2301 7.79087 19.7928 7.79087 15.5337C7.79087 11.2746 11.2281 7.83724 15.4872 7.83724C19.7462 7.83724 23.1835 11.2746 23.1835 15.5337C23.1835 19.7928 19.7462 23.2301 15.4872 23.2301ZM23.4987 9.31949C22.5043 9.31949 21.7013 8.51645 21.7013 7.52203C21.7013 6.52761 22.5043 5.72456 23.4987 5.72456C24.4931 5.72456 25.2961 6.52761 25.2961 7.52203C25.2964 7.75816 25.2501 7.99203 25.1599 8.21024C25.0697 8.42845 24.9373 8.62672 24.7703 8.79369C24.6034 8.96066 24.4051 9.09305 24.1869 9.18327C23.9687 9.2735 23.7348 9.31979 23.4987 9.31949Z" fill={color} />
      </svg>
    </div>
  )
}

export default InstagramIcon
