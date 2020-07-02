import { timeZero } from '../../common/utils'
import { Dispatch } from 'redux'

import {
  TrainNumberProp,
  DateProp,
  StationProp,
  TimeStrProp,
  VisibleProp,
  TicketsProps
} from '../types'

export const ACTION_SET_TRAIN_NUMBER = 'ACTION_SET_TRAIN_NUMBER'
export const ACTION_SET_DEPART_DATE = 'ACTION_SET_DEPART_DATE'
export const ACTION_SET_ARRIVE_DATE = 'ACTION_SET_ARRIVE_DATE'
export const ACTION_SET_DEPART_STATION = 'ACTION_SET_DEPART_STATION'
export const ACTION_SET_ARRIVE_STATION = 'ACTION_SET_ARRIVE_STATION'
export const ACTION_SET_DEPART_TIME = 'ACTION_SET_DEPART_TIME'
export const ACTION_SET_ARRIVE_TIME = 'ACTION_SET_ARRIVE_TIME'
export const ACTION_SET_DURATION = 'ACTION_SET_DURATION'
export const ACTION_SET_SEARCH_PARSED = 'ACTION_SET_SEARCH_PARSED'
export const ACTION_TOGGLE_SCHEDULE_VISIBLE = 'ACTION_TOGGLE_SCHEDULE_VISIBLE'
export const ACTION_SET_TICKETS = 'ACTION_SET_TICKETS'

export function setTrainNumber(number: TrainNumberProp) {
  return {
    type: ACTION_SET_TRAIN_NUMBER,
    payload: number
  }
}

export function setDepartDate(date: DateProp) {
  return {
    type: ACTION_SET_DEPART_DATE,
    payload: date
  }
}

export function setDepartStation(station: StationProp) {
  return {
    type: ACTION_SET_DEPART_STATION,
    payload: station
  }
}

export function setArriveStation(station: StationProp) {
  return {
    type: ACTION_SET_ARRIVE_STATION,
    payload: station
  }
}

export function setArriveDate(date: DateProp) {
  return {
    type: ACTION_SET_ARRIVE_DATE,
    payload: date
  }
}

export function setDepartTimeStr(time: TimeStrProp) {
  return {
    type: ACTION_SET_DEPART_TIME,
    payload: time
  }
}

export function setArriveTimeStr(time: TimeStrProp) {
  return {
    type: ACTION_SET_ARRIVE_TIME,
    payload: time
  }
}

export function setDurationTimeStr(time: TimeStrProp) {
  return {
    type: ACTION_SET_DURATION,
    payload: time
  }
}

export function setTickets(tickets: TicketsProps) {
  return {
    type: ACTION_SET_TICKETS,
    payload: tickets
  }
}

export function fetchTicketInfo(url: string) {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const { detail, candidates } = res

        const { departTimeStr, durationStr, arriveTimeStr, arriveDate } = detail

        dispatch(setDepartTimeStr(departTimeStr))
        dispatch(setArriveDate(arriveDate))
        dispatch(setArriveTimeStr(arriveTimeStr))
        dispatch(setDurationTimeStr(durationStr))
        dispatch(setTickets(candidates))
      })
  }
}

export function nextDate() {
  return (dispatch: Dispatch, getState: any) => {
    const { departDate } = getState()

    dispatch(setDepartDate(timeZero(departDate) + 86400 * 1000))
  }
}

export function prevDate() {
  return (dispatch: Dispatch, getState: any) => {
    const { departDate } = getState()

    dispatch(setDepartDate(timeZero(departDate) - 86400 * 1000))
  }
}

export function toggleScheduleVisible(bool: VisibleProp) {
  return {
    type: ACTION_TOGGLE_SCHEDULE_VISIBLE,
    payload: bool
  }
}

export function setSearchParsed(bool: VisibleProp) {
  return {
    type: ACTION_SET_SEARCH_PARSED,
    payload: bool
  }
}
