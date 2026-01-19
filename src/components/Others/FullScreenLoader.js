export const FullScreenLoader = ({ text = "Please wait…" }) => {
    return (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-[90%] max-w-sm text-center">
          <div className="flex justify-center mb-4">
            <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {text}
          </p>
        </div>
      </div>
    );
  };
  