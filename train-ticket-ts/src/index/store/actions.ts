import { Dispatch } from 'redux'
import {
  ToProp,
  FromProp,
  SearchKeyProp,
  VisibleProp,
  CityDataProp,
  DepartDateProp
} from '../types'

export const ACTION_SET_TO = 'ACTION_SET_TO'
export const ACTION_SET_FROM = 'ACTION_SET_FROM'
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA'
export const ACTION_SET_SEARCH_KEY = 'ACTION_SET_SEARCH_KEY'
export const ACTION_SET_CITY_SELECTOR_VISIBLE =
  'ACTION_SET_CITY_SELECTOR_VISIBLE'
export const ACTION_SET_IS_LOADING_CITY_DATA = 'ACTION_SET_IS_LOADING_CITY_DATA'
export const ACTION_SET_SELECTING_LEFT_CITY = 'ACTION_SET_SELECTING_LEFT_CITY'
export const ACTION_SET_DEPART_DATE = 'ACTION_SET_DEPART_DATE'
export const ACTION_SET_DATE_SELECTOR_VISIBLE =
  'ACTION_SET_DATE_SELECTOR_VISIBLE'
export const ACTION_SET_HIGH_SPEED = 'ACTION_SET_HIGH_SPEED'

export function setTo(to: ToProp) {
  return {
    type: ACTION_SET_TO,
    payload: to
  }
}

export function setFrom(from: FromProp) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  }
}

export function exchangeFromTo() {
  return (dispatch: Dispatch, getState: any) => {
    const { to, from } = getState()
    dispatch(setTo(from))
    dispatch(setFrom(to))
  }
}

export function setSearchKey(key: SearchKeyProp) {
  return {
    type: ACTION_SET_SEARCH_KEY,
    payload: key
  }
}

export function showCitySelector(bool: VisibleProp) {
  return (dispatch: Dispatch) => {
    dispatch(setCitySelectorVisible(true))
    dispatch(setSelectingLeftCity(bool))
  }
}

export function hideCitySelector() {
  return {
    type: ACTION_SET_CITY_SELECTOR_VISIBLE,
    payload: false
  }
}

export function setSelectingLeftCity(bool: VisibleProp) {
  return {
    type: ACTION_SET_SELECTING_LEFT_CITY,
    payload: bool
  }
}

export function setCitySelectorVisible(bool: VisibleProp) {
  return {
    type: ACTION_SET_CITY_SELECTOR_VISIBLE,
    payload: bool
  }
}

export function setSelectedCity(city: FromProp | ToProp) {
  return (dispatch: Dispatch, getState: any) => {
    const { currentSelectingLeftCity } = getState()

    if (currentSelectingLeftCity) {
      dispatch(setFrom(city))
    } else {
      dispatch(setTo(city))
    }

    dispatch(hideCitySelector())
  }
}

export function setCityData(list: CityDataProp) {
  return {
    type: ACTION_SET_CITY_DATA,
    payload: list
  }
}

export function setIsLoadingCityData(bool: VisibleProp) {
  return {
    type: ACTION_SET_IS_LOADING_CITY_DATA,
    payload: bool
  }
}

export function fetchCityData() {
  return (dispatch: Dispatch, getState: any) => {
    const { isLoadingCityData } = getState()

    if (isLoadingCityData) return

    const cache = JSON.parse(localStorage.getItem('city_data_cache') || '{}')

    if (Date.now() < cache.expires) {
      dispatch(setCityData(cache.data))
      return
    }

    dispatch(setIsLoadingCityData(true))

    fetch('/rest/cities?_' + Date.now())
      .then(res => res.json())
      .then(data => {
        dispatch(setCityData(data.cityList))

        localStorage.setItem(
          'city_data_cache',
          JSON.stringify({
            expires: Date.now() + 60 * 1000,
            data: data.cityList
          })
        )

        dispatch(setIsLoadingCityData(false))
      })
      .catch(() => {
        dispatch(setIsLoadingCityData(false))
      })
  }
}

export function showDateSelector() {
  return {
    type: ACTION_SET_DATE_SELECTOR_VISIBLE,
    payload: true
  }
}

export function hideDateSelector() {
  return {
    type: ACTION_SET_DATE_SELECTOR_VISIBLE,
    payload: false
  }
}

export function setDepartDate(departDate: DepartDateProp) {
  return {
    type: ACTION_SET_DEPART_DATE,
    payload: departDate
  }
}

export function setHighSpeed(bool: VisibleProp) {
  return {
    type: ACTION_SET_HIGH_SPEED,
    payload: bool
  }
}
