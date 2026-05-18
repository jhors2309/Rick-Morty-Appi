const CHARACTER_ENDPOINT = 'https://rickandmortyapi.com/api/character';

async function parseResponse(response, fallbackMessage) {
  if (!response.ok) {
    throw new Error(fallbackMessage);
  }

  return response.json();
}

export async function getCharacters(page = 1) {
  const response = await fetch(`${CHARACTER_ENDPOINT}?page=${page}`);

  return parseResponse(
    response,
    'No se pudieron consultar los personajes. Revisa tu conexión e inténtalo nuevamente.'
  );
}

export async function getCharactersBySpecies(species, page = 1) {
  const safeSpecies = encodeURIComponent(species);
  const response = await fetch(
    `${CHARACTER_ENDPOINT}?species=${safeSpecies}&page=${page}`
  );

  if (response.status === 404) {
    return {
      info: { pages: 0 },
      results: [],
    };
  }

  return parseResponse(
    response,
    'No se pudieron consultar los personajes filtrados. Revisa tu conexión e inténtalo nuevamente.'
  );
}
