// src/service/games.js
const APP_KEY = 'e621543c33ee44e48e7b82cfdc83fb23';  // Tu clave API
const BASE_URL = 'https://api.rawg.io/api';  // La base URL de la API

// Obtener la lista de juegos
export const getGames = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${APP_KEY}`);
    if (!response.ok) {
      throw new Error("Error al obtener la lista de juegos");
    }
    const data = await response.json();
    return data.results || [];  // Asegurarse de que siempre devuelve un array
  } catch (error) {
    console.error("Error en getGames:", error);
    return [];
  }
};

// Obtener juegos por tag
export const getGamesByTag = async (tagSlug) => {
  try {
    if (!tagSlug) throw new Error("Tag no válido");
    
    const response = await fetch(`${BASE_URL}/games?tags=${tagSlug}&key=${APP_KEY}`);
    if (!response.ok) {
      throw new Error("Error al obtener los juegos por tag");
    }
    const data = await response.json();
    return data.results || [];  // Asegurarse de que siempre devuelve un array
  } catch (error) {
    console.error("Error en getGamesByTag:", error);
    return [];
  }
};

// Obtener detalles de un juego
export const getGameDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${id}?key=${APP_KEY}`);
    if (!response.ok) {
      throw new Error("Error al obtener los detalles del juego");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getGameDetails:", error);
    return null;
  }
};
