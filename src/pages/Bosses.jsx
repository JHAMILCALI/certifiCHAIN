import { useState } from 'react'

export default function Bosses() {
  const [vote, setVote] = useState(null)
  const proposals = [
    "Aprobar nuevo curso de Solidity",
    "Invertir en infraestructura",
    "Cambiar horario de clases"
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Votación DAO</h1>
        
        <div className="space-y-6">
          {proposals.map((proposal, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-3">{proposal}</h3>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setVote({proposal, vote: 'yes'})}
                  className={`px-4 py-2 rounded-full ${vote?.proposal === proposal && vote?.vote === 'yes' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-800'}`}
                >
                  👍 Aprobar
                </button>
                <button 
                  onClick={() => setVote({proposal, vote: 'no'})}
                  className={`px-4 py-2 rounded-full ${vote?.proposal === proposal && vote?.vote === 'no' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800'}`}
                >
                  👎 Rechazar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}