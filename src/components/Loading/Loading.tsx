import "./index.css";
export const Loading = () => {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="spinner"></div>
      <p className="loading-text">Ładowanie...</p>
    </div>
  );
};
