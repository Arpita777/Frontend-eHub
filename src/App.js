import { useEffect, useState } from "react";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import { getUser } from "./services";

function App() {
  const [backendReady, setBackendReady] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const [progress, setProgress] = useState(10);

  const isAppReady = backendReady && imagesReady;

  useEffect(() => {
    // Simulated progress
    const progressInterval = setInterval(() => {
      setProgress((p) => (p < 90 ? p + 5 : p));
    }, 300);

    const wakeBackend = async () => {
      try {
        await getUser();
      } catch (e) {
        console.error(e);
      } finally {
        setBackendReady(true);
      }
    };

    wakeBackend();

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Wait for all images to load
    const images = document.images;
    let loaded = 0;

    if (images.length === 0) {
      setImagesReady(true);
      return;
    }

    const checkDone = () => {
      loaded++;
      if (loaded === images.length) {
        setImagesReady(true);
      }
    };

    Array.from(images).forEach((img) => {
      if (img.complete) {
        checkDone();
      } else {
        img.addEventListener("load", checkDone);
        img.addEventListener("error", checkDone);
      }
    });
  }, []);

  useEffect(() => {
    if (isAppReady) {
      setProgress(100);
    }
  }, [isAppReady]);

  return (
    <div className="App dark:bg-darkbg relative">
      {/* Overlay Modal */}
      {!isAppReady && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Preparing application
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {backendReady ? "Loading assets…" : "Starting backend services…"}
            </p>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-xs text-gray-400 mt-2 text-right">{progress}%</p>
          </div>
        </div>
      )}

      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
