import { Dispatch } from 'redux'
export type DispatchMiddleParamProp<T> = (
  param: T
) => (dispatch: Dispatch, getState?: any) => void
export type DispatchMiddleProp = () => (
  dispatch: Dispatch,
  getState?: any
) => void

export type ActionProps<T> = {
  type: string
  payload: T
}

export type TrainNumberProp = number | null
export type DateProp = number
export type PriceProp = number | null
export type StationProp = string | null
export type TimeStrProp = string | null
export type SeatTypeProp = string | null
export type VisibleProp = boolean
export type PassengerProps = {
  id: number
  name: string
  ticketType: string
  gender?: string
  licenceNo?: string
  birthday?: string
  followAdult?: number
  seat: string
}
export type OptionProps = {
  title: string
  value: string | number
  active: boolean
}
export type MenuProps = {
  onPress(param: string | number): void
  options: OptionProps[]
} | null

export type StoreState = {
  trainNumber: TrainNumberProp
  departDate: DateProp
  arriveDate: DateProp
  departStation: StationProp
  arriveStation: StationProp
  departTimeStr: TimeStrProp
  arriveTimeStr: TimeStrProp
  durationTimeStr: TimeStrProp
  price: PriceProp
  seatType: SeatTypeProp
  passengers: PassengerProps[]
  menu: MenuProps
  isMenuVisible: VisibleProp
  searchParsed: VisibleProp
}
