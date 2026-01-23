import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFilter } from "../../context";
import { useTitle } from "../../hooks/useTitle";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { getProductList } from "../../services";
import { toast } from "react-toastify";
import { ProductCardSkeleton } from "../../components";

export const ProductsList = () => {
  const {
    productList,
    setProductList,
    sortByValue,
    rating,
    bestSellerOnly,
    inStockOnly,
  } = useFilter();
  const [showFilters, setShowFilters] = useState(false);
  const searchQuery = useLocation().search;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const searchTerm = new URLSearchParams(searchQuery).get("q");
  useTitle("Explore eBooks Collection");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
  
        let url = `${process.env.REACT_APP_HOST}/444/products`;
        const params = new URLSearchParams();
  
        if (searchTerm) params.append("name_like", searchTerm);
        if (sortByValue === "LOW_TO_HIGH") {
          params.append("_sort", "price");
          params.append("_order", "asc");
        }
        if (sortByValue === "HIGH_TO_LOW") {
          params.append("_sort", "price");
          params.append("_order", "desc");
        }
        if (rating) params.append("rating_gte", rating);
        if (bestSellerOnly) params.append("best_seller", true);
        if (inStockOnly) params.append("in_stock", true);
  
        const finalUrl = `${url}?${params.toString()}`;
        navigate(`?${params.toString()}`, { replace: true });
  
        const data = await getProductList(finalUrl);
        setProductList(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  
    fetchProducts();
  }, [searchTerm, sortByValue, rating, bestSellerOnly, inStockOnly]); //eslint-disable-line react-hooks/exhaustive-deps
  

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       let url = `${process.env.REACT_APP_HOST}/444/products`;

  //       const params = new URLSearchParams();

  //       if (searchTerm) params.append("name_like", searchTerm);

  //       if (sortByValue === "LOW_TO_HIGH") {
  //         params.append("_sort", "price");
  //         params.append("_order", "asc");
  //       }
  //       if (sortByValue === "HIGH_TO_LOW") {
  //         params.append("_sort", "price");
  //         params.append("_order", "desc");
  //       }

  //       if (rating) params.append("rating_gte", rating);

  //       if (bestSellerOnly) params.append("best_seller", true);

  //       if (inStockOnly) params.append("in_stock", true);

  //       const finalUrl = `${url}?${params.toString()}`;
  //       navigate(`?${params.toString()}`, { replace: true });
  //       const data = await getProductList(finalUrl);
  //       setProductList(data);
  //     } catch (error) {
  //       toast.error(error.message, {
  //         closeButton: true,
  //         position: "bottom-center",
  //       });
  //     }
  //   }

  //   fetchProducts();
  // }, [searchTerm, sortByValue, rating, bestSellerOnly, inStockOnly]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({productList.length})
          </span>
          <span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {isLoading
    ? Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))
    : productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
</div>

        
      </section>
      {showFilters && <FilterBar setShowFilters={setShowFilters} />}
    </main>
  );
};
