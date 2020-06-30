import React, { FC, memo, useMemo } from 'react'
import URI from 'urijs'

import { TrainProps, TrainItemProps } from './types'

import './styles/List.css'

const ListItem: FC<TrainItemProps> = props => {
  const {
    dTime,
    aTime,
    dStation,
    aStation,
    trainNumber,
    date,
    time,
    priceMsg
  } = props

  const url = useMemo(() => {
    return new URI('ticket.html')
      .setSearch('aStation', aStation)
      .setSearch('dStation', dStation)
      .setSearch('trainNumber', trainNumber)
      .setSearch('date', date)
      .toString()
  }, [aStation, dStation, trainNumber, date])

  return (
    <li className="list-item">
      <a href={url}>
        <span className="item-time">
          <em>{dTime}</em>
          <br />
          <em className="em-light">
            {aTime} <i className="time-after"></i>{' '}
          </em>
        </span>
        <span className="item-stations">
          <em>
            <i className="train-station train-state">始</i>
            {dStation}
          </em>
          <br />
          <em className="em-light">
            <i className="train-station train-end">终</i>
            {aStation}
          </em>
        </span>
        <span className="item-train">
          <em>{trainNumber}</em>
          <br />
          <em className="em-light">{time}</em>
        </span>
        <span className="item-ticket">
          <em>{priceMsg}</em>
          <br />
          <em className="em-light-orange">可抢票</em>
        </span>
      </a>
    </li>
  )
}

interface ListProps {
  list: TrainProps
}
const List: FC<ListProps> = memo(props => {
  const { list } = props
  return (
    <ul className="list">
      {list && list.map(item => <ListItem key={item.trainNumber} {...item} />)}
    </ul>
  )
})

export default List
