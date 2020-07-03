import React, { FC, memo } from 'react'

import '../styles/Ticket.css'
import { PriceProp, SeatTypeProp } from '../types'
interface TicketProps {
  price: PriceProp
  type: SeatTypeProp
}

const Ticket: FC<TicketProps> = memo(props => {
  const { price, type } = props

  return (
    <div className="ticket">
      <p>
        <span className="ticket-type">{type}</span>
        <span className="ticket-price">{price}</span>
      </p>
      <div className="label">坐席</div>
    </div>
  )
})

export default Ticket
