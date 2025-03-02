import React from "react";
import { motion } from 'framer-motion';
import globe from "./assets/world-grid.png";
import food from "./assets/food-safety.png";
import deficit from "./assets/deficit.png";


const Problem = () => {
  return (
    <motion.section 
      className="px-12 py-14 bg-yellow-100 text-gray-900"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Title */}
      <motion.h2 
        className="flex flex-col text-2xl font-bold text-yellow-500"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Our Problem
        <motion.span 
        className="border-b-4 border-yellow-500 w-16"
        whileInView={{ scaleX: 1 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        ></motion.span>
      </motion.h2>
      
      {/* Description */}
      <motion.p 
        className="mt-4 text-lg text-gray-700 font-bold max-w-3xl"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        The agro-trading market faces a significant challenge with inflexible funding options,
        limiting the ability of traders and aggregators to meet demand and ensure food security within the supply chain.
      </motion.p>
      
      {/* Icons Section */}
      <div className="my-24 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Supply Chain Bottlenecks */}
        <motion.div 
          className="flex flex-col items-center text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={globe} alt="Supply Chain" width={60} height={60} />
          <p className="mt-2 text-yellow-600 font-semibold">Supply Chain Bottlenecks</p>
        </motion.div>
        
        {/* Food Security Risks */}
        <motion.div 
          className="flex flex-col items-center text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={food} alt="Food Security" width={60} height={60} />
          <p className="mt-2 font-semibold">Food Security Risks</p>
        </motion.div>
        
        {/* Trade Deficit Challenges */}
        <motion.div 
          className="flex flex-col items-center text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={deficit} alt="Trade Deficit" width={60} height={60} />
          <p className="mt-2 text-yellow-600 font-semibold">Trade Deficit Challenges</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Problem;

