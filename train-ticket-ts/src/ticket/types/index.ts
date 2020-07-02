export type ActionProps<T> = {
  type: string
  payload: T
}

export type TrainNumberProp = number | null
export type DateProp = number
export type StationProp = string | null
export type TimeStrProp = string | null
export type VisibleProp = boolean

export type ChannelProp = { name: string; desc: string }
export interface TicketProps {
  type: string
  priceMsg: string
  ticketsLeft: string
  channels: ChannelProp[]
}

export type TicketsProps = TicketProps[]

export type StoreState = {
  trainNumber: TrainNumberProp
  departDate: DateProp
  arriveDate: DateProp
  departStation: StationProp
  arriveStation: StationProp
  departTimeStr: TimeStrProp
  arriveTimeStr: TimeStrProp
  durationStr: TimeStrProp
  tickets: TicketsProps
  searchParsed: VisibleProp
  isScheduleVisible: VisibleProp
}
