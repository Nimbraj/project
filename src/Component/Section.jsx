import React from "react";
import { motion } from "framer-motion";
import img23 from '../assets/23.jpg';

const Section = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:items-center md:gap-8">
          
          {/* Image Section */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={img23} // ✅ Corrected here
              className="rounded shadow-md"
              alt="Interactive"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="max-w-lg md:max-w-none">
              <motion.h2
                className="text-2xl font-semibold text-gray-900 sm:text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </motion.h2>

              <motion.p
                className="mt-4 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                sequi.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;
