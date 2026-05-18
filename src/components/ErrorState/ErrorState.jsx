function ErrorState({ message }) {
  return (
    <section className="feedback-panel error-panel" role="alert">
      <h2>No fue posible cargar la información</h2>
      <p>{message}</p>
    </section>
  );
}

export default ErrorState;
