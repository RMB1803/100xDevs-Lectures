import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <Todo title='Week-9' description='To be done' completed={false} />
    </div>
  )
}

interface TodoProp {
  title: string,
  description: string,  
  completed: boolean
}

function Todo(props : TodoProp) {
  return <div>
    <h1>
      {props.title}
    </h1>

    <h2>
      {props.description}
    </h2>
  </div>
}

export default App
