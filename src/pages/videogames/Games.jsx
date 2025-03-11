// src/pages/videogames/Games.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGames } from "../../service/games";

const Games = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        console.error("Error al obtener los juegos:", error);
        setError("No se pudieron cargar los juegos. Intenta de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold text-white mb-4">Lista de Juegos</h1>
      {isLoading ? (
        <p className="text-gray-400 text-xl">Cargando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link
              to={`/games/${game.id}`}  // Asegúrate de que el ID esté en la URL
              key={game.id}
              className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition transform hover:scale-105"
            >
              <img
                src={game.background_image || "/placeholder.svg"}
                alt={game.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-white mt-2 text-xl font-semibold">{game.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;
