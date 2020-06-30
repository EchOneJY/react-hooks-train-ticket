import React, { FC, memo } from 'react'

import './styles/Bottom.css'

interface BottomProps {}
const Bottom: FC<BottomProps> = memo(props => {
  return <div className="bottom"></div>
})
export default Bottom
