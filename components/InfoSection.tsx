import React from 'react';
import { motion } from 'framer-motion';

// Inline STATS instead of importing from constants
const STATS = [
  { value: "700+", label: "partner business" },
  { value: "20K+", label: "visitors per event" },
  { value: "5", label: "yrs of experience" }
];

const InfoSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-8 sticky">

      {/* Pink Badge Image */}
      <motion.div 
        className="flex flex-col items-start"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="w-full max-w-md relative group cursor-pointer"
          whileHover={{ scale: 1.05, rotate: -3 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >

          {/* Rotated wrapper so image + text share the same angle */}
          <div className="relative -rotate-2">

            {/* Image */}
            <motion.img
              src="/SMALL_BUISNESS.png"
              alt="Small Business Badge"
              className="w-full h-auto drop-shadow-xl rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />

            {/* Text inside the image */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <span className="font-benoru text-[#5a108a]
                  text-3xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-[2.5rem]
                  -rotate-6
                  pl-8">
                SMALL BUSINESS
              </span>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>


      {/* Description */}
      <motion.div 
        className="prose text-[#5a108a] text-brand-[#5a108a] font-medium text-sm md:text-base leading-relaxed max-w-md"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          Small businesses are the heart of The Flea Fair. Most of the brands that participate are run by women, students, homepreneurs, and first-time entrepreneurs who turn their passion into products.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div 
        className="flex flex-wrap gap-8 items-start pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {STATS.map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4 + (idx * 0.1),
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Number with outline effect */}
            {/* Number with outline effect */}
                        {/* Number with outline effect */}
            <span
              className="relative text-6xl md:text-7xl font-black"
              style={{
                color: "#ffffff",
                WebkitTextStroke: "3px #5a108a",
                textShadow: "0px 5px 0px #5a108a, 0px 7px 10px rgba(90, 16, 138, 0.3)",
                fontFamily: "Impact, 'Arial Black', sans-serif",
                letterSpacing: "0.05em",
                transform: "scaleY(1.05) rotate(-2deg)",
                display: "inline-block"
              }}
            >
              {stat.value}
            </span>
            {/* Label */}
            <span className="text-sm md:text-base font-semibold text-[#5a108a] mt-2 text-center uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default InfoSection;