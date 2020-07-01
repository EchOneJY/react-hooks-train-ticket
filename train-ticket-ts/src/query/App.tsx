import React, { FC, useEffect, useMemo, useCallback } from 'react'
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
  CheckedProps,
  TypesProps,
  DispatchMiddleParamProp,
  OrderTypeProp
} from './types'

import Header from '../common/Header'
import Nav from '../common/Nav'
import useNav from '../common/useNav'
import List from './components/List'
import Bottom from './components/Bottom'

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
  setSearchParsed,
  toggleOrderType,
  toggleHighSpeed,
  toggleOnlyTickets,
  toggleIsFiltersVisible,
  setCheckedTicketTypes,
  setCheckedTrainTypes,
  setCheckedDepartStations,
  setCheckedArriveStations,
  setDepartTimeStart,
  setDepartTimeEnd,
  setArriveTimeStart,
  setArriveTimeEnd
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
  orderType: OrderTypeProp
  onlyTickets: VisibleProp
  trainTypes: TypesProps
  ticketTypes: TypesProps
  departStations: TypesProps
  arriveStations: TypesProps
  isFiltersVisible: VisibleProp
  checkedTicketTypes: CheckedProps
  checkedTrainTypes: CheckedProps
  checkedDepartStations: CheckedProps
  checkedArriveStations: CheckedProps
  departTimeStart: number
  departTimeEnd: number
  arriveTimeStart: number
  arriveTimeEnd: number
  fetchTrain: DispatchMiddleParamProp<string>
  dispatch: Dispatch
}

const App: FC<AppProps> = props => {
  const {
    to,
    from,
    departDate,
    highSpeed,
    trainList,
    orderType,
    onlyTickets,
    trainTypes,
    ticketTypes,
    departStations,
    arriveStations,
    searchParsed,
    isFiltersVisible,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
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
  }, [dispatch])

  useEffect(() => {
    if (!searchParsed) {
      return
    }
    const url = new URI('/rest/query')
      .setSearch('from', from || '')
      .setSearch('to', to || '')
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD') || '')
      .setSearch('orderType', orderType)
      .setSearch('highSpeed', highSpeed + '')
      .setSearch('onlyTickets', onlyTickets + '')
      .setSearch('checkedTicketTypes', Object.keys(checkedTicketTypes).join())
      .setSearch('checkedTrainTypes', Object.keys(checkedTrainTypes).join())
      .setSearch(
        'checkedDepartStations',
        Object.keys(checkedDepartStations).join()
      )
      .setSearch(
        'checkedArriveStations',
        Object.keys(checkedArriveStations).join()
      )
      .toString()

    fetchTrain(url)
  }, [
    from,
    to,
    departDate,
    orderType,
    highSpeed,
    searchParsed,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    fetchTrain
  ])

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    dispatch,
    prevDate,
    nextDate
  )

  const bottomCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggleOrderType,
        toggleHighSpeed,
        toggleOnlyTickets,
        toggleIsFiltersVisible,
        setCheckedTicketTypes,
        setCheckedTrainTypes,
        setCheckedDepartStations,
        setCheckedArriveStations,
        setDepartTimeStart,
        setDepartTimeEnd,
        setArriveTimeStart,
        setArriveTimeEnd
      },
      dispatch
    )
  }, [dispatch])

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
      <Bottom
        highSpeed={highSpeed}
        orderType={orderType}
        onlyTickets={onlyTickets}
        isFiltersVisible={isFiltersVisible}
        ticketTypes={ticketTypes}
        trainTypes={trainTypes}
        departStations={departStations}
        arriveStations={arriveStations}
        checkedTicketTypes={checkedTicketTypes}
        checkedTrainTypes={checkedTrainTypes}
        checkedDepartStations={checkedDepartStations}
        checkedArriveStations={checkedArriveStations}
        departTimeStart={departTimeStart}
        departTimeEnd={departTimeEnd}
        arriveTimeStart={arriveTimeStart}
        arriveTimeEnd={arriveTimeEnd}
        {...bottomCbs}
      />
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
  orderType,
  onlyTickets,
  trainTypes,
  ticketTypes,
  departStations,
  arriveStations,
  isFiltersVisible,
  checkedTicketTypes,
  checkedTrainTypes,
  checkedDepartStations,
  checkedArriveStations,
  departTimeStart,
  departTimeEnd,
  arriveTimeStart,
  arriveTimeEnd
}: StoreState) => {
  return {
    to,
    from,
    departDate,
    highSpeed,
    searchParsed,
    trainList,
    orderType,
    onlyTickets,
    trainTypes,
    ticketTypes,
    departStations,
    arriveStations,
    isFiltersVisible,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { dispatch, fetchTrain: bindActionCreators(fetchTrainInfo, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
