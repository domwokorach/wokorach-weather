import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const looksLikePlaceholder = (key: string) => {
  // very lightweight heuristics: treat obvious placeholders as invalid
  const normalized = key.trim().toLowerCase();
  return (
    normalized.length < 20 ||
    normalized.includes("your_") ||
    normalized.includes("replace") ||
  normalized === "change-me"
  );
};

export function ApiKeyBanner() {
  const key = import.meta.env.VITE_OPENWEATHER_API_KEY as string | undefined;

  if (key && !looksLikePlaceholder(key)) return null;

  return (
    <div className="container mx-auto px-4 pt-4">
      <Alert variant="destructive">
        <AlertTitle>Missing or invalid OpenWeather API key</AlertTitle>
        <AlertDescription>
          Set <code className="font-mono">VITE_OPENWEATHER_API_KEY</code> in the
          project <code className="font-mono">.env</code> file and restart the dev
          server.
        </AlertDescription>
      </Alert>
    </div>
  );
}
