import React from "react";
import { motion } from 'framer-motion';
import payreplogo from "../header/images/payreplogo.jpeg";
import goods from "../header/images/payrepheader2.jpeg";


const header = () => {
  return (
    <motion.header 
      className="flex flex-col md:flex-row items-center justify-between bg-white"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Left Side Content */}
      <motion.div 
        className="md:w-1/2 text-left ml-8 flex flex-col gap-10"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Logo */}
        <motion.div 
          className="flex items-center mb-4"
          whileHover={{ scale: 1.1 }}
        >
          <img 
            src={payreplogo} 
            alt="Payrep logo" 
            width={200}  
            className=""  />
        </motion.div>
        
        <div>
            {/* Title */}
            <h2 className="mt-4 text-3xl font-bold">
              Financing Trade - Powering <motion.span className="text-yellow-500" whileHover={{ scale: 1.1 }}>Growth</motion.span>
            </h2>
        
            {/* Subtitle */}
            <p className="mt-2 text-gray-700">Alternative Finance for Commodity Traders</p>
        </div>


        {/* SDG List */}
        <ul className="mt-4 text-gray-800">
          <motion.li whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.3 }} viewport={{ once: false, amount: 0.2 }}>
            <strong>SDG1:</strong> No poverty
          </motion.li>
          <motion.li whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.4 }} viewport={{ once: false, amount: 0.2 }}>
            <strong>SDG 8:</strong> Decent work and economic growth
          </motion.li>
          <motion.li whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5 }} viewport={{ once: false, amount: 0.2 }}>
            <strong>SDG 10:</strong> Reduced Inequalities
          </motion.li>
          <motion.li whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
            <strong>SDG 17:</strong> Partnership for Goals
          </motion.li>
        </ul>
      </motion.div>
      
      {/* Right Side Image */}
      <motion.div 
        className="md:w-1/2 mt-8 md:mt-0"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img 
          src={goods} 
          alt="Commodity bags" 
         className="shadow-lg h-screen" />
      </motion.div>
    </motion.header>
  );
};

export default header;
