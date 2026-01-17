import { useEffect, useState } from "react";
import { healthCheck } from "../services/healthService";

export function useBackendWarmup() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const warmup = async () => {
      const retries = 5;

      for (let i = 0; i < retries; i++) {
        try {
          await healthCheck();
          if (!cancelled) setReady(true);
          return;
        } catch {
          await new Promise((r) => setTimeout(r, 2000));
        }
      }

      // fail-open
      if (!cancelled) setReady(true);
    };

    warmup();
    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}
