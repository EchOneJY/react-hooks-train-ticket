import React, { useCallback, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import URI from 'urijs'
import dayjs from 'dayjs'
import './App.css'

import Header from '../common/Header'
import Nav from '../common/Nav'
import Detail from '../common/Detail'
import Ticket from './Ticket'
import Passengers from './Passengers'
import Menu from './Menu'

import useNav from '../common/useNav'

import {
  setTrainNumber,
  setDepartStation,
  setArriveStation,
  setDepartTime,
  setArriveTime,
  setDepartDate,
  setArriveDate,
  setDurationTime,
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
} from './actions'

function App(props) {
  const {
    trainNumber,
    departDate,
    arriveDate,
    departStation,
    arriveStation,
    departTimeStr,
    arriveTimeStr,
    durationTime,
    price,
    seatType,
    passengers,
    menu,
    isMenuVisible,
    searchParsed,

    dispatch
  } = props

  const onBack = useCallback(() => window.history.back(), [])

  useEffect(() => {
    const { trainNumber, dStation, aStation, type, date } = URI.parseQuery(
      window.location.search
    )
    dispatch(setTrainNumber(trainNumber))
    dispatch(setDepartStation(dStation))
    dispatch(setArriveStation(aStation))
    dispatch(setDepartDate(dayjs(date).valueOf()))
    dispatch(setSeatType(type))
    dispatch(setSearchParsed(true))
  }, [])

  useEffect(() => {
    if (!searchParsed) return

    const url = new URI('/rest/order')
      .setSearch('trainNumber', trainNumber)
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))

    dispatch(fetchInitial(url))
  }, [trainNumber, departDate])

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    dispatch,
    prevDate,
    nextDate
  )

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

  if (!searchParsed) {
    return null
  }

  return (
    <div className="order">
      <div className="header-wrapper">
        <Header title={trainNumber} onBack={onBack} />
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
          durationStr={durationTime}
          arriveStation={arriveStation}
          arriveTimeStr={arriveTimeStr}
          arriveDate={arriveDate}
        >
          <span style={{ display: 'block' }} className="train-icon"></span>
        </Detail>
      </div>
      <Ticket price={price} type={seatType} />
      <Passengers passengers={passengers} {...passengerCbs} />
      <Menu show={isMenuVisible} {...menu} {...menuCbs} />
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch }
  }
)(App)
