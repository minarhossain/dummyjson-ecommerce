import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { state } = useCart();
  // console.log(state);

  return (
    <nav className="bg-pink-100 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-pink-600 text-2xl font-bold">
          <a href="/">SweetBrand</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold items-center">
          <a href="/" className="text-pink-600 hover:text-pink-500 transition">
            Home
          </a>
          <a
            href="/about"
            className="text-pink-600 hover:text-pink-500 transition"
          >
            About
          </a>
          <a
            href="/services"
            className="text-pink-600 hover:text-pink-500 transition"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-pink-600 hover:text-pink-500 transition"
          >
            Contact
          </a>

          {/* Cart Button */}
          <Link to="/cart" className="relative">
            <AiOutlineShoppingCart
              size={28}
              className="text-pink-600 hover:text-pink-500 transition cursor-pointer"
            />
            {state.carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full px-2 text-sm">
                {state.carts.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Cart Button */}
          <Link to="/cart" className="relative">
            <AiOutlineShoppingCart
              size={24}
              className="text-pink-600 hover:text-pink-500 transition cursor-pointer"
            />
            {state.carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full px-2 text-xs">
                {state.carts.length}
              </span>
            )}
          </Link>

          {/* Menu Toggle Button */}
          <div onClick={toggleMenu} className="text-pink-600">
            {isOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-pink-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="/"
              className="text-pink-600 hover:text-pink-500 text-lg transition"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-pink-600 hover:text-pink-500 text-lg transition"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="/services"
              className="text-pink-600 hover:text-pink-500 text-lg transition"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-pink-600 hover:text-pink-500 text-lg transition"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
