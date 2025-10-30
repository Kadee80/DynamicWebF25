import {useEffect} from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import useTodosContext from './hooks/use-todos-context'

function App() {
  const {fetchTodos} = useTodosContext()
  // const fetchTodos = () => {}

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
