import { useEffect, useState } from "react";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer, AppLoader } from "./components";
import { useBackendWarmup } from "./hooks/useBackendWarmup";
import { useImagesReady } from "./hooks/useImagesReady";

function App() {
  const backendReady = useBackendWarmup();
  const imagesReady = useImagesReady();

  const [progress, setProgress] = useState(10);
  const isAppReady = backendReady && imagesReady;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p < 90 ? p + 5 : p));
    }, 300);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isAppReady) setProgress(100);
  }, [isAppReady]);

  return (
    <div className="App dark:bg-darkbg relative">
      {!isAppReady && (
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
