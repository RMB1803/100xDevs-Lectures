import { useEffect, useState } from 'react'


// function App() {

//   return (
//     <div>
//       <CardWrapper>
//         Hi therererere
//       </CardWrapper>
//     </div>
//   )
// }



// function CardWrapper({children}) {
//   return(
//     <div style={{border: "2px solid black", padding: 20}}>
//       {children}
//     </div>
//   )
// }

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json()
        setTodos(json.todos)
      })
    }, 10000)
  }, [])

  return(
    <div>
      <Todo todos={todos}/>
    </div>
  )
}

function Todo({todos}) {

  return(
    <div>
      {todos.map((todo) => {
        return(
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <h4>{todo.description}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default App
