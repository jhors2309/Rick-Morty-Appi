function Pagination({ currentPage, totalPages, onPrevious, onNext }) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="pagination" aria-label="Paginación de personajes">
      <button
        type="button"
        className="pagination-button"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      <span className="pagination-info">
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </span>

      <button
        type="button"
        className="pagination-button"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </nav>
  );
}

export default Pagination;
