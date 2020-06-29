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

export default {
  trainNumber(state = null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_TRAIN_NUMBER:
        return payload
      default:
    }
    return state
  },
  departDate(state = Date.now(), action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DEPART_DATE:
        return payload
      default:
    }
    return state
  },
  arriveDate(state = Date.now(), action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_ARRIVE_DATE:
        return payload
      default:
    }
    return state
  },
  departStation(state = null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DEPART_STATION:
        return payload
      default:
    }
    return state
  },
  arriveStation(state = null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_ARRIVE_STATION:
        return payload
      default:
    }
    return state
  },
  departTimeStr(state = null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DEPART_TIME:
        return payload
      default:
    }
    return state
  },
  arriveTimeStr(state = null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_ARRIVE_TIME:
        return payload
      default:
    }
    return state
  },
  durationStr(state = null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DURATION:
        return payload
      default:
    }
    return state
  },
  tickets(state = [], action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_TICKETS:
        return payload
      default:
    }
    return state
  },
  isScheduleVisible(state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_TOGGLE_SCHEDULE_VISIBLE:
        return payload
      default:
    }
    return state
  },
  searchParsed(state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_SEARCH_PARSED:
        return payload
      default:
    }
    return state
  }
}
