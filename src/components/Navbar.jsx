import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-80 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
          DAO Certificates
        </Link>
        <div className="flex space-x-4">
          <Link to="/admin" className="hover:text-indigo-300 transition">Admin</Link>
          <Link to="/bosses" className="hover:text-purple-300 transition">Jefes</Link>
          <Link to="/students" className="hover:text-pink-300 transition">Estudiantes</Link>
        </div>
      </div>
    </nav>
  )
}