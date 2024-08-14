import { useState } from "react"

export function Todos({todos}) {

    const [id, setId] = useState("")

    return(
        <div>
            {todos.map((todo) => {
                return(
                    <div>
                        <h2>{todo.title}</h2>
                        <h3>{todo.description}</h3>
                        <button onClick={() => {
                            if(!todo.completed) {
                                todo.completed === true
                            } else {
                                todo.completed === false
                            }
                        }}>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                    </div>
                )
            })}
        </div>
    )
}