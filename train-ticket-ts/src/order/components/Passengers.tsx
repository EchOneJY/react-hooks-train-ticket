import React, { FC, memo, useMemo } from 'react'
import { Dispatch } from 'redux'

import '../styles/Passengers.css'
import {
  PassengerProps,
  DispatchMiddleProp,
  DispatchMiddleParamProp
} from '../types'

type UpdateProps = (
  id: number,
  data: { [key: string]: string | number },
  removeKeys?: string[]
) => (dispatch: Dispatch, getState?: any) => void

interface PassengerCommonProps {
  removePassenger: DispatchMiddleParamProp<number>
  updatePassenger: UpdateProps
  showGenderMenu: DispatchMiddleParamProp<number>
  showTicketTypeMenu: DispatchMiddleParamProp<number>
  showFollowAdultMenu: DispatchMiddleParamProp<number>
}

interface PassengersProps extends PassengerCommonProps {
  passengers: PassengerProps[]
  createAdult: DispatchMiddleProp
  createChild: DispatchMiddleProp
}

interface PassengerComponentProps extends PassengerCommonProps {
  id: number
  name: string
  ticketType: string
  followAdultName?: string
  licenceNo?: string
  gender?: string
  birthday?: string
}

const Passenger: FC<PassengerComponentProps> = props => {
  const {
    id,
    name,
    ticketType,
    followAdultName,
    licenceNo,
    gender,
    birthday,
    removePassenger,
    updatePassenger,
    showGenderMenu,
    showTicketTypeMenu,
    showFollowAdultMenu
  } = props

  const isAdult = ticketType === 'adult'
  return (
    <li className="passenger">
      <i
        className="delete"
        onClick={() => {
          removePassenger(id)
        }}
      >
        -
      </i>
      <ol className="items">
        <li className="item">
          <label className="label name">姓名</label>
          <input
            type="text"
            className="input name"
            placeholder="乘客姓名"
            value={name}
            onChange={e => updatePassenger(id, { name: e.target.value })}
          />
          <label className="ticket-type" onClick={() => showTicketTypeMenu(id)}>
            {isAdult ? '成人票' : '儿童票'}
          </label>
        </li>
        {isAdult && (
          <li className="item">
            <label className="label licenceNo">身份证</label>
            <input
              type="text"
              className="input licenceNo"
              placeholder="证件号码"
              value={licenceNo}
              onChange={e => updatePassenger(id, { licenceNo: e.target.value })}
            />
          </li>
        )}
        {!isAdult && (
          <li className="item arrow">
            <label className="label gender">性别</label>
            <input
              type="text"
              className="input gender"
              placeholder="请选择"
              value={gender === 'male' ? '男' : '女'}
              readOnly
              onClick={() => showGenderMenu(id)}
            />
          </li>
        )}
        {!isAdult && (
          <li className="item">
            <label className="label birthday">出生日期</label>
            <input
              type="text"
              className="input birthday"
              placeholder="如 19951015"
              value={birthday}
              onChange={e => updatePassenger(id, { birthday: e.target.value })}
            />
          </li>
        )}
        {!isAdult && (
          <li className="item arrow">
            <label className="label followAdult">同行成人</label>
            <input
              type="text"
              className="input followAdult"
              placeholder="请选择"
              value={followAdultName}
              readOnly
              onClick={() => showFollowAdultMenu(id)}
            />
          </li>
        )}
      </ol>
    </li>
  )
}

const Passengers: FC<PassengersProps> = memo(props => {
  const {
    passengers,
    createAdult,
    createChild,
    removePassenger,
    updatePassenger,
    showGenderMenu,
    showTicketTypeMenu,
    showFollowAdultMenu
  } = props

  const nameMap = useMemo(() => {
    const ret: { [key: number]: string } = {}

    for (const passenger of passengers) {
      ret[passenger.id] = passenger.name
    }

    return ret
  }, [passengers])

  return (
    <div className="passengers">
      <ul>
        {passengers.map(passenger => (
          <Passenger
            {...passenger}
            key={passenger.id}
            followAdultName={
              (passenger.followAdult && nameMap[passenger.followAdult]) || ''
            }
            removePassenger={removePassenger}
            updatePassenger={updatePassenger}
            showGenderMenu={showGenderMenu}
            showTicketTypeMenu={showTicketTypeMenu}
            showFollowAdultMenu={showFollowAdultMenu}
          />
        ))}
      </ul>
      <section className="add">
        <div className="adult" onClick={() => createAdult()}>
          添加成人
        </div>
        <div className="child" onClick={() => createChild()}>
          添加儿童
        </div>
      </section>
    </div>
  )
})

export default Passengers
