export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : defaultValue;
  } catch (error) {
    console.error(`Błąd odczytu localStorage dla klucza "${key}":`, error);
    return defaultValue;
  }
};
