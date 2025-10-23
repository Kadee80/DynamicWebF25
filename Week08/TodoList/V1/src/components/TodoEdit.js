import {useState} from 'react'

const TodoEdit = ({todo, onSubmit}) => {
  const [title, setTitle] = useState(todo.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(todo.id, title)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Update your Todo:</label>
      <input type="text" onChange={handleChange} value={title} />
    </form>
  )
}

export default TodoEdit
