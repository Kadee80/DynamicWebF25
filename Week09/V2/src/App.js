import {useState} from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    // console.log('Create todo: ', title)
    // NEVER todos.push({title: title})
    // create a new Array
    // copy paste aka spread the old values in first
    // add new, or overrride values last
    const updatedTodos = [
      ...todos,
      {id: Math.round(Math.random() * 9999), title},
    ]
    setTodos(updatedTodos)
  }

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <div>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  )
}

export default App
