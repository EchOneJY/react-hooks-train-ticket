import { createStore, combineReducers, applyMiddleware } from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'

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
    checkedTicketTypes: {},
    trainTypes: null,
    checkedTrainTypes: {},
    departStations: null,
    checkedDepartStations: {},
    arriveStations: null,
    checkedArriveStations: {},
    departTimeStart: 0,
    departTimeEnd: 24,
    arriveTimeStart: 0,
    arriveTimeEnd: 24,
    isFiltersVisible: false,
    searchParsed: false
  },
  applyMiddleware(thunk)
)
