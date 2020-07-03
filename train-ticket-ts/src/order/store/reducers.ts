import {
  ACTION_SET_TRAIN_NUMBER,
  ACTION_SET_DEPART_STATION,
  ACTION_SET_ARRIVE_STATION,
  ACTION_SET_DEPART_DATE,
  ACTION_SET_ARRIVE_DATE,
  ACTION_SET_DEPART_TIME,
  ACTION_SET_ARRIVE_TIME,
  ACTION_SET_DURATION_TIME,
  ACTION_SET_SEAT_TYPE,
  ACTION_SET_SEARCH_PARSED,
  ACTION_SET_PRICE,
  ACTION_SET_PASSENGER,
  ACTION_SET_MENU,
  ACTION_SET_MENU_VISIBLE
} from './actions'

import {
  ActionProps,
  TrainNumberProp,
  StationProp,
  DateProp,
  TimeStrProp,
  PriceProp,
  SeatTypeProp,
  VisibleProp,
  PassengerProps,
  MenuProps
} from '../types'

export default {
  trainNumber(
    state: TrainNumberProp = null,
    action: ActionProps<TrainNumberProp>
  ) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_TRAIN_NUMBER:
        return payload
      default:
    }
    return state
  },

  departStation(state: StationProp = null, action: ActionProps<StationProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DEPART_STATION:
        return payload
      default:
    }
    return state
  },

  arriveStation(state: StationProp = null, action: ActionProps<StationProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_ARRIVE_STATION:
        return payload
      default:
    }
    return state
  },

  departDate(state: DateProp = Date.now(), action: ActionProps<DateProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DEPART_DATE:
        return payload
      default:
    }
    return state
  },

  arriveDate(state: DateProp = Date.now(), action: ActionProps<DateProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_ARRIVE_DATE:
        return payload
      default:
    }
    return state
  },

  departTimeStr(state: TimeStrProp = null, action: ActionProps<TimeStrProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DEPART_TIME:
        return payload
      default:
    }
    return state
  },
  arriveTimeStr(state: TimeStrProp = null, action: ActionProps<TimeStrProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_ARRIVE_TIME:
        return payload
      default:
    }
    return state
  },

  durationTimeStr(state: TimeStrProp = null, action: ActionProps<TimeStrProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DURATION_TIME:
        return payload
      default:
    }
    return state
  },

  seatType(state: SeatTypeProp = null, action: ActionProps<SeatTypeProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_SEAT_TYPE:
        return payload
      default:
    }
    return state
  },

  price(state: PriceProp = null, action: ActionProps<PriceProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_PRICE:
        return payload
      default:
    }
    return state
  },

  passengers(
    state: PassengerProps[] = [],
    action: ActionProps<PassengerProps[]>
  ) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_PASSENGER:
        return payload
      default:
    }
    return state
  },

  menu(state: MenuProps = null, action: ActionProps<MenuProps>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_MENU:
        return payload
      default:
    }
    return state
  },

  isMenuVisible(state: VisibleProp = false, action: ActionProps<VisibleProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_MENU_VISIBLE:
        return payload
      default:
    }
    return state
  },

  searchParsed(state: VisibleProp = false, action: ActionProps<VisibleProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_SEARCH_PARSED:
        return payload
      default:
    }
    return state
  }
}
