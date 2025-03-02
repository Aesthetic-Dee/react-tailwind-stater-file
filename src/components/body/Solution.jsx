import React from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-white">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-3xl font-bold text-amber-500 mb-24 inline-block relative"
          variants={fadeIn}
        >
          Our Solution
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-amber-500"></span>
        </motion.h2>
        
        {/* Description Text */}
        <motion.p 
          className="text-gray-600 font-bold text-lg text-center max-w-3xl mx-auto mb-12"
          variants={fadeIn}
        >
          PayRep operates with a two-fold financial solution designed to bridge the gap 
          between commodity traders in need of alternate financing and individual 
          investors seeking structured investment opportunities.
        </motion.p>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Card - Commodity Traders */}
          <motion.div 
            className="flex flex-col items-center bg-amber-500 rounded-b-full p-8 py-24 shadow-lg md:w-5/12"
            variants={cardVariant}
          >
            <h3 className="text-gray-600 text-xl font-semibold mb-4">Commodity Traders</h3>
            <p className="text-gray-600 w-64 text-center">
              We provide trade finance solutions that enable them to fulfill bulk 
              purchase orders from exporters and local processors.
            </p>
          </motion.div>
          
          {/* Center Divider */}
          <motion.div 
            className="bg-gray-500 w-12 h-1 md:h-2 md:w-1 rounded-full md:mx-4"
            variants={fadeIn}
          >
          </motion.div>
          
          {/* Right Card - Individual/Corp account holders */}
          <motion.div 
            className="flex flex-col items-center bg-amber-500 rounded-b-full p-8 py-24 shadow-lg w-full md:w-5/12"
            variants={cardVariant}
          >
            <h3 className="text-gray-600 text-xl font-semibold mb-4">Individual/Corp account holders:</h3>
            <p className="text-gray-600 w-64 text-center">
              We offer investment opportunities in commodity trade, allowing them to 
              earn a defined rate of return within a specified time frame.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionSection;