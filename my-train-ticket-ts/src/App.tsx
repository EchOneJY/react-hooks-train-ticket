import React, {
  createContext,
  useContext,
  useMemo,
  memo,
  useCallback,
} from 'react'

const BatteryContext = createContext(0)

function Leaf() {
  const context = useContext(BatteryContext)
  return <h1>Battery:{context}</h1>
}

function Middle() {
  return <Leaf />
}

type CountProps = {
  count: number
  onClick: () => void
}

const Count = memo(function Count(props: CountProps) {
  console.log('Count render')
  return <h1>{props.count}</h1>
})

function App() {
  const [battery, setBattery] = React.useState(100)
  const [count, setCount] = React.useState(0)
  const [clickCount, setClickCount] = React.useState(0)

  const double = useMemo(() => {
    return count * 2
  }, [count === 3])

  // const onClick = () => {
  //   console.log('click')
  // }

  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log('click')
  //   }
  // }, [])

  const onClick = useCallback(() => {
    console.log('click')
    setClickCount(clickCount + 1)
  }, [clickCount])
  return (
    <BatteryContext.Provider value={battery}>
      <button type="button" onClick={() => setBattery(battery - 1)}>
        Press
      </button>
      <Middle />
      <Count count={double} onClick={onClick} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Click({count}),double:({double})
      </button>
    </BatteryContext.Provider>
  )
}

export default App
