import React, { useState } from "react";
import { motion } from "framer-motion";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img16 from "../assets/16.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";

const cards = [
  {
    title: "Card One",
    img: img8,
    price: "$49.99",
    category: "Electronics",
    description: "High quality gadget with latest features.",
  },
  {
    title: "Card Two",
    img: img9,
    price: "$19.99",
    category: "Books",
    description: "Bestselling novel with a gripping storyline.",
  },
  {
    title: "Card Three",
    img: img10,
    price: "$299.99",
    category: "Appliances",
    description: "Energy-efficient and compact appliance.",
  },
  {
    title: "Card Four",
    img: img16,
    price: "$89.99",
    category: "Furniture",
    description: "Stylish and ergonomic chair for office.",
  },
  {
    title: "Card Five",
    img: img11,
    price: "$14.99",
    category: "Stationery",
    description: "Premium quality notebooks and pens.",
  },
  {
    title: "Card Six",
    img: img12,
    price: "$24.99",
    category: "Toys",
    description: "Fun and safe toys for all ages.",
  },
  {
    title: "Card Seven",
    img: img13,
    price: "$99.99",
    category: "Fashion",
    description: "Trendy and comfortable clothing.",
  },
  {
    title: "Card Eight",
    img: img14,
    price: "$59.99",
    category: "Home Decor",
    description: "Modern and elegant design elements.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const CardList = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleCardClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const addToCart = (card) => {
    setCartItems([...cartItems, card]);
    alert(`Added "${card.title}" to cart.`);
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          onClick={() => handleCardClick(index)}
          className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow cursor-pointer overflow-hidden"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-64 object-cover bg-gray-200"
          />
          <div className="p-4 space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
            <p className="text-sm text-gray-500">{card.category}</p>
            <p className="text-md font-bold text-blue-600">{card.price}</p>

            {selectedIndex === index && (
              <div className="mt-2 text-sm text-gray-700">
                <p>{card.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevents closing on button click
                    addToCart(card);
                  }}
                  className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CardList;
