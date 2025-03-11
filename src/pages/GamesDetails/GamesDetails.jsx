import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../../service/games";

const GamesDetails = () => {
  const { id } = useParams();  // Obtiene el id del juego desde la URL
  const [game, setGame] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const gameData = await getGameDetails(id);  // Llama a la API para obtener los detalles
        if (!gameData) {
          setError("Juego no encontrado");
          return;
        }
        setGame(gameData);  // Guarda los datos del juego en el estado
      } catch (error) {
        console.error("Error al obtener detalles del juego:", error);
        setError("Error al cargar los detalles");
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);  // Se vuelve a ejecutar cuando cambia el id del juego

  if (isLoading) return <p className="text-white">Cargando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold text-white">{game.name}</h1>
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full max-w-3xl h-72 object-cover rounded-lg my-4"
      />
      <p>{game.description_raw}</p>
      <p className="mt-2"><strong>Géneros:</strong> {game.genres.map(g => g.name).join(", ")}</p>
      <p><strong>Plataformas:</strong> {game.platforms.map(p => p.platform.name).join(", ")}</p>
    </div>
  );
};

export default GamesDetails;
