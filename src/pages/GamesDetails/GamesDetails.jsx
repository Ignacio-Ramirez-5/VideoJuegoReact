"use client"

import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const API_KEY = "e621543c33ee44e48e7b82cfdc83fb23"

export async function loader({ params }) {
  return { id: params.id }
}

export default function GamesDetails() {
  const { id } = useLoaderData()
  const [game, setGame] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        if (!response.ok) throw new Error("Error al obtener los detalles del juego")

        const data = await response.json()
        setGame(data)
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGameDetails()
  }, [id])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!game) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
        <p className="text-red-400 text-2xl font-bold">¡Oops! No se pudo cargar el juego.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-96">
            <img
              src={game.background_image || "/placeholder.svg"}
              alt={game.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <h1 className="absolute bottom-6 left-6 text-5xl font-extrabold text-white drop-shadow-lg">{game.name}</h1>
          </div>
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-purple-700 rounded-full text-sm font-medium">⭐ {game.rating}</span>
              <span className="px-4 py-2 bg-indigo-700 rounded-full text-sm font-medium">
                🗓 {game.released || "N/A"}
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-8 text-black">{game.description_raw}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Géneros</h2>
                <div className="flex flex-wrap gap-2">
                  {game.genres.map((genre) => (
                    <span key={genre.id} className="px-3 py-1 bg-purple-800 bg-opacity-50 rounded-full text-sm">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-400">Plataformas</h2>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform) => (
                    <span
                      key={platform.platform.id}
                      className="px-3 py-1 bg-indigo-800 bg-opacity-50 rounded-full text-sm"
                    >
                      {platform.platform.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

