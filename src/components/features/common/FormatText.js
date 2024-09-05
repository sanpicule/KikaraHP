import React from 'react'

const FormatText = ({ text }) => {
  if (!text) return null

  const textWithBreaks = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ))

  return <div className='whitespace-pre-wrap px-24 py-12 text-start'>{textWithBreaks}</div>
}

export default FormatText
