import { h0 } from '../common/fp'

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

export function setTrainNumber(number) {
  return {
    type: ACTION_SET_TRAIN_NUMBER,
    payload: number
  }
}

export function setDepartDate(date) {
  return {
    type: ACTION_SET_DEPART_DATE,
    payload: date
  }
}

export function setDepartStation(station) {
  return {
    type: ACTION_SET_DEPART_STATION,
    payload: station
  }
}

export function setArriveStation(station) {
  return {
    type: ACTION_SET_ARRIVE_STATION,
    payload: station
  }
}

export function setArriveDate(date) {
  return {
    type: ACTION_SET_ARRIVE_DATE,
    payload: date
  }
}

export function setDepartTime(time) {
  return {
    type: ACTION_SET_DEPART_TIME,
    payload: time
  }
}

export function setArriveTime(time) {
  return {
    type: ACTION_SET_ARRIVE_TIME,
    payload: time
  }
}

export function setDurationTime(time) {
  return {
    type: ACTION_SET_DURATION,
    payload: time
  }
}

export function setTickets(tickets) {
  return {
    type: ACTION_SET_TICKETS,
    payload: tickets
  }
}

export function nextDate() {
  return (dispatch, getState) => {
    const { departDate } = getState()

    dispatch(setDepartDate(h0(departDate) + 86400 * 1000))
  }
}

export function prevDate() {
  return (dispatch, getState) => {
    const { departDate } = getState()

    dispatch(setDepartDate(h0(departDate) - 86400 * 1000))
  }
}

export function toggleScheduleVisible(bool) {
  return {
    type: ACTION_TOGGLE_SCHEDULE_VISIBLE,
    payload: bool
  }
}

export function setSearchParsed(bool) {
  return {
    type: ACTION_SET_SEARCH_PARSED,
    payload: bool
  }
}
