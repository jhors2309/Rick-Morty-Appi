import { useEffect, useState } from 'react';
import CardCharacter from '../../components/CardCharacter/CardCharacter';
import ErrorState from '../../components/ErrorState/ErrorState';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import { getCharacters } from '../../services/rickMortyApi';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadCharacters() {
      try {
        setLoading(true);
        setError('');

        const data = await getCharacters(currentPage);

        if (!isMounted) {
          return;
        }

        setCharacters(data.results ?? []);
        setTotalPages(data.info?.pages ?? 1);
      } catch (requestError) {
        if (!isMounted) {
          return;
        }

        setCharacters([]);
        setTotalPages(1);
        setError(requestError.message);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadCharacters();

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((previousPage) => Math.max(previousPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((previousPage) => Math.min(previousPage + 1, totalPages));
  };

  return (
    <section className="page-section">
      <div className="hero hero-home">
        <div className="hero-copy">
          <p className="hero-kicker">Consumo de API REST</p>

          <h2>Personajes de Rick and Morty</h2>

          <p>
            Consulta el listado de personajes, navega entre páginas y visualiza
            la información de cada personaje.
          </p>
        </div>

        <div className="hero-portal-box">
          <img
            src={`${import.meta.env.BASE_URL}images/rick_morty.jpg`}
            alt="Portal de Rick and Morty"
            className="hero-rick_morty-image"
          />
        </div>
      </div>

      {loading && <Loading />}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && (
        <>
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">RF01</p>
              <h3>Todos los personajes</h3>
            </div>

            <p className="section-summary">
              Cada tarjeta muestra imagen, nombre, especie, estado y género.
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

export default Home;