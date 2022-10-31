import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Show from './components/Show/Show'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/show" element={<Show />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
