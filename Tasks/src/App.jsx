import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import Signup from "./components/Signup"
import BMICal from "./pages/BMICal"
import Landing from "./pages/Landing"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bmi" element={<BMICal />} />
    </Routes>
  )
}

export default App
