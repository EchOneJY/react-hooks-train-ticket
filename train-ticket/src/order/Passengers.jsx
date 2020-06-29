import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './Passengers.css'

const Passenger = memo(props => {
  const {
    id,
    name,
    ticketType,
    followAdultName,
    licenceNo,
    gender,
    birthday,
    onRemove,
    onUpdate,
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
          onRemove(id)
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
            onChange={e => onUpdate(id, { name: e.target.value })}
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
              onChange={e => onUpdate(id, { licenceNo: e.target.value })}
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
              value={gender}
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
              onChange={e => onUpdate(id, { birthday: e.target.value })}
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
})

const Passengers = memo(props => {
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
  return (
    <div className="passengers">
      <ul>
        {passengers.map(passenger => (
          <Passenger
            {...passenger}
            key={passenger.id}
            onRemove={removePassenger}
            onUpdate={updatePassenger}
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

Passengers.propTypes = {
  passengers: PropTypes.array.isRequired
}

export default Passengers
