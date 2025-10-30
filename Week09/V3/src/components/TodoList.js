import useTodosContext from '../hooks/use-todos-context'
import TodoItem from './TodoItem'

const TodoList = () => {
  const {todos} = useTodosContext()

  const renderedTodos = todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />
  })
  return <div>{renderedTodos}</div>
}

export default TodoList
