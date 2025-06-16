import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#cdebdd] shadow z-50">

      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a className="flex items-center text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <svg className="h-8 w-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847..."
              fill="currentColor"
            />
          </svg>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-gray-600">
            <li><a href="#" className="hover:text-teal-600 transition">About</a></li>
            <li><a href="#" className="hover:text-teal-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-teal-600 transition">History</a></li>
            <li><a href="#" className="hover:text-teal-600 transition">Services</a></li>
            <li><a href="#" className="hover:text-teal-600 transition">Projects</a></li>
            <li><a href="#" className="hover:text-teal-600 transition">Blog</a></li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 transition"
          >
            Login
          </a>
          <a
            href="#"
            className="hidden sm:block rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition"
          >
            Register
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md bg-gray-100 p-2 text-gray-600 hover:text-gray-800 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
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

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="block hover:text-teal-600 transition">About</a></li>
            <li><a href="#" className="block hover:text-teal-600 transition">Careers</a></li>
            <li><a href="#" className="block hover:text-teal-600 transition">History</a></li>
            <li><a href="#" className="block hover:text-teal-600 transition">Services</a></li>
            <li><a href="#" className="block hover:text-teal-600 transition">Projects</a></li>
            <li><a href="#" className="block hover:text-teal-600 transition">Blog</a></li>
            <li><a href="#" className="block hover:text-teal-600 transition">Login</a></li>
            <li><a href="#" className="block hover:text-teal-600 transition">Register</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
