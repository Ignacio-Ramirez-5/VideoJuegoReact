
// src/pages/Publisher/Publisher.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGamesByPublisher } from "../../service/games";

export default function Publisher() {
  const { publisherSlug } = useParams();
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGamesByPublisher(publisherSlug);
        setGames(data.results);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [publisherSlug]);

  if (isLoading) return <p>Cargando...</p>;
  return (
    <div>
      <h1>Juegos del publisher: {publisherSlug}</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}
