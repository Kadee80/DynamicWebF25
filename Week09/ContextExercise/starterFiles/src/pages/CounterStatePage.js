import {useState} from 'react'
import Panel from '../components/Panel'
import Button from '../components/Button'

const CounterPage = ({initialCount}) => {
  // const {initialCount} = props
  // create a piece of state var called count and its setter function
  // this time we are recieving a prop from the parent and setting it as the initial count
  const [count, setCount] = useState(initialCount)
  const [valueToAdd, setValueToAdd] = useState(0)
  const handleIncrement = () => {
    // setCount((currentCount) => currentCount + 1)
    // BAD NEVER EVER count = count + 1
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // add user input number to count
    setCount(count + valueToAdd)
    // reset valueToAdd
    setValueToAdd(0)
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    // console.log(value, typeof value)
    setValueToAdd(value)
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

      <form onSubmit={handleSubmit}>
        <input
          className="p-1 m-4 bg-slate-50 border border-slate-300"
          type="number"
          onChange={handleChange}
          value={valueToAdd || ''}
        />
        <Button primary rounded>
          Add Custom Amount!
        </Button>
      </form>
    </Panel>
  )
}

export default CounterPage
