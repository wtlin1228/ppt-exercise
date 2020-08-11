import React, { useRef, useEffect } from 'react'
import { fromEvent } from 'rxjs'
import { map, takeUntil, switchMap } from 'rxjs/operators'
import styled from 'styled-components'

const DraggableContainer = styled.div`
  position: absolute;
`

const Draggable = ({ children, relativeEl, onPositionSet }) => {
  const el = useRef(null)

  useEffect(() => {
    const mousedown$ = fromEvent(el.current, 'mousedown')
    const mousemove$ = fromEvent(document, 'mousemove')
    const mouseup$ = fromEvent(document, 'mouseup')

    const drag$ = mousedown$.pipe(
      switchMap((start) => {
        return mousemove$.pipe(
          map((move) => {
            move.preventDefault()
            return {
              left:
                move.clientX -
                start.offsetX -
                relativeEl.current.offsetWidth +
                window.scrollX,
              top:
                move.clientY -
                start.offsetY -
                relativeEl.current.offsetTop +
                window.scrollY,
            }
          }),
          takeUntil(mouseup$)
        )
      })
    )

    const subscription = drag$.subscribe((val) => {
      const { left, top } = val
      el.current.style.top = `${top}px`
      el.current.style.left = `${left}px`
      onPositionSet(left, top)
    })

    return () => subscription.unsubscribe()
  }, [relativeEl, el, onPositionSet])

  return <DraggableContainer ref={el}>{children}</DraggableContainer>
}

export default Draggable
