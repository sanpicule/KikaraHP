import React from 'react'

const FormatText = ({ text }) => {
  if (!text) return null

  const textWithBreaks = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ))

  return <div className='mt-12 whitespace-pre-wrap text-start'>{textWithBreaks}</div>
}

export default FormatText
