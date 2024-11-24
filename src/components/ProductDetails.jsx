import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { state: product } = useLocation();
  const { state, dispatch } = useCart();

  const findProduct =
    state.carts &&
    state.carts.find((cartProduct) => cartProduct.id === product.id);
  const handleCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const cartProductIncrement = (id) => {
    dispatch({ type: "INCREMENT_CART_PRODUCT", payload: { id } });
  };
  const cartProductDecrement = (id) => {
    dispatch({ type: "DECREMENT_CART_PRODUCT", payload: { id } });
  };
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-pink-500 mb-10">
        {product.title}
      </h1>

      {/* Product Image and Description */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 bg-pink-50 p-6 rounded-xl shadow-md">
        <div className="md:w-1/2 rounded-lg overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            About this Product
          </h2>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="text-gray-500">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">SKU:</span> {product.sku}
            </p>
            {findProduct ? (
              <div>
                <button onClick={() => cartProductIncrement(product.id)}>
                  +
                </button>
                <input
                  type="number"
                  value={findProduct ? findProduct.quantity : 0}
                  onChange={() => {}}
                />
                <button onClick={() => cartProductDecrement(product.id)}>
                  -
                </button>
              </div>
            ) : (
              <button onClick={() => handleCart(product)}>Add To Cart</button>
            )}
          </div>
        </div>
      </div>

      {/* Pricing and Stock */}
      <div className="p-6 rounded-xl shadow-md mb-8 bg-purple-50">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          Pricing & Availability
        </h2>
        <p className="text-xl font-bold text-purple-700 mb-2">
          Price: ${product.price}
        </p>
        <p className="text-sm text-purple-500">
          Discount: {product.discountPercentage}%
        </p>
        <p className="text-lg font-semibold mt-4">
          Availability:
          <span
            className={product.stock > 5 ? "text-green-500" : "text-red-500"}
          >
            {" "}
            {product.availabilityStatus}
          </span>
        </p>
        <p className="text-gray-600 mt-2">
          Minimum Order Quantity: {product.minimumOrderQuantity}
        </p>
      </div>

      {/* Specifications */}
      <div className="p-6 rounded-xl shadow-md mb-8 bg-pink-50">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">
          Specifications
        </h2>
        <p>
          <span className="font-semibold">Weight:</span> {product.weight} g
        </p>
        <p>
          <span className="font-semibold">Dimensions:</span>{" "}
          {product.dimensions.width} x {product.dimensions.height} x{" "}
          {product.dimensions.depth} cm
        </p>
        <p>
          <span className="font-semibold">Warranty:</span>{" "}
          {product.warrantyInformation}
        </p>
        <p>
          <span className="font-semibold">Shipping:</span>{" "}
          {product.shippingInformation}
        </p>
      </div>

      {/* Customer Reviews */}
      <div className="p-6 rounded-xl shadow-md mb-8 bg-purple-50">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          Customer Reviews
        </h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 rounded-lg bg-white shadow-sm">
            <p className="font-semibold text-purple-700">
              {review.reviewerName}
            </p>
            <p className="text-sm text-gray-500">Rating: {review.rating} / 5</p>
            <p className="italic text-gray-600">"{review.comment}"</p>
          </div>
        ))}
      </div>

      {/* Return Policy */}
      <div className="p-6 rounded-xl shadow-md mb-8 bg-pink-100">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">
          Return Policy
        </h2>
        <p className="text-gray-700">{product.returnPolicy}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
