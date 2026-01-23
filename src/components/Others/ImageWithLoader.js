import { useState } from "react";

export const ImageWithLoader = ({
  src,
  alt,
  className = "",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Loader */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse rounded">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin" />
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`
          h-full w-full object-contain rounded
          transition-opacity duration-500
          ${loaded ? "opacity-100" : "opacity-0"}
          ${className}
        `}
      />
    </div>
  );
};
