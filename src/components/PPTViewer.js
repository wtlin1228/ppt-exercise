import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Position = styled.div`
  position: absolute;

  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
`

const PPTViewer = ({ data }) => {
  const { file, pptWidth, pptHeight, boxes } = data
  const el = useRef(null)

  if (el.current) {
    console.log(el.current.offsetWidth, el.current.offsetHeight)
  }

  return (
    <div ref={el} style={{ position: 'relative' }}>
      <img alt={'preview'} src={file} style={{ width: '100%' }} />
      {el.current &&
        boxes.map(function generateWidget(box, index) {
          console.log(boxes, pptHeight, pptWidth)
          const { type, left, top } = box
          const leftRelative = (100 * left) / pptWidth
          const topRelative = (100 * top) / pptHeight
          switch (type) {
            case 'INPUT_NUMBER':
              return (
                <Position left={leftRelative} top={topRelative}>
                  <input />
                </Position>
              )
            case 'EXPRESSION':
              return null
            case 'DROPDOWN':
              return null
            case 'NUMBERIC_INPUT':
              return null
            default:
              return null
          }
        })}
    </div>
  )
}

export default PPTViewer
