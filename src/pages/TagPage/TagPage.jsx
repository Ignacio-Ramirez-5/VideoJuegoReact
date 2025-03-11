import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGamesByTag } from "../../service/games"; // Asegúrate de usar getGamesByTag

const TagPage = () => {
  const { tagSlug } = useParams(); // Obtener el tagSlug de la URL
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!tagSlug) {
      setError("Tag no válido");
      setLoading(false);
      return;
    }

    console.log("TagSlug recibido:", tagSlug); // Verificamos que el tagSlug esté llegando bien

    const fetchGames = async () => {
      try {
        // Aquí nos aseguramos de que el tagSlug esté siendo utilizado correctamente en la API
        const gamesData = await getGamesByTag(tagSlug);

        // Verificamos si la API devuelve juegos
        if (gamesData && gamesData.results && gamesData.results.length > 0) {
          setGames(gamesData.results);
        } else {
          setError("No se encontraron juegos para este tag.");
        }
      } catch (error) {
        setError("Error al obtener los juegos");
        console.error("Error al obtener los juegos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [tagSlug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Juegos para el tag: {tagSlug}</h1>
      <div>
        {games.length === 0 ? (
          <p>No se encontraron juegos para este tag.</p>
        ) : (
          games.map((game) => (
            <div key={game.id}>
              <h2>{game.name}</h2>
              <p>{game.short_description || "Descripción no disponible"}</p>
              <img
                src={game.background_image || "/placeholder.svg"}
                alt={game.name}
                className="w-full h-56 object-cover"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TagPage;
