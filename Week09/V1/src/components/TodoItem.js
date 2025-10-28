import {useState} from 'react'
import TodoEdit from './TodoEdit'

const TodoItem = ({todo, onDelete, onEdit}) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    onDelete(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    onEdit(todo.id, newTitle)
    setShowEdit(!showEdit)
  }

  const content = showEdit ? (
    <TodoEdit todo={todo} onSubmit={handleSubmit} />
  ) : (
    <div>
      {todo.title}
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleEdit}>edit</button>
    </div>
  )
  return <div>{content}</div>
}

export default TodoItem
