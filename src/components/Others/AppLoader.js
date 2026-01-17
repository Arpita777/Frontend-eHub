export function AppLoader({ progress, backendReady }) {
    return (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-[90%] max-w-md">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Preparing application
          </h2>
  
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {!backendReady
              ? "Warming up server…"
              : "Optimizing assets…"}
          </p>
  
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
  
          <p className="text-xs text-gray-400 mt-2 text-right">
            {progress}%
          </p>
        </div>
      </div>
    );
  }
  