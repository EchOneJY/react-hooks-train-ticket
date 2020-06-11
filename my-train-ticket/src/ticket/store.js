import { createStore, combineReducers, applyMiddleware } from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers(reducers),
  {
    trainNumber: null,
    departDate: Date.now(),
    arriveDate: Date.now(),
    departStation: null,
    arriveStation: null,
    departTimeStr: null,
    arriveTimeStr: null,
    durationStr: null,
    tickets: [],
    searchParsed: false,
    isScheduleVisible: false
  },
  applyMiddleware(thunk)
)
