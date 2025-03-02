import React from 'react';
import { motion } from 'framer-motion';

const TradeFinance = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left section - Text content */}
        <motion.div className="w-full md:w-1/2" variants={slideInLeft}>
          <h2 className="text-3xl font-bold text-amber-500 mb-24 inline-block relative">
            The Trade Finance Fund
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Structured Capital Deployment
          </h3>
          
          <p className="text-gray-700 mb-4">
            <span className="font-medium text-grey-800">Invested funds</span> pooled from account holders alongside bank-owned 
            liquidity, are pooled into the <span className="font-medium text-gray-800">PayRep Trade Finance Fund</span>.
          </p>
          
          <p className="text-gray-700">
            This capital is strategically allocated to different trade cycles across
            multiple commodities, ensuring continuous liquidity and optimal
            returns. Profits generated from these trade cycles are then distributed
            to investors within the agreed timelines, creating a sustainable and
            transparent financial ecosystem.
          </p>
          
          {/* Dots decoration */}
          <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Right section - Mobile app screenshot */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          variants={slideInRight}
        >
          <div className="relative max-w-xs">
            {/* iPhone frame */}
            <div className="bg-black rounded-3xl p-3 shadow-xl">
              {/* Screen content */}
              <div className="bg-white rounded-2xl overflow-hidden h-full">
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <p className="font-medium">Notification</p>
                    <div className="w-5"></div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-4">Today</p>
                  
                  {/* Notification items */}
                  {[
                    {
                      type: "Credit Alert",
                      message: "PayRep successfully transferred your investment to your personal account.",
                      time: "10 mins ago"
                    },
                    {
                      type: "Savings Goal",
                      message: "You created a monthly savings goal of N40,000 for July.",
                      time: "18th September, 2024"
                    },
                    {
                      type: "Credit Alert",
                      message: "You have successfully transferred your easy savings to your personal account.",
                      time: "1 hour ago"
                    },
                    {
                      type: "Automated Savings",
                      message: "You created weekly automated savings of N20,000.",
                      time: "3 hours ago"
                    }
                  ].map((notification, index) => (
                    <div key={index} className="mb-4 flex">
                      <div className="bg-amber-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-xs font-bold text-white">P</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-medium">{notification.type}</p>
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TradeFinance;