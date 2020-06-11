import React, { useEffect, useCallback, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import './App.css'
import URI from 'urijs'
import dayjs from 'dayjs'
import { h0 } from '../common/fp'
import { TrainContext } from './context'

import Header from '../common/Header'
import Nav from '../common/Nav'
import useNav from '../common/useNav'
import Detail from '../common/Detail'
import Candidate from './Candidate'

import {
  setTrainNumber,
  setSearchParsed,
  prevDate,
  nextDate,
  setDepartStation,
  setArriveStation,
  setDepartTime,
  setArriveTime,
  setDepartDate,
  setArriveDate,
  setDurationTime,
  setTickets,
  toggleScheduleVisible
} from './actions'

const Schedule = lazy(() => import('./Schedule'))

function App(props) {
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

    dispatch
  } = props

  const onBack = useCallback(() => window.history.back(), [])

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search)
    const { trainNumber, dStation, aStation, date } = queries

    dispatch(setTrainNumber(trainNumber))
    dispatch(setDepartStation(dStation))
    dispatch(setArriveStation(aStation))
    dispatch(setDepartDate(h0(dayjs(date).valueOf())))

    dispatch(setSearchParsed(true))
  }, [])

  useEffect(() => {
    document.title = trainNumber
  }, [trainNumber])

  useEffect(() => {
    if (!searchParsed) return

    const url = new URI('/rest/ticket')
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
      .setSearch('trainNumber', trainNumber)
      .toString()

    fetch(url)
      .then(res => res.json())
      .then(res => {
        const { detail, candidates } = res

        const { departTimeStr, durationStr, arriveTimeStr, arriveDate } = detail

        dispatch(setDepartTime(departTimeStr))
        dispatch(setArriveDate(arriveDate))
        dispatch(setArriveTime(arriveTimeStr))
        dispatch(setDurationTime(durationStr))
        dispatch(setTickets(candidates))
      })
  }, [searchParsed, departDate, trainNumber])

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
    <div className="app">
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
        value={{
          trainNumber,
          departStation,
          arriveStation,
          departDate
        }}
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

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch }
  }
)(App)
