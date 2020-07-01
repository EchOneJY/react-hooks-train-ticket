import React, { FC, memo, useState, useEffect, useRef, useMemo } from 'react'
import leftPad from 'left-pad'

import useWinSize from '../../common/useWinSize'
import '../styles/Slider.css'

interface SliderProps {
  title: string
  currentStartHours: number
  currentEndHours: number
  onStartChanged: React.Dispatch<React.SetStateAction<number>>
  onEndChanged: React.Dispatch<React.SetStateAction<number>>
}

const Slider: FC<SliderProps> = memo(props => {
  const {
    title,
    currentStartHours,
    currentEndHours,
    onStartChanged,
    onEndChanged
  } = props

  const winSize = useWinSize()
  const startHandler = useRef<HTMLElement>(null)
  const endHandler = useRef<HTMLElement>(null)

  const lastStartX = useRef<number>(0)
  const lastEndX = useRef<number>(0)

  const range = useRef<HTMLDivElement>(null)
  const rangeWidth = useRef<number>(0)

  const prevCurrentStartHours = useRef(currentStartHours)
  const prevCurrentEndHours = useRef(currentEndHours)

  const [start, setStart] = useState(() => (currentStartHours / 24) * 100)
  const [end, setEnd] = useState(() => (currentEndHours / 24) * 100)

  if (prevCurrentStartHours.current !== currentStartHours) {
    setStart((currentStartHours / 24) * 100)
    prevCurrentStartHours.current = currentStartHours
  }

  if (prevCurrentEndHours.current !== currentEndHours) {
    setEnd((currentEndHours / 24) * 100)
    prevCurrentEndHours.current = currentEndHours
  }

  const startPercent = useMemo(() => {
    if (start > 100) {
      return 100
    }
    if (start < 0) {
      return 0
    }
    console.log(start)
    return start
  }, [start])

  const endPercent = useMemo(() => {
    if (end > 100) {
      return 100
    }
    if (end < 0) {
      return 0
    }
    return end
  }, [end])

  const startHours = useMemo(() => {
    return Math.round((startPercent * 24) / 100)
  }, [startPercent])

  const endHours = useMemo(() => {
    return Math.round((endPercent * 24) / 100)
  }, [endPercent])

  const startText = useMemo(() => {
    return leftPad(startHours, 2, '0') + ':00'
  }, [startHours])

  const endText = useMemo(() => {
    return leftPad(endHours, 2, '0') + ':00'
  }, [endHours])

  function onStartTouchBegin(e: TouchEvent) {
    const touch = e.targetTouches[0]
    lastStartX.current = touch.pageX
  }

  function onEndTouchBegin(e: TouchEvent) {
    const touch = e.targetTouches[0]
    lastEndX.current = touch.pageX
  }

  function onStartTouchMove(e: TouchEvent) {
    const touch = e.targetTouches[0]
    const distance = touch.pageX - lastStartX.current
    lastStartX.current = touch.pageX

    setStart(start => start + (distance / rangeWidth.current) * 100)
  }

  function onEndTouchMove(e: TouchEvent) {
    const touch = e.targetTouches[0]
    const distance = touch.pageX - lastEndX.current
    lastEndX.current = touch.pageX

    setEnd(start => start + (distance / rangeWidth.current) * 100)
  }

  useEffect(() => {
    if (!range.current) return
    rangeWidth.current = parseFloat(
      window.getComputedStyle(range.current).width
    )
  }, [winSize.width])

  useEffect(() => {
    if (!startHandler.current || !endHandler.current) return
    const startHandlerCurrent = startHandler.current
    const endHandlerCurrent = endHandler.current
    startHandlerCurrent.addEventListener('touchstart', onStartTouchBegin, false)
    startHandlerCurrent.addEventListener('touchmove', onStartTouchMove, false)

    endHandlerCurrent.addEventListener('touchstart', onEndTouchBegin, false)
    endHandlerCurrent.addEventListener('touchmove', onEndTouchMove, false)

    return () => {
      startHandlerCurrent.removeEventListener(
        'touchstart',
        onStartTouchBegin,
        false
      )
      startHandlerCurrent.removeEventListener(
        'touchmove',
        onStartTouchMove,
        false
      )

      endHandlerCurrent.removeEventListener(
        'touchstart',
        onEndTouchBegin,
        false
      )
      endHandlerCurrent.removeEventListener('touchmove', onEndTouchMove, false)
    }
  })

  useEffect(() => {
    onStartChanged(startHours)
  }, [onStartChanged, startHours])

  useEffect(() => {
    onEndChanged(endHours)
  }, [onEndChanged, endHours])

  return (
    <div className="option">
      <h3>{title}</h3>
      <div className="range-slider">
        <div className="slider" ref={range}>
          <div
            className="slider-range"
            style={{
              left: startPercent + '%',
              width: endPercent - startPercent + '%'
            }}
          ></div>
          <i
            ref={startHandler}
            className="slider-handle"
            style={{ left: startPercent + '%' }}
          >
            <span>{startText}</span>
          </i>
          <i
            ref={endHandler}
            className="slider-handle"
            style={{ left: endPercent + '%' }}
          >
            <span>{endText}</span>
          </i>
        </div>
      </div>
    </div>
  )
})

export default Slider
