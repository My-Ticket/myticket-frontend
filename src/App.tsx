/*import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { LoginForm } from './components/Login'
import { Register } from './components/Register'
import { Route, Routes } from 'react-router-dom'*/
import { Login } from './components/Login'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { Register } from './components/Register'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Route>   
    </Routes>
  )
}

export default App