import { Dispatch } from 'redux'
export type FetchTrainProp = (url: string) => (dispatch: Dispatch) => void

export interface ActionProps<T> {
  type: string
  payload: T
}
export type ToProp = string | null
export type FromProp = string | null
export type VisibleProp = boolean
export type OrderTypeProp = 'depart' | 'duration'
export interface TypeProps {
  value: string
  name: string
}
export type TypesProps = TypeProps[] | null
export type DepartDateProp = number
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
  trainType: TypesProps
  ticketType: TypesProps
  departStations: TypesProps
  arriveStations: TypesProps
}
