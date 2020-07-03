import React, { FC, useCallback, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import URI from 'urijs'
import dayjs from 'dayjs'

import './styles/App.css'
import Header from '../common/Header'
import Nav from '../common/Nav'
import Detail from '../common/Detail'
import Ticket from './components/Ticket'
import Passengers from './components/Passengers'
import Menu from './components/Menu'

import useNav from '../common/useNav'

import {
  TrainNumberProp,
  DateProp,
  StationProp,
  TimeStrProp,
  PriceProp,
  SeatTypeProp,
  PassengerProps,
  VisibleProp,
  MenuProps,
  StoreState
} from './types'

import {
  setTrainNumber,
  setDepartStation,
  setArriveStation,
  setDepartDate,
  setSeatType,
  fetchInitial,
  setSearchParsed,
  prevDate,
  nextDate,
  createAdult,
  createChild,
  removePassenger,
  updatePassenger,
  showGenderMenu,
  showTicketTypeMenu,
  showFollowAdultMenu,
  hideMenu
} from './store/actions'

interface QueryProps {
  trainNumber: TrainNumberProp
  dStation: StationProp
  aStation: StationProp
  type: SeatTypeProp
  date: DateProp
}

interface AppProps {
  trainNumber: TrainNumberProp
  departDate: DateProp
  arriveDate: DateProp
  departStation: StationProp
  arriveStation: StationProp
  departTimeStr: TimeStrProp
  arriveTimeStr: TimeStrProp
  durationTimeStr: TimeStrProp
  price: PriceProp
  seatType: SeatTypeProp
  passengers: PassengerProps[]
  menu: MenuProps
  isMenuVisible: VisibleProp
  searchParsed: VisibleProp

  fetchInfo: (url: string) => (dispatch: Dispatch, getState?: any) => void
  dispatch: Dispatch
}

const App: FC<AppProps> = props => {
  const {
    trainNumber,
    departDate,
    arriveDate,
    departStation,
    arriveStation,
    departTimeStr,
    arriveTimeStr,
    durationTimeStr,
    price,
    seatType,
    passengers,
    menu,
    isMenuVisible,
    searchParsed,

    fetchInfo,
    dispatch
  } = props

  const onBack = useCallback(() => window.history.back(), [])

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    dispatch,
    prevDate,
    nextDate
  )

  useEffect(() => {
    const queriesDefault = {
      trainNumber: null,
      dStation: null,
      aStation: null,
      type: null,
      date: Date.now()
    }
    const queries: QueryProps = Object.assign(
      queriesDefault,
      URI.parseQuery(window.location.search)
    )
    const { trainNumber, dStation, aStation, type, date } = queries
    dispatch(setTrainNumber(trainNumber))
    dispatch(setDepartStation(dStation))
    dispatch(setArriveStation(aStation))
    dispatch(setDepartDate(dayjs(date).valueOf()))
    dispatch(setSeatType(type))

    dispatch(setSearchParsed(true))
  }, [dispatch])

  useEffect(() => {
    if (!searchParsed) return

    const url = new URI('/rest/order')
      .setSearch('trainNumber', trainNumber + '')
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
      .toString()

    fetchInfo(url)
  }, [trainNumber, departDate])

  const passengerCbs = useMemo(() => {
    return bindActionCreators(
      {
        createAdult,
        createChild,
        removePassenger,
        updatePassenger,
        showGenderMenu,
        showTicketTypeMenu,
        showFollowAdultMenu
      },
      dispatch
    )
  }, [])

  const menuCbs = useMemo(() => {
    return bindActionCreators(
      {
        hideMenu
      },
      dispatch
    )
  }, [])

  const currentMenu = useMemo(() => {
    if (menu && Object.keys(menu).length) {
      return menu
    } else {
      return {
        options: [],
        onPress: () => {}
      }
    }
  }, [menu])

  if (!searchParsed) {
    return null
  }

  return (
    <div className="order">
      <div className="header-wrapper">
        <Header title={trainNumber + ''} onBack={onBack} />
      </div>
      <Nav
        date={departDate}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        prev={prev}
        next={next}
      />
      <div className="detail-wrapper">
        <Detail
          departStation={departStation}
          departTimeStr={departTimeStr}
          departDate={departDate}
          trainNumber={trainNumber}
          durationStr={durationTimeStr}
          arriveStation={arriveStation}
          arriveTimeStr={arriveTimeStr}
          arriveDate={arriveDate}
        >
          <span style={{ display: 'block' }} className="train-icon"></span>
        </Detail>
      </div>
      <Ticket price={price} type={seatType} />
      <Passengers passengers={passengers} {...passengerCbs} />
      <Menu show={isMenuVisible} {...menuCbs} {...currentMenu} />
    </div>
  )
}

const mapToStateProps = ({
  trainNumber,
  departDate,
  arriveDate,
  departStation,
  arriveStation,
  departTimeStr,
  arriveTimeStr,
  durationTimeStr,
  price,
  seatType,
  passengers,
  menu,
  isMenuVisible,
  searchParsed
}: StoreState) => {
  return {
    trainNumber,
    departDate,
    arriveDate,
    departStation,
    arriveStation,
    departTimeStr,
    arriveTimeStr,
    durationTimeStr,
    price,
    seatType,
    passengers,
    menu,
    isMenuVisible,
    searchParsed
  }
}

const mapToDispatchProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    fetchInfo: bindActionCreators(fetchInitial, dispatch)
  }
}

export default connect(mapToStateProps, mapToDispatchProps)(App)
