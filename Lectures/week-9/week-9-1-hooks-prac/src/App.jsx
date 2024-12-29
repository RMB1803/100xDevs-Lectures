import { useEffect, useState } from 'react'
import axios from "axios"
import useIsOnline from './hooks/useIsOnline'
import useMousePointer from './hooks/useMousePointer'
import useDimensions from './hooks/useDimensions'
import useInterval from './hooks/useInterval'
import useDebounce from './hooks/useDebounce'

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos)
//           setLoading(false)
//         })
//     }, n*1000)

//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos)
//         setLoading(false)
//       })

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return {todos, loading}
// }

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

function App() {

  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500)

  return (
    <>
      <div>Debounced value is {debouncedValue}</div>
      <input type='text' onChange={e => setValue(e.target.value)}/>
    </>
  )
}


function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App