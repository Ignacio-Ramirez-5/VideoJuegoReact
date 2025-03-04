import { Link } from "react-router"

// eslint-disable-next-line react/prop-types
function GamesPoster({ id, title, posterUrl }) {
  return (
    <Link
      to={`/GamesDetails/${id}`}
      className="group relative block w-full sm:w-72 mx-auto overflow-hidden rounded-xl bg-gray-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
      <img
        src={posterUrl || "/placeholder.svg"}
        alt={title}
        title={title}
        className="w-full h-[28rem] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h2 className="text-white text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-0.5rem]">
          {title}
        </h2>
        <div className="w-12 h-1 bg-yellow-400 rounded transform transition-all duration-300 group-hover:w-24"></div>
      </div>
      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver detalles
      </div>
    </Link>
  )
}

export default GamesPoster

