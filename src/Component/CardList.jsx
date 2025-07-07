import React from "react";
import { motion } from "framer-motion";
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img16 from '../assets/16.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';

const cards = [
  { title: "Card One", img: img8 },
  { title: "Card Two", img: img9 },
  { title: "Card Three", img: img10 },
  { title: "Card Four", img: img16 },
  { title: "Card Five", img: img11 },
  { title: "Card Six", img: img12 },
  { title: "Card Seven", img: img13 },
  { title: "Card Eight", img: img14 },
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
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          style={{ height: "455px" }}
          variants={cardVariants}
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
    </motion.div>
  );
};

export default CardList;
