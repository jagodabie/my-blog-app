import { BackIcon } from "@/assets/BackIcon";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Nie znaleziono strony.</p>
      <Link href="/" className="not-found-button">
        <BackIcon /> Powrót do strony głównej
      </Link>
    </div>
  );
}
