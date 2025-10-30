import {useState, useContext} from 'react'
import TodosContext from '../context/todos'

const TodoCreate = () => {
  const {createTodo} = useContext(TodosContext)
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} />
      <button>Create Todo</button>
    </form>
  )
}

export default TodoCreate
