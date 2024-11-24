import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  // Example cart items state

  const { state, dispatch } = useCart();
  const cartItems = state.carts;
  console.log(cartItems);
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle remove item
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    // setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-8 bg-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow-lg rounded-lg p-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-pink-600">
                    {item.title}
                  </h2>
                  <p className="text-gray-500">${item.price} each</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-pink-500 hover:text-pink-700"
                >
                  <AiOutlineDelete size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Order Summary
            </h2>
            <p className="text-lg">
              Total Items:{" "}
              <span className="font-semibold">{cartItems.length}</span>
            </p>
            <p className="text-lg mb-4">
              Total Price:{" "}
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </p>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-500 mt-6">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
