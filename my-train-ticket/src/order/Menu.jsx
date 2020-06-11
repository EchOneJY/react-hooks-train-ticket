import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Menu.css'

const MenuItem = memo(props => {
  const { title, value, active, onPress } = props

  return (
    <li className={classNames({ active })} onClick={() => onPress(value)}>
      {title}
    </li>
  )
})

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

const Menu = memo(props => {
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

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.array,
  onPress: PropTypes.func,
  hideMenu: PropTypes.func.isRequired
}

export default Menu
