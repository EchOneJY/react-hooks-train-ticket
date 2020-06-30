import React, { FC, memo, useMemo } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import './styles/Nav.css'
import { DepartDateProp } from '../query/types'

interface NavProps {
  date: DepartDateProp
  prev: () => void
  next: () => void
  isPrevDisabled: boolean
  isNextDisabled: boolean
}

const Nav: FC<NavProps> = memo(props => {
  const { date, prev, next, isPrevDisabled, isNextDisabled } = props
  const currentString = useMemo(() => {
    const d = dayjs(date)
    return d.format('M月D日') + d.locale('zh-cn').format('ddd')
  }, [date])

  return (
    <div className="nav">
      <span
        onClick={prev}
        className={classNames('nav-prev', { 'nav-disabled': isPrevDisabled })}
      >
        前一天
      </span>
      <span className="nav-current">{currentString}</span>
      <span
        onClick={next}
        className={classNames('nav-next', { 'nav-disabled': isNextDisabled })}
      >
        后一天
      </span>
    </div>
  )
})

export default Nav
