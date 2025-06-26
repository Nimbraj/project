import React from 'react'
import Header from '../Component/header'
import CarouselWithCaptions from '../Component/Caousel'
import CardList from '../Component/CardList'
import Section from '../Component/Section'
import { motion } from 'framer-motion'
import Section2 from '../Component/Section2'
import Footer from '../Component/footer'


export default function First() {
  return (
    <div>
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
      </motion.div>

      {/* Carousel Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <CarouselWithCaptions />
      </motion.div>

      {/* Spacing */}
      <div className="my-16" />

      {/* CardList Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <CardList />
      </motion.div>

      {/* Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Section />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Section2/>
      </motion.div>
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <Footer/>
</motion.div>

    </div>
  )
}



