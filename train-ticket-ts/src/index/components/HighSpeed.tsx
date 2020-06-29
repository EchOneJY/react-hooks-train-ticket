import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { VisibleProp } from '../types'
import '../styles/HighSpeed.css'

interface IPops {
  highSpeed: VisibleProp
  toggle: (bool: VisibleProp) => void
}

const HighSpeed: FC<IPops> = memo(props => {
  const { highSpeed, toggle } = props
  return (
    <div className="high-speed">
      <div className="high-speed-label">只看高铁/动车</div>
      <div className="high-speed-switch" onClick={() => toggle(!highSpeed)}>
        <input type="hidden" name="highSpeed" value={highSpeed + ''} />
        <div className={classNames('high-speed-track', { checked: highSpeed })}>
          <span
            className={classNames('high-speed-handle', { checked: highSpeed })}
          ></span>
        </div>
      </div>
    </div>
  )
})

export default HighSpeed
