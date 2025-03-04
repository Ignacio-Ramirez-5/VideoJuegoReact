import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash"; 
import { fetchGames } from "../../service/games";  

const Games = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getGames = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
      } catch (error) {
        console.error("Error al obtener los juegos:", error);
      } finally {
        setLoading(false);
      }
    };

    getGames();
  }, []);

  const handleSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 300),
    []
  );

  const handleChange = (event) => {
    setInputValue(event.target.value);
    handleSearch(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Explora el Universo Gaming
        </span>
      </h1>

      <div className="mb-12 relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Busca tu próxima aventura..."
          value={inputValue}
          onChange={handleChange}
          className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-gray-300 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300">🔍</span>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-400"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGames.map((game) => (
            <Link to={`/gamesDetails/${game.id}`} key={game.id} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/10">
                <div className="relative">
                  <img
                    src={game.background_image || "/placeholder.svg"}
                    alt={game.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white truncate group-hover:text-pink-300 transition duration-300">
                    {game.name}
                  </h3>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-pink-400 font-semibold">⭐ {game.rating}</p>
                    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {game.released ? new Date(game.released).getFullYear() : "N/A"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {game.genres &&
                      game.genres.slice(0, 3).map((genre) => (
                        <span
                          key={genre.id}
                          className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full"
                        >
                          {genre.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Games;
