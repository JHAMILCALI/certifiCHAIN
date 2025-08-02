export default function Admin() {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Panel de Administración</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Usuarios</h2>
            <p className="text-gray-600">Gestiona estudiantes y jefes</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h2 className="text-xl font-semibold text-purple-800 mb-3">Certificados NFT</h2>
            <p className="text-gray-600">Genera nuevos certificados</p>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-lg border border-pink-100">
            <h2 className="text-xl font-semibold text-pink-800 mb-3">Configuración DAO</h2>
            <p className="text-gray-600">Ajusta reglas de votación</p>
          </div>
        </div>
      </div>
    </div>
  )
}