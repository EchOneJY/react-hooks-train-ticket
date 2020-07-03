import React, { FC, useEffect, useCallback, lazy, Suspense } from 'react'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import URI from 'urijs'
import dayjs from 'dayjs'

import { timeZero } from '../common/utils'
import './styles/App.css'

import Header from '../common/Header'
import Nav from '../common/Nav'
import useNav from '../common/useNav'
import Detail from '../common/Detail'
import Candidate from './components/Candidate'

import { TrainContext } from './context'

import {
  TrainNumberProp,
  DateProp,
  StationProp,
  TimeStrProp,
  VisibleProp,
  TicketsProps,
  StoreState
} from './types'

import {
  prevDate,
  nextDate,
  setTrainNumber,
  setDepartStation,
  setArriveStation,
  setDepartDate,
  setSearchParsed,
  toggleScheduleVisible,
  fetchTicketInfo
} from './store/actions'

interface QueryProps {
  trainNumber: TrainNumberProp
  dStation: StationProp
  aStation: StationProp
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
  durationStr: TimeStrProp
  tickets: TicketsProps
  isScheduleVisible: VisibleProp
  searchParsed: VisibleProp
  fetchInfo: (url: string) => (dispatch: Dispatch, getState?: any) => void
  dispatch: Dispatch
}

const Schedule = lazy(() => import('./components/Schedule'))

const App: FC<AppProps> = props => {
  const {
    trainNumber,
    departDate,
    arriveDate,
    departStation,
    arriveStation,
    departTimeStr,
    arriveTimeStr,
    durationStr,
    tickets,
    isScheduleVisible,
    searchParsed,

    fetchInfo,
    dispatch
  } = props

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  useEffect(() => {
    const queriesDefault = {
      trainNumber: null,
      dStation: null,
      aStation: null,
      date: Date.now()
    }
    const queries: QueryProps = Object.assign(
      queriesDefault,
      URI.parseQuery(window.location.search)
    )
    const { trainNumber, dStation, aStation, date } = queries

    dispatch(setTrainNumber(trainNumber))
    dispatch(setDepartStation(dStation))
    dispatch(setArriveStation(aStation))
    dispatch(setDepartDate(timeZero(dayjs(date).valueOf())))

    dispatch(setSearchParsed(true))
  }, [dispatch])

  useEffect(() => {
    document.title = trainNumber + ''
  }, [trainNumber])

  useEffect(() => {
    if (!searchParsed) return

    const url = new URI(
      'http://easy-mock.liuup.com/mock/5efef790339f163501d502b7/api/ticket/detail'
    )
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
      .setSearch('trainNumber', trainNumber + '')
      .toString()

    fetchInfo(url)
  }, [searchParsed, departDate, trainNumber, dispatch, fetchInfo])

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
          durationStr={durationStr}
          arriveStation={arriveStation}
          arriveTimeStr={arriveTimeStr}
          arriveDate={arriveDate}
        >
          <span className="left"></span>
          <span
            className="schedule"
            onClick={() => dispatch(toggleScheduleVisible(!isScheduleVisible))}
          >
            时刻表
          </span>
          <span className="right"></span>
        </Detail>
      </div>
      <TrainContext.Provider
        value={{ trainNumber, departStation, arriveStation, departDate }}
      >
        <Candidate tickets={tickets} />
      </TrainContext.Provider>
      {isScheduleVisible && (
        <div
          className="mask"
          onClick={() => dispatch(toggleScheduleVisible(!isScheduleVisible))}
        >
          <Suspense fallback={<div>loading</div>}>
            <Schedule
              date={departDate}
              trainNumber={trainNumber}
              departStation={departStation}
              arriveStation={arriveStation}
            />
          </Suspense>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({
  trainNumber,
  departDate,
  arriveDate,
  departStation,
  arriveStation,
  departTimeStr,
  arriveTimeStr,
  durationStr,
  tickets,
  isScheduleVisible,
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
    durationStr,
    tickets,
    isScheduleVisible,
    searchParsed
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    fetchInfo: bindActionCreators(fetchTicketInfo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
