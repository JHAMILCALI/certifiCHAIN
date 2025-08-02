export default function Students() {
  const nfts = [
    { id: 1, name: "Certificado Blockchain Básico", status: "Aprobado", date: "15/08/2023" },
    { id: 2, name: "Certificado DAO Avanzado", status: "En progreso", date: "22/08/2023" },
    { id: 3, name: "Certificado Smart Contracts", status: "Pendiente", date: "30/08/2023" }
  ]

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Mis Certificados NFT</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map(nft => (
          <div key={nft.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="text-xl font-semibold text-gray-800 mb-2">{nft.name}</div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                nft.status === "Aprobado" ? "bg-green-100 text-green-800" :
                nft.status === "En progreso" ? "bg-yellow-100 text-yellow-800" :
                "bg-gray-100 text-gray-800"
              }`}>
                {nft.status}
              </div>
              <p className="text-gray-600 mb-4">Fecha: {nft.date}</p>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-md hover:opacity-90 transition">
                Ver en Blockchain Explorer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}