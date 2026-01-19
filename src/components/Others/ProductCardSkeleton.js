export const ProductCardSkeleton = () => {
    return (
      <div className="animate-pulse border rounded-lg p-4 dark:border-gray-700">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4" />
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-full" />
      </div>
    );
  };
  