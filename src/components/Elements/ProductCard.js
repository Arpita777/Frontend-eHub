import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context";

export const ProductCard = ({ product }) => {
  const { id, name, overview, price, rating, poster, best_seller } = product;
  const [inCart, setInCart] = useState(false);
  const { addToCart, removeFromCart, cartList } = useCart();

  useEffect(() => {
    const isProductInCart = cartList.find((item) => item.id === product.id);
    if (isProductInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <Link
        to={`/products/${id}`}
        className="relative block aspect-[3/4] overflow-hidden"
      >
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded z-10">
            Best Seller
          </span>
        )}
        {/* <img className="w-full h-full object-cover" src={poster} alt={name} /> */}
        <img src={poster} alt={name} loading="lazy" className="w-full h-full object-cover rounded" />

      </Link>
      <div className="p-5 flex flex-col flex-1">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>

        <div className="mt-auto">
          <div className="flex items-center my-2">
            <Rating rating={rating} />
          </div>

          <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
              <span>$</span>
              <span>{price}</span>
            </span>
            {!inCart ? (
              <button
                onClick={() => addToCart(product)}
                className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300
 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`}
                disabled={product.in_stock ? "" : "disabled"}
              >
                Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
              </button>
            ) : (
              <button
                onClick={() => removeFromCart(product)}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"
              >
                Remove Item <i className="ml-1 bi bi-trash3"></i>
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
