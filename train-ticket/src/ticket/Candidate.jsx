import React, { useContext, useMemo, memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import URI from 'urijs'
import dayjs from 'dayjs'

import { TrainContext } from './context'
import './Candidate.css'

const Channel = memo(props => {
  const { name, desc, type } = props

  const { trainNumber, departStation, arriveStation, departDate } = useContext(
    TrainContext
  )

  const src = useMemo(() => {
    return new URI('order.html')
      .setSearch('trainNumber', trainNumber)
      .setSearch('dStation', departStation)
      .setSearch('aStation', arriveStation)
      .setSearch('type', type)
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
      .toString()
  }, [type, trainNumber, departStation, arriveStation, departDate])

  return (
    <div className="channel">
      <div className="middle">
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
      <a href={src} className="buy-wrapper">
        <div className="buy">买票</div>
      </a>
    </div>
  )
})

Channel.propType = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

const Seat = memo(props => {
  const {
    type,
    priceMsg,
    ticketsLeft,
    channels,
    expanded,
    onToggle,
    idx
  } = props

  return (
    <li>
      <div className="bar" onClick={() => onToggle(idx)}>
        <span className="seat">{type}</span>
        <span className="price">
          <i>￥</i>
          {priceMsg}
        </span>
        <span className="btn">{expanded ? '收起' : '预定'}</span>
        <span className="num">{ticketsLeft}</span>
      </div>
      <div
        className="channels"
        style={{ height: expanded ? channels.length * 55 + 'px' : 0 }}
      >
        {channels.map(channel => {
          return <Channel key={channel.name} {...channel} type={type} />
        })}
      </div>
    </li>
  )
})

Seat.propTypes = {
  type: PropTypes.string.isRequired,
  priceMsg: PropTypes.string.isRequired,
  ticketsLeft: PropTypes.string.isRequired,
  channels: PropTypes.array.isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired
}

const Candidate = memo(props => {
  const { tickets } = props

  const [expandIndex, setExpandIndex] = useState(-1)

  const onToggle = useCallback(
    idx => {
      setExpandIndex(idx === expandIndex ? -1 : idx)
    },
    [expandIndex]
  )

  return (
    <div className="candidate">
      <ul>
        {tickets.map((ticket, idx) => {
          return (
            <Seat
              idx={idx}
              onToggle={onToggle}
              expanded={expandIndex === idx}
              key={ticket.type}
              {...ticket}
            />
          )
        })}
      </ul>
    </div>
  )
})

Candidate.propTypes = {
  tickets: PropTypes.array.isRequired
}

export default Candidate
