import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e0f7f4] py-10 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-teal-700 mb-6 text-center">About Us</h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-teal-600">ShopSwift</span> — your go-to destination for
          stylish fashion, reliable electronics, trendy home décor, and more. We believe shopping should be
          seamless, affordable, and fun!
        </p>

        <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Founded in 2022, ShopSwift started with a simple idea: to bring quality products to your doorstep with
          a click. From humble beginnings, we’ve grown into a trusted eCommerce platform, serving thousands
          of happy customers across India and beyond.
        </p>

        <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Why Shop With Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>🛍️ A wide selection of quality, curated products</li>
          <li>🚚 Fast & free shipping on most orders</li>
          <li>🔒 Secure payment options</li>
          <li>📞 24/7 customer support</li>
          <li>💸 Easy returns & money-back guarantee</li>
        </ul>

        <div className="text-center text-gray-600 mt-6">
          📍 Headquartered in Pune, India | 🌐 Delivering nationwide
        </div>
      </motion.div>
    </div>
  );
};

export default About;
