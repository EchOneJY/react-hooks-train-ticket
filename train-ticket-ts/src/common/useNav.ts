import { useCallback } from 'react'
import { Dispatch } from 'redux'
import { timeZero } from './utils'
import { DepartDateProp } from '../query/types'

export default function useNav(
  departDate: DepartDateProp,
  dispatch: Dispatch,
  prevDate: any,
  nextDate: any
) {
  const isPrevDisabled = timeZero(departDate) <= timeZero()
  const isNextDisabled =
    timeZero(departDate) - timeZero() > 20 * 24 * 60 * 60 * 1000

  const prev = useCallback(() => {
    if (isPrevDisabled) return
    dispatch(prevDate())
  }, [isPrevDisabled])

  const next = useCallback(() => {
    if (isNextDisabled) return
    dispatch(nextDate())
  }, [isNextDisabled])

  return {
    isPrevDisabled,
    isNextDisabled,
    prev,
    next
  }
}
