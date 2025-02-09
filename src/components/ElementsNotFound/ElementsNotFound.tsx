import "./index.css";
type ElementsNotFoundProps = {
  message?: string;
};

export const ElementsNotFound = ({
  message = "Nie znaleziono artykułów.",
}: ElementsNotFoundProps) => {
  return (
    <div className="elements-not-found">
      <h2> Brak wyników</h2>
      <p>{message}</p>
    </div>
  );
};
