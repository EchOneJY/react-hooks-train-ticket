import {
  ToProp,
  FromProp,
  DepartDateProp,
  VisibleProp,
  OrderTypeProp,
  TrainProps,
  CheckedProps,
  TypesProps
} from '../types'
import { Dispatch } from 'redux'

export const ACTION_SET_FROM = 'SET_FROM'
export const ACTION_SET_TO = 'SET_TO'
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE'
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED'
export const ACTION_SET_SEARCH_PARSED = 'SET_SEARCH_PARSED'
export const ACTION_SET_TRAIN_LIST = 'SET_TRAIN_LIST'
export const ACTION_SET_ORDER_TYPE = 'SET_ORDER_TYPE'
export const ACTION_SET_ONLY_TICKETS = 'ACTION_SET_ONLY_TICKETS'
export const ACTION_SET_TICKET_TYPES = 'SET_TICKET_TYPES'
export const ACTION_SET_TRAIN_TYPES = 'SET_TRAIN_TYPES'
export const ACTION_SET_DEPART_STATIONS = 'SET_DEPART_STATIONS'
export const ACTION_SET_ARRIVE_STATIONS = 'SET_ARRIVE_STATIONS'
export const ACTION_SET_CHECKED_TICKET_TYPES = 'SET_CHECKED_TICKET_TYPES'
export const ACTION_SET_CHECKED_TRAIN_TYPES = 'SET_CHECKED_TRAIN_TYPES'
export const ACTION_SET_CHECKED_DEPART_STATIONS = 'SET_CHECKED_DEPART_STATIONS'
export const ACTION_SET_CHECKED_ARRIVE_STATIONS = 'SET_CHECKED_ARRIVE_STATIONS'
export const ACTION_SET_DEPART_TIME_START = 'ACTION_SET_DEPART_TIME_START'
export const ACTION_SET_DEPART_TIME_END = 'SET_DEPART_TIME_END'
export const ACTION_SET_ARRIVE_TIME_START = 'SET_ARRIVE_TIME_START'
export const ACTION_SET_ARRIVE_TIME_END = 'SET_ARRIVE_TIME_END'
export const ACTION_SET_IS_FILTERS_VISIBLE = 'SET_IS_FILTERS_VISIBLE'
export function setFrom(from: FromProp) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  }
}

export function setTo(to: ToProp) {
  return {
    type: ACTION_SET_TO,
    payload: to
  }
}

export function setDepartDate(date: DepartDateProp) {
  return {
    type: ACTION_SET_DEPART_DATE,
    payload: date
  }
}

export function setHighSpeed(bool: VisibleProp) {
  return {
    type: ACTION_SET_HIGH_SPEED,
    payload: bool
  }
}

export function toggleHighSpeed() {
  return (dispatch: Dispatch, getState: any) => {
    const { highSpeed } = getState()
    dispatch(setHighSpeed(!highSpeed))
  }
}

export function prevDate() {
  return (dispatch: Dispatch, getState: any) => {
    const { departDate } = getState()
    const prevDate = departDate - 24 * 60 * 60 * 1000
    dispatch(setDepartDate(prevDate))
  }
}

export function nextDate() {
  return (dispatch: Dispatch, getState: any) => {
    const { departDate } = getState()
    const nextDate = departDate + 24 * 60 * 60 * 1000
    dispatch(setDepartDate(nextDate))
  }
}

export function setTrainList(list: TrainProps) {
  return {
    type: ACTION_SET_TRAIN_LIST,
    payload: list
  }
}

export function setOrderType(type: OrderTypeProp) {
  return {
    type: ACTION_SET_ORDER_TYPE,
    payload: type
  }
}

export function toggleOrderType() {
  return (dispatch: Dispatch, getState: any) => {
    const { orderType } = getState()
    dispatch(setOrderType(orderType === 'depart' ? 'duration' : 'depart'))
  }
}

export function setOnlyTickets(bool: VisibleProp) {
  return {
    type: ACTION_SET_ONLY_TICKETS,
    payload: bool
  }
}

export function toggleOnlyTickets() {
  return (dispatch: Dispatch, getState: any) => {
    const { onlyTickets } = getState()
    dispatch(setOnlyTickets(!onlyTickets))
  }
}

export function setTicketTypes(tickets: TypesProps) {
  return {
    type: ACTION_SET_TICKET_TYPES,
    payload: tickets
  }
}

export function setCheckedTicketTypes(checked: CheckedProps) {
  return {
    type: ACTION_SET_CHECKED_TICKET_TYPES,
    payload: checked
  }
}

export function setTrainTypes(types: TypesProps) {
  return {
    type: ACTION_SET_TRAIN_TYPES,
    payload: types
  }
}

export function setCheckedTrainTypes(checked: CheckedProps) {
  return {
    type: ACTION_SET_CHECKED_TRAIN_TYPES,
    payload: checked
  }
}

export function setDepartStations(stations: TypesProps) {
  return {
    type: ACTION_SET_DEPART_STATIONS,
    payload: stations
  }
}

export function setCheckedDepartStations(checked: CheckedProps) {
  return {
    type: ACTION_SET_CHECKED_DEPART_STATIONS,
    payload: checked
  }
}

export function setArriveStations(stations: TypesProps) {
  return {
    type: ACTION_SET_ARRIVE_STATIONS,
    payload: stations
  }
}

export function setCheckedArriveStations(checked: CheckedProps) {
  return {
    type: ACTION_SET_CHECKED_ARRIVE_STATIONS,
    payload: checked
  }
}

export function fetchTrainInfo(url: string) {
  return (dispatch: Dispatch) => {
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const {
          dataMap: {
            directTrainInfo: {
              trains,
              filter: { ticketType, trainType, depStation, arrStation }
            }
          }
        } = res

        dispatch(setTrainList(trains))
        dispatch(setTicketTypes(ticketType))
        dispatch(setTrainTypes(trainType))
        dispatch(setDepartStations(depStation))
        dispatch(setArriveStations(arrStation))
      })
  }
}

export function setDepartTimeStart(departTimeStart: number) {
  return {
    type: ACTION_SET_DEPART_TIME_START,
    payload: departTimeStart
  }
}

export function setDepartTimeEnd(departTimeEnd: number) {
  return {
    type: ACTION_SET_DEPART_TIME_END,
    payload: departTimeEnd
  }
}

export function setArriveTimeStart(arriveTimeStart: number) {
  return {
    type: ACTION_SET_ARRIVE_TIME_START,
    payload: arriveTimeStart
  }
}

export function setArriveTimeEnd(arriveTimeEnd: number) {
  return {
    type: ACTION_SET_ARRIVE_TIME_END,
    payload: arriveTimeEnd
  }
}

export function toggleIsFiltersVisible() {
  return (dispatch: Dispatch, getState: any) => {
    const { isFiltersVisible } = getState()

    dispatch({
      type: ACTION_SET_IS_FILTERS_VISIBLE,
      payload: !isFiltersVisible
    })
  }
}

export function setSearchParsed(bool: VisibleProp) {
  return {
    type: ACTION_SET_SEARCH_PARSED,
    payload: bool
  }
}
