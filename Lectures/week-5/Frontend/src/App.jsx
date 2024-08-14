import { useState } from 'react'
import './App.css'
import { CreateTodo } from '../components/CreateToDo'
import { Todos } from '../components/Todos'
import { useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/todos")
    .then(async (response) => {
    const json = await response.json()
    setTodos(json.todos)
    })
  }, [])

  return (
    <>
      <CreateTodo />
      <Todos todos={todos}/>
    </>
  )
}

export default App
