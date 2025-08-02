import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'

export default function Login() {
  const [role, setRole] = useState('student')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (role === 'admin') navigate('/admin')
    else if (role === 'boss') navigate('/bosses')
    else navigate('/students')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
          Iniciar Sesión
        </h1>
        <AuthForm onSubmit={handleSubmit} role={role} setRole={setRole} />
      </div>
    </div>
  )
}