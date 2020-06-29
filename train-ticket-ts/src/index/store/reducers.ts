import {
  ACTION_SET_TO,
  ACTION_SET_FROM,
  ACTION_SET_SEARCH_KEY,
  ACTION_SET_CITY_SELECTOR_VISIBLE,
  ACTION_SET_SELECTING_LEFT_CITY,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_CITY_DATA,
  ACTION_SET_DATE_SELECTOR_VISIBLE,
  ACTION_SET_DEPART_DATE,
  ACTION_SET_HIGH_SPEED
} from './actions'

import {
  actionProps,
  ToProp,
  FromProp,
  SearchKeyProp,
  VisibleProp,
  CityDataProp,
  DepartDateProp
} from '../types'

export default {
  to(state: ToProp = '北京', action: actionProps<ToProp>) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_TO: {
        return payload
      }
      default:
    }

    return state
  },

  from(state: FromProp = '上海', action: actionProps<FromProp>) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_FROM: {
        return payload
      }
      default:
    }

    return state
  },

  searchKey(state: SearchKeyProp = '', action: actionProps<SearchKeyProp>) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_SEARCH_KEY: {
        return payload
      }
      default:
    }

    return state
  },

  currentSelectingLeftCity(
    state: VisibleProp = false,
    action: actionProps<VisibleProp>
  ) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_SELECTING_LEFT_CITY: {
        return payload
      }
      default:
    }

    return state
  },

  isCitySelectorVisible(
    state: VisibleProp = false,
    action: actionProps<VisibleProp>
  ) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_CITY_SELECTOR_VISIBLE: {
        return payload
      }
      default:
    }

    return state
  },

  isLoadingCityData(
    state: VisibleProp = false,
    action: actionProps<VisibleProp>
  ) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_IS_LOADING_CITY_DATA: {
        return payload
      }
      default:
    }

    return state
  },

  cityData(state: CityDataProp = null, action: actionProps<CityDataProp>) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_CITY_DATA: {
        return payload
      }
      default:
    }

    return state
  },

  departDate(
    state: DepartDateProp = Date.now(),
    action: actionProps<DepartDateProp>
  ) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_DEPART_DATE: {
        return payload
      }
      default:
    }

    return state
  },

  isDateSelectorVisible(
    state: VisibleProp = false,
    action: actionProps<VisibleProp>
  ) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_DATE_SELECTOR_VISIBLE: {
        return payload
      }
      default:
    }

    return state
  },

  highSpeed(state: VisibleProp = false, action: actionProps<VisibleProp>) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_HIGH_SPEED: {
        return payload
      }
      default:
    }

    return state
  }
}
