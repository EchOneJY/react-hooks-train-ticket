import React, { FC, memo } from 'react'
import { timeZero } from '../../common/utils'
import dayjs from 'dayjs'
import '../styles/DepartDate.css'
import { DepartDateProp } from '../types'

interface IProps {
  time: DepartDateProp
  onClick: (bool: true) => void
}

const DepartDate: FC<IProps> = memo(props => {
  const { time, onClick } = props

  const timeZeroOfDepart = timeZero(time)
  const departDate = new Date(timeZeroOfDepart)

  const departDateString = dayjs(timeZeroOfDepart).format('YYYY-MM-DD')

  const isToday = timeZeroOfDepart === timeZero()

  const weekString =
    '周' +
    ['日', '一', '二', '三', '四', '五', '六'][departDate.getDay()] +
    (isToday ? '今天' : '')

  return (
    <div className="depart-date" onClick={() => onClick(true)}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString}
      <span className="depart-week">{weekString}</span>
    </div>
  )
})

export default DepartDate
