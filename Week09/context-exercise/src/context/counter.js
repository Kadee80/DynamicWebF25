import {createContext, useState} from 'react'
// this is what any component that needs access to this context needs t0
// consume using the hook useContext
const CounterContext = createContext()

function Provider({children}) {
  const [count, setCount] = useState(80)

  const handleIncrement = () => {
    // setCount((currentCount) => currentCount + 1)
    // BAD NEVER EVER count = count + 1
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const valuesToShare = {
    count,
    handleIncrement,
    handleDecrement,
  }

  return (
    <CounterContext.Provider value={valuesToShare}>
      {children}
    </CounterContext.Provider>
  )
}

export {Provider}
export default CounterContext
