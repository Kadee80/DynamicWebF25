import {useContext} from 'react'
import CounterContext from '../context/counter'
import Panel from '../components/Panel'
import Button from '../components/Button'

const CounterContextPage = () => {
  const {count, handleIncrement, handleDecrement} = useContext(CounterContext)

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
