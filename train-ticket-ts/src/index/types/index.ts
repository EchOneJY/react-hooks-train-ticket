export interface actionProps<T> {
  type: string
  payload: T
}
export type ToProp = string
export type FromProp = string
export type SearchKeyProp = string
export type VisibleProp = boolean
export type CityProp = { name: string }
interface CityItemProp {
  citys: CityProp[]
  title: string
}
export type CityDataProp = CityItemProp[] | null
export type DepartDateProp = number

export interface StoreState {
  to: ToProp
  from: FromProp
  searchKey: SearchKeyProp
  isCitySelectorVisible: VisibleProp
  cityData: CityDataProp
  isLoadingCityData: VisibleProp
  departDate: DepartDateProp
  isDateSelectorVisible: VisibleProp
  highSpeed: VisibleProp
}
