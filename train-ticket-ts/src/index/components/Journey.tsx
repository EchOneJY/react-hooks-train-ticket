import React, { FC, memo } from 'react'
import switchImg from '../imgs/switch.svg'

import '../styles/Journey.css'
import { ToProp, FromProp, VisibleProp } from '../types'

export type JourneyProps = {
  to: ToProp
  from: FromProp
  showCitySelector: (bool: VisibleProp) => void
  exchangeFromTo: () => void
}
const Journey: FC<JourneyProps> = memo(props => {
  const { to, from, exchangeFromTo, showCitySelector } = props
  return (
    <div className="journey">
      <div className="journey-station">
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className="journey-input journey-from"
          onClick={() => showCitySelector(true)}
        />
      </div>
      <div className="journey-switch" onClick={() => exchangeFromTo()}>
        <img src={switchImg} width="70" height="40" alt="" />
      </div>
      <div className="journey-station">
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          className="journey-input journey-to"
          onClick={() => showCitySelector(false)}
        />
      </div>
    </div>
  )
})

export default Journey
