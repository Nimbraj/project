import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // ✅ Add this line (React Icons)

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dummy cart count for now; connect to global state if needed
  const cartCount = 3;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#cdebdd] shadow z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center text-teal-600" aria-label="Home">
          <svg
            className="h-8 w-8"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861..."
              fill="currentColor"
            />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-teal-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-600 transition">About</Link></li>
            <li><Link to="/history" className="hover:text-teal-600 transition">History</Link></li>
            <li><Link to="/services" className="hover:text-teal-600 transition">Services</Link></li>
            <li><Link to="/product" className="hover:text-teal-600 transition">Product</Link></li>
            <li><Link to="/cards" className="hover:text-teal-600 transition">Cards</Link></li> {/* ✅ New Menu */}
            <li><Link to="/blog" className="hover:text-teal-600 transition">Blog</Link></li>
          </ul>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative text-gray-700 hover:text-teal-600">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 transition"
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            to="/register"
            className="hidden sm:block rounded-md bg-white border border-teal-500 px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-100 transition"
          >
            Register
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-md bg-gray-100 p-2 text-gray-600 hover:text-gray-800 transition"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav id="mobile-menu" className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/" className="block hover:text-teal-600">Home</Link></li>
            <li><Link to="/about" className="block hover:text-teal-600">About</Link></li>
            <li><Link to="/history" className="block hover:text-teal-600">History</Link></li>
            <li><Link to="/services" className="block hover:text-teal-600">Services</Link></li>
            <li><Link to="/projects" className="block hover:text-teal-600">Projects</Link></li>
            <li><Link to="/product" className="block hover:text-teal-600">Product</Link></li>
            <li><Link to="/cards" className="block hover:text-teal-600">Cards</Link></li> {/* ✅ New Menu */}
            <li><Link to="/blog" className="block hover:text-teal-600">Blog</Link></li>
            <li><Link to="/login" className="block hover:text-teal-600">Login</Link></li>
            <li><Link to="/register" className="block hover:text-teal-600">Register</Link></li>
            <li><Link to="/cart" className="block hover:text-teal-600">Cart 🛒</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
