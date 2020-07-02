import { createContext } from 'react'

import { TrainNumberProp, StationProp, DateProp } from './types'

interface DProp {
  trainNumber: TrainNumberProp
  departStation: StationProp
  arriveStation: StationProp
  departDate: DateProp
}
const defaultValue: DProp = {
  trainNumber: null,
  departStation: null,
  arriveStation: null,
  departDate: Date.now()
}

export const TrainContext = createContext(defaultValue)
