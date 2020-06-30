import React, { FC, useEffect, useCallback } from 'react'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import URI from 'urijs'

import {
  StoreState,
  ToProp,
  FromProp,
  VisibleProp,
  DepartDateProp,
  TrainProps,
  TypesProps,
  FetchTrainProp
} from './types'

import Header from '../common/Header'
import Nav from '../common/Nav'
import useNav from '../common/useNav'
import List from './List'

import './styles/App.css'
import dayjs from 'dayjs'

import {
  prevDate,
  nextDate,
  setFrom,
  setTo,
  setDepartDate,
  setHighSpeed,
  fetchTrainInfo,
  setSearchParsed
} from './store/actions'
import { timeZero } from '../common/utils'

interface QueryProps {
  to: ToProp
  from: FromProp
  date: DepartDateProp
  highSpeed: VisibleProp
}

interface AppProps {
  to: ToProp
  from: FromProp
  highSpeed: VisibleProp
  departDate: DepartDateProp
  searchParsed: VisibleProp
  trainList: TrainProps
  trainType: TypesProps
  ticketType: TypesProps
  departStations: TypesProps
  arriveStations: TypesProps
  fetchTrain: FetchTrainProp
  dispatch: Dispatch
}

const App: FC<AppProps> = props => {
  const {
    to,
    from,
    departDate,
    highSpeed,
    trainList,
    trainType,
    ticketType,
    departStations,
    arriveStations,
    searchParsed,
    fetchTrain,
    dispatch
  } = props

  useEffect(() => {
    const queriesDefault = {
      to: '',
      from: '',
      date: Date.now(),
      highSpeed: false
    }
    const queries: QueryProps = Object.assign(
      queriesDefault,
      URI.parseQuery(window.location.search)
    )

    const { to, from, date, highSpeed } = queries

    dispatch(setFrom(from))
    dispatch(setTo(to))
    dispatch(setDepartDate(timeZero(dayjs(date).valueOf())))
    dispatch(setHighSpeed(highSpeed === true))

    dispatch(setSearchParsed(true))
  }, [])

  useEffect(() => {
    if (!searchParsed) {
      return
    }
    const url = new URI('/rest/query')
      .setSearch('from', from || '')
      .setSearch('to', to || '')
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD') || '')
      .setSearch('highSpeed', highSpeed + '' || 'false')
      .toString()

    fetchTrain(url)
  }, [from, to, departDate, highSpeed])

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    dispatch,
    prevDate,
    nextDate
  )

  if (!searchParsed) {
    return null
  }

  return (
    <div>
      <div className="header-wrapper">
        <Header title={`${from}-${to}`} onBack={onBack} />
      </div>
      <Nav
        date={departDate}
        prev={prev}
        next={next}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
      <List list={trainList} />
    </div>
  )
}

const mapStateToProps = ({
  to,
  from,
  departDate,
  highSpeed,
  searchParsed,
  trainList,
  trainType,
  ticketType,
  departStations,
  arriveStations
}: StoreState) => {
  return {
    to,
    from,
    departDate,
    highSpeed,
    searchParsed,
    trainList,
    trainType,
    ticketType,
    departStations,
    arriveStations
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { dispatch, fetchTrain: bindActionCreators(fetchTrainInfo, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
