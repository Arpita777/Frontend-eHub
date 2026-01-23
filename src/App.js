import { useEffect, useState } from "react";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer, AppLoader } from "./components";
import { useBackendWarmup } from "./hooks/useBackendWarmup";

function App() {
  const backendReady = useBackendWarmup();
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (!backendReady) {
      const timer = setInterval(() => {
        setProgress((p) => (p < 90 ? p + 5 : p));
      }, 300);

      return () => clearInterval(timer);
    }
  }, [backendReady]);

  useEffect(() => {
    if (backendReady) {
      setProgress(100);
    }
  }, [backendReady]);

  return (
    <div className="App dark:bg-darkbg relative">
      {!backendReady && (
        <AppLoader
          progress={progress}
          backendReady={backendReady}
        />
      )}

      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
