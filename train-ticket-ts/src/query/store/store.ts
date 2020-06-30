import { createStore, combineReducers, applyMiddleware } from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'

const defaultTypeValue = {
  name: '',
  value: ''
}

export default createStore(
  combineReducers(reducers),
  {
    from: null,
    to: null,
    departDate: Date.now(),
    highSpeed: false,
    trainList: null,
    onlyTickets: false,
    orderType: 'depart',
    ticketTypes: null,
    checkedTicketTypes: defaultTypeValue,
    trainTypes: null,
    checkedTrainTypes: defaultTypeValue,
    departStations: null,
    checkedDepartStations: defaultTypeValue,
    arriveStations: null,
    checkedArriveStations: defaultTypeValue,
    departTimeStart: 0,
    departTimeEnd: 24,
    arriveTimeStart: 0,
    arriveTimeEnd: 24,
    isFiltersVisible: false,
    searchParsed: false
  },
  applyMiddleware(thunk)
)
