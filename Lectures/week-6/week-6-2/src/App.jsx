import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [id, setID] = useState(1)

  return (
    <div>
      <button onClick={() => {
        setID(1)
      }}>1</button>

      <button onClick={() => {
        setID(2)
      }}>2</button>

      <button onClick={() => {
        setID(3)
      }}>3</button>

      <button onClick={() => {
        setID(4)
      }}>4</button>

      <Todo id={id}/>
    </div>
  )
}

function Todo({id}) {

  const [todo, setTodo] = useState([])

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then((res) => {
      setTodo(res.data.todo)
    })
  }, [id])

  return(
    <div>
      <h2>{todo.title}</h2>
      <h3>{todo.description}</h3>    
    </div>
  )
}

export default App
