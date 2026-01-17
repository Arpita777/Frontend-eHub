import { useState } from "react";

export const ImageWithLoader = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-lg">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-600" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};
