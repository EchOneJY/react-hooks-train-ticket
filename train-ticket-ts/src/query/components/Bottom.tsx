import React, { FC, memo, useState, useMemo, useReducer } from 'react'
import classNames from 'classnames'

import '../styles/Bottom.css'
import Slider from './Slider'

import {
  VisibleProp,
  OrderTypeProp,
  TimeProp,
  CheckedProps,
  TypesProps,
  DispatchMiddleProp,
  ActionParamProp,
  ActionProps
} from '../types'

function checkedReducer(state: CheckedProps, action: ActionProps<string>) {
  const { type, payload } = action
  switch (type) {
    case 'toggle':
      let newState = { ...state }
      newState = { ...state }
      if (payload) {
        if (payload in newState) {
          delete newState[payload]
        } else {
          newState[payload] = true
        }
      }
      console.log(newState)
      return newState
    case 'reset':
      return {}
    default:
  }
  return state
}

interface FilterProps {
  name?: string
  checked: boolean
  value?: string
  dispatch: (value: ActionProps<string>) => void
}

const Filter: FC<FilterProps> = props => {
  const { name, checked, value, dispatch } = props
  return (
    <li
      className={classNames({ checked })}
      onClick={() => dispatch({ payload: value, type: 'toggle' })}
    >
      {name}
    </li>
  )
}

interface OptionProps {
  title: string
  options: TypesProps
  checkedMap: CheckedProps
  dispatch: (value: ActionProps<string>) => void
}

const Option: FC<OptionProps> = props => {
  const { title, options, checkedMap, dispatch } = props
  return (
    <div className="option">
      <h3>{title}</h3>
      <ul>
        {options &&
          options.map(option => {
            return (
              <Filter
                key={option.value}
                {...option}
                checked={checkedMap.hasOwnProperty(option.value)}
                dispatch={dispatch}
              />
            )
          })}
      </ul>
    </div>
  )
}

interface BottomModalProps {
  toggleIsFiltersVisible: DispatchMiddleProp
  ticketTypes: TypesProps
  trainTypes: TypesProps
  departStations: TypesProps
  arriveStations: TypesProps
  checkedTicketTypes: CheckedProps
  checkedTrainTypes: CheckedProps
  checkedDepartStations: CheckedProps
  checkedArriveStations: CheckedProps
  departTimeStart: TimeProp
  departTimeEnd: TimeProp
  arriveTimeStart: TimeProp
  arriveTimeEnd: TimeProp
  setCheckedTicketTypes: ActionParamProp<CheckedProps>
  setCheckedTrainTypes: ActionParamProp<CheckedProps>
  setCheckedDepartStations: ActionParamProp<CheckedProps>
  setCheckedArriveStations: ActionParamProp<CheckedProps>
  setDepartTimeStart: ActionParamProp<TimeProp>
  setDepartTimeEnd: ActionParamProp<TimeProp>
  setArriveTimeStart: ActionParamProp<TimeProp>
  setArriveTimeEnd: ActionParamProp<TimeProp>
}

const BottomModal: FC<BottomModalProps> = props => {
  const {
    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,
    toggleIsFiltersVisible
  } = props

  const [localCheckedTicketTypes, localCheckedTicketTypesDispatch] = useReducer(
    checkedReducer,
    checkedTicketTypes,
    () => {
      return {
        ...checkedTicketTypes
      }
    }
  )

  const [localCheckedTrainTypes, localCheckedTrainTypesDispatch] = useReducer(
    checkedReducer,
    checkedTrainTypes,
    () => {
      return {
        ...checkedTrainTypes
      }
    }
  )

  const [
    localCheckedDepartStations,
    localCheckedDepartStationsDispatch
  ] = useReducer(checkedReducer, checkedDepartStations, () => {
    return {
      ...checkedDepartStations
    }
  })

  const [
    localCheckedArriveStations,
    localCheckedArriveStationsDispatch
  ] = useReducer(checkedReducer, checkedArriveStations, () => {
    return {
      ...checkedArriveStations
    }
  })
  const [localDepartTimeStart, setLocalDepartTimeStart] = useState(
    departTimeStart
  )
  const [localDepartTimeEnd, setLocalDepartTimeEnd] = useState(departTimeEnd)
  const [localArriveTimeStart, setLocalArriveTimeStart] = useState(
    arriveTimeStart
  )
  const [localArriveTimeEnd, setLocalArriveTimeEnd] = useState(arriveTimeEnd)

  const optionsGroup = [
    {
      title: '坐席类型',
      options: ticketTypes,
      checkedMap: localCheckedTicketTypes,
      dispatch: localCheckedTicketTypesDispatch
    },
    {
      title: '车次类型',
      options: trainTypes,
      checkedMap: localCheckedTrainTypes,
      dispatch: localCheckedTrainTypesDispatch
    },
    {
      title: '出发车站',
      options: departStations,
      checkedMap: localCheckedDepartStations,
      dispatch: localCheckedDepartStationsDispatch
    },
    {
      title: '到达车站',
      options: arriveStations,
      checkedMap: localCheckedArriveStations,
      dispatch: localCheckedArriveStationsDispatch
    }
  ]

  function sure() {
    setCheckedTicketTypes(localCheckedTicketTypes)
    setCheckedTrainTypes(localCheckedTrainTypes)
    setCheckedDepartStations(localCheckedDepartStations)
    setCheckedArriveStations(localCheckedArriveStations)

    setDepartTimeStart(localDepartTimeStart)
    setDepartTimeEnd(localDepartTimeEnd)

    setArriveTimeStart(localArriveTimeStart)
    setArriveTimeEnd(localArriveTimeEnd)

    toggleIsFiltersVisible()
  }

  const isResetDisabled = useMemo(() => {
    return (
      Object.keys(localCheckedTicketTypes).length === 0 &&
      Object.keys(localCheckedTrainTypes).length === 0 &&
      Object.keys(localCheckedDepartStations).length === 0 &&
      Object.keys(localCheckedArriveStations).length === 0 &&
      localDepartTimeStart === 0 &&
      localDepartTimeEnd === 24 &&
      localArriveTimeStart === 0 &&
      localArriveTimeEnd === 24
    )
  }, [
    localCheckedTicketTypes,
    localCheckedTrainTypes,
    localCheckedDepartStations,
    localCheckedArriveStations,
    localDepartTimeStart,
    localDepartTimeEnd,
    localArriveTimeStart,
    localArriveTimeEnd
  ])

  function reset() {
    localCheckedTicketTypesDispatch({ type: 'reset' })
    localCheckedTrainTypesDispatch({ type: 'reset' })
    localCheckedDepartStationsDispatch({ type: 'reset' })
    localCheckedArriveStationsDispatch({ type: 'reset' })

    setLocalDepartTimeStart(0)
    setLocalDepartTimeEnd(24)

    setLocalArriveTimeStart(0)
    setLocalArriveTimeEnd(24)
  }

  return (
    <div className="bottom-modal">
      <div className="bottom-dialog">
        <div className="bottom-dialog-content">
          <div className="title">
            <span
              className={classNames('reset', { disabled: isResetDisabled })}
              onClick={reset}
            >
              重置
            </span>
            <span className="ok" onClick={sure}>
              确定
            </span>
          </div>
          <div className="options">
            {optionsGroup.map(group => (
              <Option key={group.title} {...group} />
            ))}
            <Slider
              title="出发时间"
              currentStartHours={localDepartTimeStart}
              currentEndHours={localDepartTimeEnd}
              onStartChanged={setLocalDepartTimeStart}
              onEndChanged={setLocalDepartTimeEnd}
            />
            <Slider
              title="到达时间"
              currentStartHours={localArriveTimeStart}
              currentEndHours={localArriveTimeEnd}
              onStartChanged={setLocalArriveTimeStart}
              onEndChanged={setLocalArriveTimeEnd}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface BottomProps extends BottomModalProps {
  toggleOrderType: DispatchMiddleProp
  toggleHighSpeed: DispatchMiddleProp
  toggleOnlyTickets: DispatchMiddleProp
  highSpeed: VisibleProp
  orderType: OrderTypeProp
  onlyTickets: VisibleProp
  isFiltersVisible: VisibleProp
}
const Bottom: FC<BottomProps> = memo(props => {
  const {
    toggleOrderType,
    toggleHighSpeed,
    toggleOnlyTickets,
    toggleIsFiltersVisible,
    highSpeed,
    orderType,
    onlyTickets,
    isFiltersVisible,

    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,

    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd
  } = props

  const noChecked = useMemo(() => {
    return (
      Object.keys(checkedTicketTypes).length === 0 &&
      Object.keys(checkedTrainTypes).length === 0 &&
      Object.keys(checkedDepartStations).length === 0 &&
      Object.keys(checkedArriveStations).length === 0 &&
      departTimeStart === 0 &&
      departTimeEnd === 24 &&
      arriveTimeStart === 0 &&
      arriveTimeEnd === 24
    )
  }, [
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd
  ])
  return (
    <div className="bottom">
      <div className="bottom-filters">
        <span className="item" onClick={toggleOrderType}>
          <i className="icon">&#xf065;</i>
          {orderType === 'depart' ? '出发 早→晚' : '耗时 短→长'}
        </span>
        <span
          className={classNames('item', { 'item-on': highSpeed })}
          onClick={toggleHighSpeed}
        >
          <i className="icon">{highSpeed ? '\uf43f' : '\uf43e'}</i>
          只看高铁动车
        </span>
        <span
          className={classNames('item', { 'item-on': onlyTickets })}
          onClick={toggleOnlyTickets}
        >
          <i className="icon">{onlyTickets ? '\uf43d' : '\uf43c'}</i>
          只看有票
        </span>
        <span
          className={classNames('item', {
            'item-on': isFiltersVisible || !noChecked
          })}
          onClick={toggleIsFiltersVisible}
        >
          <i className="icon">{noChecked ? '\uf0f7' : '\uf446'}</i>
          综合筛选
        </span>
      </div>
      {isFiltersVisible && (
        <BottomModal
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
          setCheckedTicketTypes={setCheckedTicketTypes}
          setCheckedTrainTypes={setCheckedTrainTypes}
          setCheckedDepartStations={setCheckedDepartStations}
          setCheckedArriveStations={setCheckedArriveStations}
          setDepartTimeStart={setDepartTimeStart}
          setDepartTimeEnd={setDepartTimeEnd}
          setArriveTimeStart={setArriveTimeStart}
          setArriveTimeEnd={setArriveTimeEnd}
          toggleIsFiltersVisible={toggleIsFiltersVisible}
        />
      )}
    </div>
  )
})

export default Bottom
