import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Draggable from './Draggable'

const Root = styled.div`
  width: 100%;
  display: flex;
`

const Left = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Right = styled.div`
  width: 50%;
  justify-content: center;
`

const PPTEditor = ({ setData }) => {
  const [file, setFile] = useState(null)
  const [boxes, setBoxes] = useState([])
  const imagePreviewEl = useRef(null)

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  const handleBoxCreate = (type) => {
    setBoxes([
      ...boxes,
      {
        type,
        left: 0,
        top: 0,
      },
    ])
  }

  const handlePreview = () => {
    setData({
      file,
      pptWidth: imagePreviewEl.current.offsetWidth,
      pptHeight: imagePreviewEl.current.offsetHeight,
      boxes,
    })
  }

  const handlePositionSet = (index) => (left, top) => {
    const temp = boxes
    temp[index].left = left
    temp[index].top = top
    setBoxes(temp)
  }

  return (
    <Root>
      <Root>
        <Left>
          <input type="file" onChange={handleChange} />
          <button onClick={() => handleBoxCreate('INPUT_NUMBER')}>
            create input number widget
          </button>
          <button onClick={() => handleBoxCreate('EXPRESSION')}>
            create expression widget
          </button>
          <button onClick={() => handleBoxCreate('DROPDOWN')}>
            create dropdown widget
          </button>
          <button onClick={() => handleBoxCreate('NUMBERIC_INPUT')}>
            create numberic input widget
          </button>
          <button onClick={handlePreview}>Preview</button>
        </Left>
        <Right>
          <div
            ref={imagePreviewEl}
            style={{
              position: 'relative',
              maxWidth: '800px',
              minWidth: '400px',
            }}
          >
            <img alt={'preview'} src={file} style={{ width: '100%' }} />
            {boxes.map(function generateWidget(box, index) {
              const { type } = box
              switch (type) {
                case 'INPUT_NUMBER':
                  return (
                    <Draggable
                      key={`draggable-input-${index}`}
                      relativeEl={imagePreviewEl}
                      onPositionSet={handlePositionSet(index)}
                    >
                      <input />
                    </Draggable>
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
        </Right>
      </Root>
    </Root>
  )
}

export default PPTEditor
