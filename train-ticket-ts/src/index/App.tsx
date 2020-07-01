import React, { FC, useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import './styles/App.css'

import Header from '../common/Header'
import CitySelector from '../common/CitySelector'
import DateSelector from '../common/DateSelector'
import Journey from './components/Journey'
import DepartDate from './components/DepartDate'
import HighSpeed from './components/HighSpeed'
import Submit from './components/Submit'

import { StoreState } from './types'
import {
  exchangeFromTo,
  fetchCityData,
  showCitySelector,
  hideCitySelector,
  setSearchKey,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartDate,
  setHighSpeed
} from './store/actions'

import {
  ToProp,
  FromProp,
  SearchKeyProp,
  VisibleProp,
  CityDataProp,
  DepartDateProp
} from './types'
import { timeZero } from '../common/utils'

export interface AppProps {
  to: ToProp
  from: FromProp
  searchKey: SearchKeyProp
  isCitySelectorVisible: VisibleProp
  cityData: CityDataProp
  isLoadingCityData: VisibleProp
  departDate: DepartDateProp
  isDateSelectorVisible: VisibleProp
  highSpeed: VisibleProp
  dispatch: Dispatch
}

const App: FC<AppProps> = props => {
  const {
    to,
    from,
    isCitySelectorVisible,
    searchKey,
    cityData,
    isLoadingCityData,
    departDate,
    isDateSelectorVisible,
    highSpeed,
    dispatch
  } = props

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  const journeyCbs = useMemo(() => {
    return bindActionCreators({ exchangeFromTo, showCitySelector }, dispatch)
  }, [dispatch])

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        fetchCityData,
        onSelect: setSelectedCity,
        setSearchKey
      },
      dispatch
    )
  }, [dispatch])

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggle: setHighSpeed
      },
      dispatch
    )
  }, [dispatch])

  const departDateCbs = useMemo(() => {
    return bindActionCreators(
      {
        onClick: showDateSelector
      },
      dispatch
    )
  }, [dispatch])

  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector
      },
      dispatch
    )
  }, [dispatch])

  const onSelectDate = useCallback(
    day => {
      if (!day || day < timeZero()) return
      dispatch(setDepartDate(day))
      dispatch(hideDateSelector())
    },
    [dispatch]
  )

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="query.html" className="form">
        <Journey to={to} from={from} {...journeyCbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />
        <Submit />
      </form>
      {isCitySelectorVisible && (
        <CitySelector
          show={isCitySelectorVisible}
          searchKey={searchKey}
          cityData={cityData}
          loading={isLoadingCityData}
          {...citySelectorCbs}
        />
      )}
      {isDateSelectorVisible && (
        <DateSelector
          show={isDateSelectorVisible}
          onSelect={onSelectDate}
          {...dateSelectorCbs}
        />
      )}
    </div>
  )
}

export default connect(
  function mapStateToProps({
    to,
    from,
    searchKey,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    departDate,
    isDateSelectorVisible,
    highSpeed
  }: StoreState) {
    return {
      to,
      from,
      searchKey,
      isCitySelectorVisible,
      cityData,
      isLoadingCityData,
      departDate,
      isDateSelectorVisible,
      highSpeed
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    }
  }
)(App)
