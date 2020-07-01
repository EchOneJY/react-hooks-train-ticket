import { Dispatch, Action } from 'redux'
export type DispatchMiddleParamProp<T> = (
  param: T
) => (dispatch: Dispatch, getState?: any) => void
export type DispatchMiddleProp = () => (
  dispatch: Dispatch,
  getState?: any
) => void
export type ActionProp = () => Action
export type ActionParamProp<T> = (param: T) => Action

export interface ActionProps<T> {
  type: string
  payload?: T
}
export type ToProp = string | null
export type FromProp = string | null
export type VisibleProp = boolean
export type OrderTypeProp = 'depart' | 'duration'
export type CheckedProps = { [key: string]: true }
export interface TypeProps {
  value: string
  name: string
}
export type TypesProps = TypeProps[] | null
export type DepartDateProp = number
export type TimeProp = number
export interface TrainItemProps {
  dTime: string
  aTime: string
  dStation: string
  aStation: string
  trainNumber: string
  date: string
  time: string
  priceMsg: string
  dayAfter: string
}
export type TrainProps = TrainItemProps[] | null

export interface StoreState {
  to: ToProp
  from: FromProp
  searchParsed: VisibleProp
  departDate: DepartDateProp
  highSpeed: VisibleProp
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
}
