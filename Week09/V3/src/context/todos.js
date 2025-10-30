import {createContext, useState, useCallback} from 'react'
import axios from 'axios'
// this is super important and the value you share with every consumer component
// thats why it is exported as default
const TodosContext = createContext()

const Provider = ({children}) => {
  const [todos, setTodos] = useState([])

  const fetchTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }, [])
  // this is super clear but not how you will see it in production
  // const stableFetchTodos = useCallback(fetchTodos, [])

  const createTodo = async (title) => {
    const response = await axios.post('http://localhost:3001/todos', {
      title,
    })

    const updatedTodos = [...todos, response.data]
    setTodos(updatedTodos)
  }

  const deleteTodoById = async (id) => {
    // delete from DB
    await axios.delete(`http://localhost:3001/todos/${id}`)
    // update our local state theb same way we did
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle,
    })
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...response.data,
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const valuesToShare = {
    todos,
    fetchTodos,
    createTodo,
    deleteTodoById,
    editTodoById,
  }

  return (
    <TodosContext.Provider value={valuesToShare}>
      {children}
    </TodosContext.Provider>
  )
}

export {Provider}
export default TodosContext
