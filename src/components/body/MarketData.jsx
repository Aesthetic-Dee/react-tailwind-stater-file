import React from 'react';
import { motion } from 'framer-motion';
import farm1 from "./assets/farm1.jpeg";
import farm2 from "./assets/farm2.jpeg";
import farm3 from "./assets/farm3.jpeg";

// const MarketData = () => {
//   return (
//     <section className="relative w-full h-auto py-16 text-white">
//       {/* Background Image */}
//       <div
//       className="absolute inset-0 w-full h-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${farm1})`}}>
//       </div>
      
//       <div className="relative z-10 container mx-auto px-8 text-center md:text-left">
//         {/* Section Title */}
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6"
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: -50 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           Market Data
//         </motion.h2>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Data Points */}
//           <motion.div 
//             className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: false, amount: 0.2 }}
//           >
//             <p className="text-lg">Agriculture contributes about <span className="text-yellow-400 font-bold">25-30%</span> of Nigeria's Gross Domestic Product (GDP).</p>
//           </motion.div>
          
//           <motion.div 
//             className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: false, amount: 0.2 }}
//           >
//             <p className="text-lg">The Nigerian agriculture market, including agro trading, is estimated at around <span className="text-yellow-400 font-bold">$41 billion annually</span>.</p>
//           </motion.div>
          
//           <motion.div 
//             className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             viewport={{ once: false, amount: 0.2 }}
//           >
//             <p className="text-lg">Nigeria exports over <span className="text-yellow-400 font-bold">$3 billion</span> in agricultural products annually, focusing on cocoa, cashew nuts, and sesame.</p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketData;



const MarketData = () => {
  // You would import your image like this
  // import farmImage from './path-to-your-image.jpg';
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  return (
    <div className="relative overflow-hidden w-full h-[500px]">
      {/* Background Image */}
      <div
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${farm3})`}}>
      </div>
    
      {/* Content Container */}
      <motion.div 
        className="relative z-10 w-full h-full flex flex-col md:flex-row items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >

        {/* Vertical dividers container - these will be persistent */}
        <div className="absolute inset-0 w-full h-full hidden md:flex pointer-events-none">
          <div className="w-1/3"></div>
          <div className="w-0.5 mt-44 h-60 bg-red-600"></div>
          <div className="w-1/3"></div>
          <div className="w-0.5 mt-16 h-60 bg-red-600"></div>
          <div className="w-1/3"></div>
        </div>
        
        {/* First Section */}
        <motion.div 
          className="flex flex-col gap-48 md:w-1/3 p-8 md:self-start"
          variants={fadeInUp}
        >

        {/* Title */}
        <motion.h2 
        className="flex flex-col text-3xl font-semibold text-yellow-500 mb-10"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        >
        Market Data
        <motion.span 
        className="border-b-4 border-yellow-500 w-16"
        whileInView={{ scaleX: 1 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        ></motion.span>
        </motion.h2>

        <div>
          <p className="text-white font-bold text-2xl">
            Agriculture contributes about <span className="text-yellow-500 font-bold">25-30%</span> of Nigeria's Gross Domestic Product (GDP).
          </p>
          <p className="text-xs text-gray-300 mt-2">
            https://www.fwresearch.com/industry-report/nigeria-agriculture-market-outlook
          </p> 
        </div>

        </motion.div>
        
        {/* Second Section */}
        <motion.div 
          className="md:w-1/3 p-4 md:self-center md:"
          variants={fadeInUp}
        >
          <p className="text-white font-bold text-2xl">
            The Nigerian agriculture market, including agro trading, is estimated at around <span className="text-yellow-500 font-bold">$41 billion annually.</span>
          </p>
          <p className="text-xs text-gray-300 mt-2">
            https://www.fwresearch.com/industry-report/nigeria-agriculture-market-outlook
          </p>
          
          <div className="absolute right-0 top-0 h-full w-0.5 bg-red-600"></div>
        </motion.div>

        {/* <div className="hidden md:block absolute right-0 top-0 h-full w-0.5 bg-red-600"></div> */}
        
        {/* Third Section */}
        <motion.div 
          className="md:w-1/3 p-4 md:self-end md:mb-72"
          variants={fadeInUp}
        >
          <p className="text-white font-bold text-2xl">
            Nigeria exports over <span className="text-yellow-500 font-bold">$3 billion</span> in agricultural products annually, focusing on cocoa, cashew nuts, and sesame.
          </p>
          <p className="text-xs text-gray-300 mt-2">
            https://newsblogging.com/nigeria-agricultural-exports/
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketData;