import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, onDelete, onEdit}) => {
  const renderedTodos = todos.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
    )
  })
  return <div>{renderedTodos}</div>
}

export default TodoList
