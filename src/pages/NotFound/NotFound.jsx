import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found-page">
      <p className="not-found-code">404</p>
      <h2>Página no encontrada</h2>
      <p>
        La ruta que intentaste abrir no existe dentro de esta aplicación.
      </p>
      <Link to="/" className="primary-link-button">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
