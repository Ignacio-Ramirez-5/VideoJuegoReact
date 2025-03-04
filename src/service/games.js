const APP_KEY = 'e621543c33ee44e48e7b82cfdc83fb23';  

export const fetchGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${APP_KEY}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo obtener los juegos`);
    }
    
    const data = await response.json();
    if (!data.results) {
      throw new Error("La API no devolvió resultados válidos");
    }
    
    return data.results;  
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    return [];  // Retorna un array vacío en caso de error para evitar fallos en el filtrado
  }
};



