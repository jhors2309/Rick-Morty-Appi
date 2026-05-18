import { useEffect, useState } from 'react';
import CardCharacter from '../../components/CardCharacter/CardCharacter';
import ErrorState from '../../components/ErrorState/ErrorState';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import { getCharactersBySpecies } from '../../services/rickMortyApi';

const SPECIES_OPTIONS = [
  'Human',
  'Alien',
  'Robot',
  'Mythological Creature',
];

function SpeciesFilter() {
  const [selectedSpecies, setSelectedSpecies] = useState('Human');
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadCharactersBySpecies() {
      try {
        setLoading(true);
        setError('');

        const data = await getCharactersBySpecies(selectedSpecies, currentPage);

        if (!isMounted) {
          return;
        }

        setCharacters(data.results ?? []);
        setTotalPages(data.info?.pages ?? 0);
      } catch (requestError) {
        if (!isMounted) {
          return;
        }

        setCharacters([]);
        setTotalPages(0);
        setError(requestError.message);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadCharactersBySpecies();

    return () => {
      isMounted = false;
    };
  }, [selectedSpecies, currentPage]);

  const handleSpeciesChange = (event) => {
    setSelectedSpecies(event.target.value);
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((previousPage) => Math.max(previousPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((previousPage) => Math.min(previousPage + 1, totalPages));
  };

  return (
    <section className="page-section">
      <div className="hero hero-filter">
        <div className="hero-copy">
          <p className="hero-kicker">RF03</p>
          <h2>Filtrar personajes por especie</h2>
          <p>
            Selecciona una especie para consultar la API y actualizar la vista
            sin salir de la aplicación.
          </p>
        </div>
      </div>

      <section className="filter-panel" aria-labelledby="species-title">
        <div>
          <p className="section-eyebrow">Filtro</p>
          <h3 id="species-title">Selecciona una especie</h3>
        </div>

        <label className="select-label" htmlFor="species-select">
          Especie
        </label>
        <select
          id="species-select"
          className="species-select"
          value={selectedSpecies}
          onChange={handleSpeciesChange}
        >
          {SPECIES_OPTIONS.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </section>

      {loading && <Loading message={`Cargando personajes ${selectedSpecies}...`} />}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && characters.length === 0 && (
        <section className="feedback-panel empty-panel">
          <h2>No hay resultados disponibles</h2>
          <p>No se encontraron personajes para la especie seleccionada.</p>
        </section>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">Resultados</p>
              <h3>{selectedSpecies}</h3>
            </div>
            <p className="section-summary">
              La consulta se actualiza según la especie elegida.
            </p>
          </div>

          <div className="character-grid">
            {characters.map((character) => (
              <CardCharacter
                key={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
                status={character.status}
                gender={character.gender}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={goToPreviousPage}
            onNext={goToNextPage}
          />
        </>
      )}
    </section>
  );
}

export default SpeciesFilter;
