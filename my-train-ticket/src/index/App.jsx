import React, { useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { h0 } from '../common/fp'
import './App.css'

import Header from '../common/Header'
import CitySelector from '../common/CitySelector'
import DateSelector from '../common/DateSelector'
import DepartDate from './DepartDate'
import Journey from './Journey'
import HighSpeed from './HighSpeed'
import Submit from './Submit'

import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartDate,
  toggleHighSpeed
} from './actions'

function App(props) {
  const {
    to,
    from,
    dispatch,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    departDate,
    isDateSelectorVisible,
    highSpeed
  } = props

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  // const doExchangeFromTo = useCallback(() => {
  //   dispatch(exchangeFromTo())
  // }, [])

  // const doShowCitySelector = useCallback(m => {
  //   dispatch(showCitySelector(m))
  // }, [])

  const cbs = useMemo(() => {
    return bindActionCreators({ exchangeFromTo, showCitySelector }, dispatch)
  }, [])

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        fetchCityData,
        onSelect: setSelectedCity
      },
      dispatch
    )
  }, [])

  const departDateCbs = useMemo(() => {
    return bindActionCreators(
      {
        onClick: showDateSelector
      },
      dispatch
    )
  }, [])

  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector
      },
      dispatch
    )
  }, [])

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggle: toggleHighSpeed
      },
      dispatch
    )
  }, [])

  const onSelectDate = useCallback(day => {
    if (!day) return
    if (day < h0()) return
    dispatch(setDepartDate(day))
    dispatch(hideDateSelector())
  }, [])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="query.html" className="form">
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
      <DateSelector
        show={isDateSelectorVisible}
        onSelect={onSelectDate}
        {...dateSelectorCbs}
      />
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
