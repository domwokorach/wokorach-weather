export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO: "https://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
  DEFAULT_PARAMS: {
    units: "metric",
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
};

// Dev-only hint: helps diagnose missing/invalid keys without leaking the full secret.
if (import.meta.env.DEV) {
  const key = import.meta.env.VITE_OPENWEATHER_API_KEY as string | undefined;
  console.info(
    `[openweather] api key: ${key ? `${key.slice(0, 4)}…${key.slice(-4)}` : "<missing>"}`
  );
}
