export default function AuthForm({ onSubmit, role, setRole }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white">Email</label>
        <input
          type="email"
          required
          className="mt-1 w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white">Contraseña</label>
        <input
          type="password"
          required
          className="mt-1 w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white">Rol</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="admin">Admin</option>
          <option value="boss">Jefe</option>
          <option value="student">Estudiante</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition shadow-lg"
      >
        Ingresar
      </button>
    </form>
  )
}