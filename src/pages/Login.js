import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services";
import { useTitle } from "../hooks/useTitle";
import { useState } from "react";
import { FullScreenLoader } from "../components";

export const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    try {
      const authDetail = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const data = await loginUser(authDetail);
      if (data.accessToken) {
        toast.success("Logged in Successfully!");
        navigate("/products");
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <FullScreenLoader text="Signing you in…" />}

      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
            Login
          </p>
        </section>
        <form onSubmit={handleLogin}>
                    <div className="mb-6">
            <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
              Your email
            </label>
            <input
              type="email"
              id="email"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="shubham@example.com"
              required
              autoComplete="off"
                          />
          </div>
          <div className="mb-6">
            <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
              Your password
            </label>
            <input
              type="password"
              id="password"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
                          />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300
 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-600 hover:bg-blue-700 focus:ring-blue-300
 dark:focus:ring-blue-800"
          >
            Log In
          </button>
        </form>
      </main>
    </>
  );
};
