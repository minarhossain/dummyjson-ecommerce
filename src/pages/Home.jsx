import React from "react";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { data, loading } = useProducts("http://dummyjson.com/products");
  // console.log(data);
  const { dispatch } = useCart();
  // console.log(dispatch);
  const handleCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };
  if (loading) return <LoadingPage />;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link to={`/products/${product.id}`} state={product}>
                <h2 className="text-xl font-bold text-blue-600">
                  {product.title}
                </h2>
              </Link>

              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">
                ${product.price}
              </p>
              <button
                onClick={() => handleCart(product)}
                className="bg-green-600 px-6 py-3 text-white text-lg rounded-md"
              >
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
