import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Bosses from './pages/Bosses'
import Students from './pages/Students'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/bosses" element={<Bosses />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </Router>
  )
}