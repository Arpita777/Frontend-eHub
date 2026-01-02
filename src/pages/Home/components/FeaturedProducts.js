import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const data = await getFeaturedList();
        setFeaturedProducts(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchFeaturedProducts();
  }, []);

  return (
    <section className="my-20 px-4">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-10 underline underline-offset-8">
        Featured eBooks
      </h1>

      <div
        className="
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          place-items-stretch
        "
      >
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
