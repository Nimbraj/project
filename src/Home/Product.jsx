import React from 'react';
import Moustselling from '../Component/Moustselling';
import CardList from '../Component/CardList';
import Footer from '../Component/Footer';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

function Product() {
  return (
    <div className="pt-20">
      {/* Moustselling with animation */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Moustselling />
      </motion.div>

      {/* CardList with animation */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <CardList />
      </motion.div>

      {/* Footer with animation */}
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Product;
