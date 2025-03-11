import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGamesByGenre } from "../../service/games";

export default function GenrePage() {
  const { genreSlug } = useParams();
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGamesByGenre(genreSlug);
        setGames(data);
      } catch (error) {
        console.error("Error al obtener juegos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [genreSlug]);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Juegos con el género: {genreSlug}</h1>
      <ul>
        {games.length > 0 ? (
          games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))
        ) : (
          <p>No se encontraron juegos con este género.</p>
        )}
      </ul>
    </div>
  );
}
