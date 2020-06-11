export const ACTION_SET_TRAIN_NUMBER = 'ACTION_SET_TRAIN_NUMBER'
export const ACTION_SET_DEPART_STATION = 'ACTION_SET_DEPART_STATION'
export const ACTION_SET_ARRIVE_STATION = 'ACTION_SET_ARRIVE_STATION'
export const ACTION_SET_DEPART_DATE = 'ACTION_SET_DEPART_DATE'
export const ACTION_SET_ARRIVE_DATE = 'ACTION_SET_ARRIVE_DATE'
export const ACTION_SET_DEPART_TIME = 'ACTION_SET_DEPART_TIME'
export const ACTION_SET_ARRIVE_TIME = 'ACTION_SET_ARRIVE_TIME'
export const ACTION_SET_DURATION_TIME = 'ACTION_SET_DURATION_TIME'
export const ACTION_SET_SEAT_TYPE = 'ACTION_SET_SEAT_TYPE'
export const ACTION_SET_SEARCH_PARSED = 'ACTION_SET_SEARCH_PARSED'
export const ACTION_SET_PRICE = 'ACTION_SET_PRICE'
export const ACTION_SET_PASSENGER = 'ACTION_SET_PASSENGER'
export const ACTION_SET_MENU = 'ACTION_SET_MENU'
export const ACTION_SET_MENU_VISIBLE = 'ACTION_SET_MENU_VISIBLE'

export function setTrainNumber(num) {
  return {
    type: ACTION_SET_TRAIN_NUMBER,
    payload: num
  }
}

export function setDepartStation(station) {
  return {
    type: ACTION_SET_DEPART_STATION,
    payload: station
  }
}

export function setArriveStation(station) {
  return {
    type: ACTION_SET_ARRIVE_STATION,
    payload: station
  }
}

export function fetchInitial(url) {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const {
          departTimeStr,
          arriveTimeStr,
          arriveDate,
          durationStr,
          price
        } = res
        dispatch(setDepartTime(departTimeStr))
        dispatch(setArriveTime(arriveTimeStr))
        dispatch(setArriveDate(arriveDate))
        dispatch(setDurationTime(durationStr))
        dispatch(setPrice(price))
      })
  }
}

export function setDepartDate(date) {
  return {
    type: ACTION_SET_DEPART_DATE,
    payload: date
  }
}

export function setArriveDate(date) {
  return {
    type: ACTION_SET_ARRIVE_DATE,
    payload: date
  }
}

export function setDepartTime(time) {
  return {
    type: ACTION_SET_DEPART_TIME,
    payload: time
  }
}

export function setArriveTime(time) {
  return {
    type: ACTION_SET_ARRIVE_TIME,
    payload: time
  }
}

export function setDurationTime(time) {
  return {
    type: ACTION_SET_DURATION_TIME,
    payload: time
  }
}

export function setSeatType(type) {
  return {
    type: ACTION_SET_SEAT_TYPE,
    payload: type
  }
}

export function setPrice(price) {
  return {
    type: ACTION_SET_PRICE,
    payload: price
  }
}

export function prevDate() {
  return (dispatch, getState) => {
    const { departDate } = getState()
    const prevDate = departDate - 24 * 60 * 60 * 1000
    dispatch(setDepartDate(prevDate))
  }
}

export function nextDate() {
  return (dispatch, getState) => {
    const { departDate } = getState()
    const nextDate = departDate + 24 * 60 * 60 * 1000
    dispatch(setDepartDate(nextDate))
  }
}

export function setPassenger(passenger) {
  return {
    type: ACTION_SET_PASSENGER,
    payload: passenger
  }
}

let passengerIdSeed = 0

export function createAdult() {
  return (dispatch, getState) => {
    const { passengers } = getState()
    console.log(passengers)
    for (const passenger of passengers) {
      const keys = Object.keys(passenger)
      for (const key of keys) {
        if (!passenger[key]) {
          alert('请补全信息后再添加')
          return
        }
      }
    }

    dispatch(
      setPassenger([
        ...passengers,
        {
          id: ++passengerIdSeed,
          ticketType: 'adult',
          name: '',
          licenceNo: '',
          seat: 'Z'
        }
      ])
    )
  }
}

export function createChild() {
  return (dispatch, getState) => {
    const { passengers } = getState()

    let adultFound = null
    for (const passenger of passengers) {
      const keys = Object.keys(passenger)
      for (const key of keys) {
        if (!passenger[key]) {
          alert('请补全信息后再添加')
          return
        }

        if (passenger.ticketType === 'adult') {
          adultFound = passenger.id
        }
      }
    }

    if (!adultFound) {
      alert('请至少正确添加一个同行成人')
      return
    }

    dispatch(
      setPassenger([
        ...passengers,
        {
          id: ++passengerIdSeed,
          name: '',
          ticketType: 'child',
          gender: 'none',
          birthday: '',
          followAdult: adultFound,
          seat: 'Z'
        }
      ])
    )
  }
}

export function removePassenger(id) {
  return (dispatch, getState) => {
    const { passengers } = getState()
    const newPassengers = passengers.filter(
      passenger => passenger.id !== id && passenger.followAdult !== id
    )

    dispatch(setPassenger(newPassengers))
  }
}

export function updatePassenger(id, data, removeKeys) {
  return (dispatch, getState) => {
    const { passengers } = getState()

    const newPassengers = [...passengers]
    for (let i in newPassengers) {
      if (passengers[i].id === id) {
        newPassengers[i] = Object.assign({}, passengers[i], data)

        if (removeKeys) {
          removeKeys.forEach(key => delete newPassengers[i][key])
        }

        break
      }
    }

    dispatch(setPassenger(newPassengers))
  }
}

export function setMenu(menu) {
  return {
    type: ACTION_SET_MENU,
    payload: menu
  }
}

export function setMenuVisible(bool) {
  return {
    type: ACTION_SET_MENU_VISIBLE,
    payload: bool
  }
}

export function showMenu(menu) {
  return dispatch => {
    dispatch(setMenu(menu))
    dispatch(setMenuVisible(true))
  }
}

export function hideMenu() {
  return dispatch => {
    dispatch(setMenuVisible(false))
  }
}

export function showGenderMenu(id) {
  return (dispatch, getState) => {
    const { passengers } = getState()

    const passenger = passengers.find(passenger => passenger.id === id)

    if (!passenger) return

    dispatch(
      showMenu({
        onPress(gender) {
          dispatch(updatePassenger(id, { gender }))
          dispatch(hideMenu())
        },
        options: [
          {
            title: '男',
            value: 'male',
            active: passenger.gender === 'male'
          },
          {
            title: '女',
            value: 'female',
            active: passenger.gender === 'female'
          }
        ]
      })
    )
  }
}

export function showFollowAdultMenu(id) {
  return (dispatch, getState) => {
    const { passengers } = getState()

    const passenger = passengers.find(passenger => passenger.id === id)

    if (!passenger) return

    dispatch(
      showMenu({
        onPress(followAdult) {
          dispatch(updatePassenger(id, { followAdult }))
          dispatch(hideMenu())
        },
        options: passengers
          .filter(passenger => passenger.ticketType === 'adult')
          .map(adult => {
            return {
              title: adult.name,
              value: adult.id,
              active: adult.id === passenger.followAdult
            }
          })
      })
    )
  }
}

export function showTicketTypeMenu(id) {
  return (dispatch, getState) => {
    const { passengers } = getState()
    const passenger = passengers.find(passenger => passenger.id === id)

    if (!passenger) return

    dispatch(
      showMenu({
        onPress(ticketType) {
          if ('adult' === ticketType) {
            dispatch(
              updatePassenger(id, { ticketType, licenceNo: '' }, [
                'gender',
                'followAdult',
                'birthday'
              ])
            )
          } else {
            const adultElseFound = passengers.find(
              passenger =>
                passenger.id !== id && passenger.ticketType === 'adult'
            )
            if (adultElseFound) {
              dispatch(
                updatePassenger(
                  id,
                  {
                    ticketType,
                    gender: '',
                    followAdult: adultElseFound.id,
                    birthday: ''
                  },
                  ['licenceNo']
                )
              )
            } else {
              alert('没有其他成人乘客')
            }
          }

          dispatch(setMenuVisible(false))
        },
        options: [
          {
            title: '成人票',
            value: 'adult',
            active: passenger.ticketType === 'adult'
          },
          {
            title: '儿童票',
            value: 'child',
            active: passenger.ticketType === 'child'
          }
        ]
      })
    )
  }
}

export function setSearchParsed(type) {
  return {
    type: ACTION_SET_SEARCH_PARSED,
    payload: type
  }
}
