import {useState} from 'react'
import Panel from '../components/Panel'
import Button from '../components/Button'

// We will refactor this simpler counter page
// to consume the Context we create instead of defining
// local state and functions. The coolest part about
// Context is with some new hooks we will learn, we can
// now share values directly with a component
// without prop drilling
const CounterContextPage = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <Panel>
      <h1>Count is currently {count}</h1>
      <div className="flex flex-row">
        <Button success rounded onClick={handleIncrement} className="mr-4">
          Increment
        </Button>
        <Button danger rounded onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
    </Panel>
  )
}

export default CounterContextPage
