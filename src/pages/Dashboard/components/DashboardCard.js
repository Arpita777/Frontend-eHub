import { Link } from "react-router-dom";

export const DashboardCard = ({ order }) => {
  return (
    <div
      className="
      max-w-4xl m-auto mb-6 p-4
      rounded-xl border border-slate-200
      bg-white shadow-sm
      transition-shadow transition-transform duration-200
      hover:shadow-md hover:-translate-y-0.5
      dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900/40
    "
    >
      <div className="flex justify-between text-sm mb-4 font-semibold dark:text-slate-200">
        <span>Order Id: {order.id}</span>
        <span>Total: ${order.amount_paid}</span>
      </div>
      {order.cartList.map((product) => (
        <div
          key={product.id}
          className="flex flex-wrap justify-between py-4 border-t border-slate-100 dark:border-slate-700"
        >
          <div className="flex gap-4">
            <Link to={`/products/${product.id}`}>
              <img
                className="w-32 rounded-lg object-cover shadow-sm"
                src={product.poster}
                alt={product.name}
              />
            </Link>
            <div>
              <Link
                to={`/products/${product.id}`}
                className="
                  block text-blue-600 font-medium
                  underline underline-offset-4 decoration-1
                  transition-colors
                  hover:text-blue-700 hover:decoration-2
                  dark:text-slate-200 dark:hover:text-white
                "
              >
                {product.name}
              </Link>
              <div className="mt-2 text-lg font-semibold dark:text-slate-200">
                ${product.price}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
