import {useReducer} from 'react'
import {produce} from 'immer'
import Panel from '../components/Panel'
import Button from '../components/Button'

// this is a community standard to avoid typos within strings (for action types)
const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'set-value-to-add'
const ADD_VALUE_TO_COUNT = 'add-value-to-count'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // wrapping our useReducer call in immer produce
      // allows us to directly mutate state becuase immer takes care of the rest in the BG
      state.count = state.count + 1
      return
    case DECREMENT_COUNT:
      state.count = state.count - 1
      return
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload
      return
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd
      state.valueToAdd = 0
      return
    default:
      return
  }
}

const CounterReducerPage = () => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: 0,
    valueToAdd: 0,
  })

  const handleIncrement = () => {
    dispatch({type: INCREMENT_COUNT})
  }

  const handleDecrement = () => {
    dispatch({type: DECREMENT_COUNT})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // add user input number to count
    // setCount(count + valueToAdd)
    // setValueToAdd(0)
    // our switch in useREducer doesnt need a payload here because both values are already in state

    dispatch({type: ADD_VALUE_TO_COUNT})
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0

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

export default CounterReducerPage
