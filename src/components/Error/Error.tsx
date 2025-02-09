import "./index.css";

type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage = ({
  message = "Coś poszło nie tak.",
}: ErrorMessageProps) => {
  return (
    <div className="error-container" role="alert">
      <h2 className="error-heading">Błąd</h2>
      <p className="error-text">{message}</p>
    </div>
  );
};
