import React from 'react';
import { motion } from 'framer-motion';
import img34 from '../assets/34.jpg';
function Section2() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:items-center md:gap-10">
            {/* Text Content with Animation */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                  architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                  sequi.
                </p>
              </div>
            </motion.div>

            {/* Image with Hover Zoom Effect and Animation */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={img34}
                className="rounded shadow-lg cursor-pointer"
                alt="Decorative"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
