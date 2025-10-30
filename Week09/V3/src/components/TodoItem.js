import {useState} from 'react'
import TodoEdit from './TodoEdit'
import useTodosContext from '../hooks/use-todos-context'

const TodoItem = ({todo}) => {
  const {deleteTodoById} = useTodosContext()
  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    // we no longer need to call  onEdit here because the
    // edittodo component can directly access
    // editTodoById from context
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
