import { Link } from "react-router-dom";
import { useCart } from "../../../context";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <Link to={`/products/${product.id}`}>
          <img
            className="w-32 rounded"
            src={product.poster}
            alt={product.name}
          />
        </Link>
        <div className="">
          <Link
            to={`/products/${product.id}`}
            className="ml-2 text-blue-600 underline underline-offset-4 decoration-1 transition-colors
             hover:text-blue-700 hover:decoration-2
             dark:text-slate-200 dark:hover:text-white"
          >
            {product.name}
          </Link>
          <button
            onClick={() => removeFromCart(product)}
            className="text-base ml-2 text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>${product.price}</span>
      </div>
    </div>
  );
};
