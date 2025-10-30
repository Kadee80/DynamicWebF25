// Bare Bones Example
// import {createContext} from 'react'
// const CounterContext = createContext() // this creates our context component
// // we can wrap the app or whatever parent component of all of the components
// // that need this information can have direct access to whatever is shared in
// // that special Value Prop!

// export default CounterContext

import {createContext, useState} from 'react'
const CounterContext = createContext()

function Provider({children}) {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
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
