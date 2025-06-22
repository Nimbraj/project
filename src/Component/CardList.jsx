import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Card One",
    img: "#",
  },
  {
    title: "Card Two",
    img: "#",
  },
  {
    title: "Card Three",
    img: "#",
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          style={{ height: "455px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-64 object-cover bg-gray-200"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardList;
