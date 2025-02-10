# Blog Aplikacja

Aplikacja blogowa umożliwiająca przeglądanie postów, filtrowanie według kategorii oraz zarządzanie listą ulubionych postów.

## Technologie

- **Next.js 15**: Framework do budowy aplikacji React z obsługą renderowania po stronie serwera i statycznego generowania stron.
- **React 19**: Biblioteka do budowy interfejsów użytkownika.
- **TypeScript**: Język programowania będący nadzbiorem JavaScript, dodający statyczne typowanie.

## Funkcjonalności

- **Strona Główna**: Wyświetla listę postów pobranych z API. Każdy post zawiera tytuł, krótki opis oraz przycisk "Zobacz więcej".
- **Strona Szczegółów Posta**: Wyświetla pełną treść wybranego posta oraz przyciski powrotu do listy postów i dodania/usunięcia z ulubionych.
- **Filtrowanie**: Użytkownik może filtrować posty na stronie głównej według kategorii oraz statusu ulubionych.
- **Ulubione**: Użytkownik może dodawać i usuwać posty z listy ulubionych. Lista ulubionych jest przechowywana lokalnie w `localStorage`.
- **Responsywność**: Aplikacja działa poprawnie zarówno na urządzeniach desktopowych, jak i mobilnych.

## Instalacja

### Wymagania

- Node.js (>= 14.x)
- npm (>= 6.x)

### Krok po kroku

1.  **Sklonuj Repozytorium**

    git clone <https://github.com/jagodabie/my-blog-app>

    cd my-blog-app

2.  **Zainstaluj Zależności**

    npm install

3.  **Uruchom Serwer Deweloperski**

        npm run dev

    Aplikacja zostanie uruchomiona na <http://localhost:3000>.
