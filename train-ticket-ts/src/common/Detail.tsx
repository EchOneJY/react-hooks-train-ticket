import React, { FC, memo, useMemo } from 'react'
import dayjs from 'dayjs'
import './styles/Detail.css'

import {
  StationProp,
  TimeStrProp,
  DateProp,
  TrainNumberProp
} from '../ticket/types'

function format(d: DateProp) {
  const date = dayjs(d)

  return date.format('MM-DD') + ' ' + date.locale('zh-cn').format('ddd')
}

interface DetailProps {
  trainNumber: TrainNumberProp
  departDate: DateProp
  arriveDate: DateProp
  departStation: StationProp
  arriveStation: StationProp
  departTimeStr: TimeStrProp
  durationStr: TimeStrProp
  arriveTimeStr: TimeStrProp
}

const Detail: FC<DetailProps> = memo(props => {
  const {
    departStation,
    departTimeStr,
    departDate,
    trainNumber,
    durationStr,
    arriveStation,
    arriveTimeStr,
    arriveDate
  } = props

  const departDateStr = useMemo(() => format(departDate), [departDate])
  const arriveDateStr = useMemo(() => format(arriveDate), [arriveDate])

  return (
    <div className="detail">
      <div className="content">
        <div className="left">
          <p className="city">{departStation}</p>
          <p className="time">{departTimeStr}</p>
          <p className="datee">{departDateStr}</p>
        </div>
        <div className="middle">
          <p className="train-name">{trainNumber}</p>
          <p className="train-mid">{props.children}</p>
          <p className="train-time">耗时{durationStr}</p>
        </div>
        <div className="right">
          <p className="city">{arriveStation}</p>
          <p className="time">{arriveTimeStr}</p>
          <p className="date">{arriveDateStr}</p>
        </div>
      </div>
    </div>
  )
})

export default Detail
