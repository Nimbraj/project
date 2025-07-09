import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-10 px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-400">ShopEasy</h3>
          <p className="text-sm text-gray-300">
            Your one-stop shop for electronics, fashion, home goods and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-teal-400">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/product" className="hover:text-white">Products</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4 text-teal-400">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-2">
            Subscribe for updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-black w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4 text-teal-400">Follow Us</h4>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
