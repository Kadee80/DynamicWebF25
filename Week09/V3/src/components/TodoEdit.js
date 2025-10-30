import {useState} from 'react'
import useTodosContext from '../hooks/use-todos-context'

const TodoEdit = ({todo, onSubmit}) => {
  const {editTodoById} = useTodosContext()
  const [title, setTitle] = useState(todo.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editTodoById(todo.id, title)
    onSubmit()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Update your Todo:</label>
      <input type="text" onChange={handleChange} value={title} />
    </form>
  )
}

export default TodoEdit
