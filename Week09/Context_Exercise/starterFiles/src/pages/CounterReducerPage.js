import {useReducer} from 'react'
import Panel from '../components/Panel'
import Button from '../components/Button'

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'set-value-to-add'
const ADD_VALUE_TO_COUNT = 'add-value-to-count'

const reducer = (state, action) => {
  // state is now and object with key value pairs as state variables
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        // always copy in entire state object as is first
        ...state,
        // then override/update individual key/values
        count: state.count + 1,
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      }
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      }
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    default:
      // if none of the cases are met, unknown action type
      // return existing copy of state so that we dont wipe out our state object completely!
      return state
  }
  /* PRECFECTLY VALID CODE, BUT IT GETS LONG QUICKLY
  if (action.type === INCREMENT_COUNT) {
    // NO NO EVER EVER...
    // state.count = state.count + 1
    return {
      // always copy in entire state object as is first
      ...state,
      // then override/update individual key/values
      count: state.count + 1,
    }
  }
  if (action.type === SET_VALUE_TO_ADD) {
    return {
      ...state,
      valueToAdd: action.payload,
    }
  }

  // always make sure you at least return the existing state as a default/ fallback option
  // if you dont return something, you just cleared out your state object
  return state

  */
}

const CounterPage = ({initialCount}) => {
  // const {initialCount} = props
  // create a piece of state var called count and its setter function
  // this time we are recieving a prop from the parent and setting it as the initial count
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const handleIncrement = () => {
    // setCount((currentCount) => currentCount + 1)
    // BAD NEVER EVER count = count + 1
    // setCount(count + 1)
    // dispatch is how we update our state object, it only ever takes one argument, an action object
    // an action oject always needs a type key
    dispatch({type: INCREMENT_COUNT})
  }

  const handleDecrement = () => {
    // setCount(count - 1)
    dispatch({type: DECREMENT_COUNT})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // add user input number to count
    // setCount(count + valueToAdd)
    // reset valueToAdd
    // setValueToAdd(0)
    dispatch({type: ADD_VALUE_TO_COUNT})
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    // console.log(value, typeof value)
    // setValueToAdd(value)
    dispatch({type: SET_VALUE_TO_ADD, payload: value})
  }
  return (
    <Panel>
      <h1>Count is currently {state.count}</h1>
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
          value={state.valueToAdd || ''}
        />
        <Button primary rounded>
          Add Custom Amount!
        </Button>
      </form>
    </Panel>
  )
}

export default CounterPage
