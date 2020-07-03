import React, { FC, memo } from 'react'
import classNames from 'classnames'

import '../styles/Menu.css'
import { VisibleProp, OptionProps, DispatchMiddleProp } from '../types'

type OnPressProp = (param: string | number) => void

interface MenuProps {
  show: VisibleProp
  onPress: OnPressProp
  options: OptionProps[]
  hideMenu: DispatchMiddleProp
}

interface MenuItemProps extends OptionProps {
  onPress: OnPressProp
}

const MenuItem: FC<MenuItemProps> = props => {
  const { title, value, active, onPress } = props

  return (
    <li className={classNames({ active })} onClick={() => onPress(value)}>
      {title}
    </li>
  )
}

const Menu: FC<MenuProps> = memo(props => {
  const { show, onPress, options, hideMenu } = props

  return (
    <div>
      {show && <div className="menu-mask" onClick={() => hideMenu()}></div>}
      <div className={classNames('menu', { show })}>
        <div className="menu-title"></div>
        <ul>
          {options &&
            options.map(option => (
              <MenuItem {...option} key={option.value} onPress={onPress} />
            ))}
        </ul>
      </div>
    </div>
  )
})

export default Menu
