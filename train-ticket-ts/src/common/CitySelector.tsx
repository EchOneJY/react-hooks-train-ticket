import React, { FC, memo, useMemo, useEffect } from 'react'
import classNames from 'classnames'

import './styles/CitySelector.css'
import {
  VisibleProp,
  SearchKeyProp,
  CityProp,
  CityDataProp
} from '../index/types'

interface SelectProp {
  onSelect: (city: string) => void
}

interface CityItemProps extends SelectProp {
  name: string
}

const CityItem: FC<CityItemProps> = props => {
  const { name, onSelect } = props
  return (
    <li className="city-li" onClick={() => onSelect(name)}>
      {name}
    </li>
  )
}

interface CitySectionProps extends SelectProp {
  title: string
  citys: CityProp[]
}

const CitySection: FC<CitySectionProps> = props => {
  const { title, citys = [], onSelect } = props
  return (
    <ul className="city-ul">
      <li className="city-li" data-cate={title}>
        {title}
      </li>
      {citys.map(city => {
        return <CityItem key={city.name} name={city.name} onSelect={onSelect} />
      })}
    </ul>
  )
}

interface CitySectionsProps extends SelectProp {
  sections: CityDataProp
}

const CitySections: FC<CitySectionsProps> = memo(props => {
  const { sections, onSelect } = props

  return (
    <div className="city-list">
      <div className="city-cate">
        {sections &&
          sections.map(section => {
            return (
              <CitySection
                key={section.title}
                title={section.title}
                citys={section.citys}
                onSelect={onSelect}
              />
            )
          })}
      </div>
    </div>
  )
})

interface CProps extends SelectProp {
  show: VisibleProp
  searchKey: SearchKeyProp
  cityData: CityDataProp
  loading: VisibleProp
  onBack: () => void
  fetchCityData: () => void
  setSearchKey(key: string): void
}

const CitySelector: FC<CProps> = memo(props => {
  const {
    show,
    cityData,
    searchKey,
    loading,
    onBack,
    onSelect,
    setSearchKey,
    fetchCityData
  } = props

  useEffect(() => {
    if (!show || cityData || loading) return
    fetchCityData()
  }, [show, cityData, loading, fetchCityData])

  const key = useMemo(() => searchKey.trim(), [searchKey])

  const outputCitySections = () => {
    if (loading) {
      return <div>Loading</div>
    }

    if (cityData) {
      return <CitySections sections={cityData} onSelect={onSelect} />
    }

    return <div>error</div>
  }

  return (
    <div className={classNames('city-selector', { hidden: !show })}>
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <i
          className={classNames('search-clean', {
            hidden: key.length === 0
          })}
          onClick={() => setSearchKey('')}
        >
          &#xf063;
        </i>
      </div>
      {outputCitySections()}
    </div>
  )
})

export default CitySelector
