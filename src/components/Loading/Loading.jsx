function Loading({ message = 'Cargando personajes...' }) {
  return (
    <section className="feedback-panel loading-panel" aria-live="polite">
      <span className="loading-spinner" aria-hidden="true"></span>
      <p>{message}</p>
    </section>
  );
}

export default Loading;
