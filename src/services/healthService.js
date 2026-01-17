const BACKEND_URL = process.env.REACT_APP_HOST;

export async function healthCheck() {
  const res = await fetch(`${BACKEND_URL}/health`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Backend not ready");
  }

  return true;
}
