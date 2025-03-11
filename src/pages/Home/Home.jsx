// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("https://api.rawg.io/api/games?key=e621543c33ee44e48e7b82cfdc83fb23");
        const data = await response.json();
        setGames(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener los videojuegos:", error);
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-3xl font-bold text-emerald-400 animate-pulse">Cargando experiencias épicas...</div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                  GameZone
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Sumérgete en mundos virtuales, desafía tus límites y vive aventuras inolvidables.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/Games"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
              >
                Descubre Nuevos Mundos
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900" />
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Gaming Background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Últimos Lanzamientos
              </span>
            </h2>
            <Slider {...settings} className="game-slider">
              {games.map((game, index) => (
                <div key={index} className="px-2">
                  <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                      src={game.background_image || "/placeholder.svg"}
                      alt={game.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 truncate">{game.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {game.genres?.slice(0, 2).map((genre, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-600 text-gray-300 rounded-full text-xs">
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                ¿Listo para la aventura?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Únete a nuestra comunidad de jugadores y descubre nuevos títulos, comparte estrategias y haz amigos.
            </p>
            <Link
              to="/Games"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
            >
              Explorar Todos los Juegos
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
