import {
  ACTION_SET_TRAIN_NUMBER,
  ACTION_SET_DEPART_DATE,
  ACTION_SET_ARRIVE_DATE,
  ACTION_SET_SEARCH_PARSED,
  ACTION_SET_DEPART_STATION,
  ACTION_SET_ARRIVE_STATION,
  ACTION_SET_DEPART_TIME,
  ACTION_SET_ARRIVE_TIME,
  ACTION_SET_DURATION,
  ACTION_TOGGLE_SCHEDULE_VISIBLE,
  ACTION_SET_TICKETS
} from './actions'

import {
  TrainNumberProp,
  ActionProps,
  DateProp,
  StationProp,
  TimeStrProp,
  VisibleProp,
  TicketsProps
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
  durationStr(state: TimeStrProp = null, action: ActionProps<TimeStrProp>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DURATION:
        return payload
      default:
    }
    return state
  },
  tickets(state: TicketsProps = [], action: ActionProps<TicketsProps>) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_TICKETS:
        return payload
      default:
    }
    return state
  },
  isScheduleVisible(
    state: VisibleProp = false,
    action: ActionProps<VisibleProp>
  ) {
    const { type, payload } = action
    switch (type) {
      case ACTION_TOGGLE_SCHEDULE_VISIBLE:
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
