import { Suspense, useState } from 'react'
import React from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
const Landing = React.lazy(() => import('./components/Landing'))
const Dashboard = React.lazy(() => import('./components/Dashboard'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/' element= {<Suspense fallback = {"loading..."}> <Landing /> </Suspense>}/>
          <Route path='/dashboard' element= {<Suspense fallback = {"loading..."}> <Dashboard /> </Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

function AppBar() {

  const navigate = useNavigate()

  return(
    <div>
      <div style={{background: "black", color:"wheat"}}>
        <button onClick={() => {
          navigate("/dashboard")
        }}>Dashboard</button>

        <button onClick={() => {
          navigate("/")
        }}>Landing</button>
      </div>
    </div>
  )
}

export default App
