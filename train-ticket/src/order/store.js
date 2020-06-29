import { createStore, combineReducers, applyMiddleware } from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers(reducers),
  {
    trainNumber: null,
    departStation: null,
    arriveStation: null,
    departDate: null,
    arriveDate: null,
    departTimeStr: null,
    arriveTimeStr: null,
    durationTime: null,
    seatType: null,
    price: null,
    passengers: [],
    menu: null,
    isMenuVisible: false,
    searchParsed: false
  },
  applyMiddleware(thunk)
)
