import {
  ActionProps,
  ToProp,
  FromProp,
  DepartDateProp,
  VisibleProp,
  OrderTypeProp,
  TrainProps,
  TypeProps,
  TypesProps
} from '../types'
import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_DEPART_DATE,
  ACTION_SET_HIGH_SPEED,
  ACTION_SET_SEARCH_PARSED,
  ACTION_SET_TRAIN_LIST,
  ACTION_SET_TICKET_TYPES,
  ACTION_SET_ONLY_TICKETS,
  ACTION_SET_TRAIN_TYPES,
  ACTION_SET_DEPART_STATIONS,
  ACTION_SET_ARRIVE_STATIONS,
  ACTION_SET_ORDER_TYPE,
  ACTION_SET_CHECKED_TICKET_TYPES,
  ACTION_SET_CHECKED_TRAIN_TYPES,
  ACTION_SET_CHECKED_DEPART_STATIONS,
  ACTION_SET_CHECKED_ARRIVE_STATIONS,
  ACTION_SET_DEPART_TIME_START,
  ACTION_SET_DEPART_TIME_END,
  ACTION_SET_ARRIVE_TIME_START,
  ACTION_SET_ARRIVE_TIME_END,
  ACTION_SET_IS_FILTERS_VISIBLE
} from './actions'

import { timeZero } from '../../common/utils'

export default {
  from(state: FromProp = null, actions: ActionProps<FromProp>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_FROM:
        return payload
      default:
    }
    return state
  },

  to(state: ToProp = null, actions: ActionProps<ToProp>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_TO:
        return payload
      default:
    }
    return state
  },

  departDate(
    state: DepartDateProp = timeZero(Date.now()),
    actions: ActionProps<DepartDateProp>
  ) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_DEPART_DATE:
        return payload
      default:
    }
    return state
  },

  highSpeed(state: VisibleProp = false, actions: ActionProps<VisibleProp>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_HIGH_SPEED:
        return payload
      default:
    }
    return state
  },

  trainList(state: TrainProps = null, actions: ActionProps<TrainProps>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_TRAIN_LIST:
        return payload
      default:
    }
    return state
  },

  orderType(
    state: OrderTypeProp = 'depart',
    actions: ActionProps<OrderTypeProp>
  ) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_ORDER_TYPE:
        return payload
      default:
    }
    return state
  },

  ticketTypes(state: TypesProps = null, actions: ActionProps<TypesProps>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_TICKET_TYPES:
        return payload
      default:
    }
    return state
  },

  checkedTicketTypes(
    state: TypeProps = { name: '', value: '' },
    actions: ActionProps<TypeProps>
  ) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_CHECKED_TICKET_TYPES:
        return payload
      default:
    }
    return state
  },

  onlyTickets(state: VisibleProp = false, actions: ActionProps<VisibleProp>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_ONLY_TICKETS:
        return payload
      default:
    }
    return state
  },

  trainTypes(state: TypesProps = null, actions: ActionProps<TypesProps>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_TRAIN_TYPES:
        return payload
      default:
    }
    return state
  },

  checkedTrainTypes(
    state: TypeProps = { name: '', value: '' },
    actions: ActionProps<TypeProps>
  ) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_CHECKED_TRAIN_TYPES:
        return payload
      default:
    }
    return state
  },

  departStations(state: TypesProps = null, actions: ActionProps<TypesProps>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_DEPART_STATIONS:
        return payload
      default:
    }
    return state
  },

  checkedDepartStations(
    state: TypeProps = { name: '', value: '' },
    actions: ActionProps<TypeProps>
  ) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_CHECKED_DEPART_STATIONS:
        return payload
      default:
    }
    return state
  },

  arriveStations(state: TypesProps = null, actions: ActionProps<TypesProps>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_ARRIVE_STATIONS:
        return payload
      default:
    }
    return state
  },

  checkedArriveStations(
    state: TypeProps = { name: '', value: '' },
    actions: ActionProps<TypeProps>
  ) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_CHECKED_ARRIVE_STATIONS:
        return payload
      default:
    }
    return state
  },

  departTimeStart(state: number = 0, actions: ActionProps<number>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_DEPART_TIME_START:
        return payload
      default:
    }
    return state
  },

  departTimeEnd(state: number = 0, actions: ActionProps<number>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_DEPART_TIME_END:
        return payload
      default:
    }
    return state
  },

  arriveTimeStart(state: number = 0, actions: ActionProps<number>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_ARRIVE_TIME_START:
        return payload
      default:
    }
    return state
  },

  arriveTimeEnd(state: number = 0, actions: ActionProps<number>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_ARRIVE_TIME_END:
        return payload
      default:
    }
    return state
  },

  isFiltersVisible(
    state: VisibleProp = false,
    actions: ActionProps<VisibleProp>
  ) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_IS_FILTERS_VISIBLE:
        return payload
      default:
    }
    return state
  },

  searchParsed(state: VisibleProp = false, actions: ActionProps<VisibleProp>) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_SEARCH_PARSED:
        return payload
      default:
    }
    return state
  }
}
