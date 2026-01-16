import { useEffect, useState } from "react";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  const [isWakingUp, setIsWakingUp] = useState(true);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    // Fake progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 400);

    const wakeUpServer = async () => {
      try {
        await fetch("https://your-app-name.onrender.com/users");
      } catch (err) {
        console.error(err);
      } finally {
        clearInterval(progressInterval);
        setProgress(100);

        setTimeout(() => {
          setIsWakingUp(false);
        }, 300);
      }
    };

    wakeUpServer();

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="App dark:bg-darkbg relative">
      {/* Overlay Modal */}
      {isWakingUp && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Starting backend services
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Waking up demo server… This may take a few seconds.
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

      {/* App Content */}
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
