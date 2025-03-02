import React from 'react';
import { motion } from 'framer-motion';

const How = () => {
  const steps = [
    {
      id: 1,
      title: "Onboarding & KYC",
      sections: [
        {
          title: "Individual Investors:",
          items: [
            "Open account with PayRep",
            "Fulfil Enhanced Due Diligence for trade finance portfolio",
            "Deposit funds within pre-defined thresholds"
          ]
        },
        {
          title: "Commodity Aggregators & Business Account Holders:",
          items: [
            "Register a business account",
            "Submit documentation and undergo risk assessment",
            "Access pre-approved trade finance facilities",
            "Risk Assessment should be a page detailing the process"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Trade Financing & Execution",
      sections: [
        {
          title: "Fund Allocation:",
          items: [
            <span key="fund-allocation">
              <span className="text-yellow-500 font-medium">PayRep</span> deploys pooled capital from individual investors and bank-owned funds into structured commodity trade cycles.
            </span>
          ]
        },
        {
          title: "",
          items: [
            "Aggregators receive financing to purchase commodities and fulfill purchase orders from exporters and local processors."
          ]
        },
        {
          title: "Trade Execution:",
          items: [
            "The financed aggregator delivers commodities per agreed contracts.",
            "Trade cycles are managed"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Profit Realization & Distribution",
      sections: [
        {
          title: "Revenue Collection:",
          items: [
            <span key="revenue-collection">
              Upon successful trade, profits are calculated <span className="text-yellow-500 font-medium">based on pre-agreed margins</span> and investment terms.
            </span>
          ]
        },
        {
          title: "Profit Sharing & Payouts:",
          items: [
            "Aggregators repay trade finance, including an agreed share of profits.",
            "Individual investors receive their returns in their wallets"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Reinvestment & Growth",
      sections: [
        {
          title: "Investors can choose to:",
          items: [
            "Reinvest capital and profits into a new trade cycle.",
            "Reinvest the capital and withdraw their profit/returns.",
            "Withdraw funds based on the agreed investment timeline."
          ]
        },
        {
          title: "Aggregators can:",
          items: [
            "Access additional financing for subsequent trade cycles.",
            "Expand their trading volume through consistent performance and repayment history."
          ]
        }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const triangleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* How Does it Work? - Vertical text */}
      <div className="absolute right-0  left-273 top-0 bottom-0 flex items-center">
        <div className="transform rotate-90 origin-center">
          <h2 className="text-3xl font-bold text-yellow-500 tracking-wider whitespace-nowrap">
            How Does it Work?
          </h2>
        </div>
      </div>
      
      {/* Dotted pattern top right */}
      <div className="absolute top-4 right-4">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={`dot-tr-${i}`} className="h-1 w-1 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>

      {/* Dotted pattern bottom right */}
      <div className="absolute bottom-4 right-4">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={`dot-br-${i}`} className="h-1 w-1 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>

      {/* Main content */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step) => (
          <motion.div 
            key={step.id} 
            className="flex flex-col h-full border-r border-gray-400 last:border-r-0 px-4"
            variants={itemVariants}
          >
            <h3 className="text-center font-bold text-brown-800 mb-6 text-lg">{step.title}</h3>
            
            <div className="space-y-6 flex-grow">
              {step.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  {section.title && (
                    <h4 className="font-semibold text-gray-800 text-sm">{section.title}</h4>
                  )}
                  <ul className="space-y-2">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-1.5 mr-2 shrink-0"></span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center items-center">
              <motion.div
                className="relative"
                variants={triangleVariants}
              >
                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-yellow-500 border-r-[20px] border-r-transparent"></div>
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-brown-800 font-bold text-sm border border-gray-300">
                  {step.id}
                </div> */}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom dots */}
      {/* <div className="flex justify-center mt-6 space-x-2">
        {steps.map((step) => (
          <div 
            key={`dot-${step.id}`} 
            className={`w-2 h-2 rounded-full ${step.id === 1 ? 'bg-yellow-500' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default How;