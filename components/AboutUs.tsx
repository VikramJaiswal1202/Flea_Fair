import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const gridImages = [
  "/flea-1.png", 
  "/flea-2.png", 
  "/flea-3.png", 
  "/flea-4.png", 
  "/flea-5.png",
];
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function AboutUs() {
  return (
    <section className="w-full bg-[#F8F7F5] py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Title */}
            <div className="inline-block">
              {/* ABOUT */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-[#a3e635] to-[#84cc16] rounded-2xl transform -rotate-4 z-10"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ rotate: -6, scale: 1.05 }}
                />
                <motion.h2 
                  className="relative px-6 py-3 text-4xl md:text-5xl font-benoru uppercase text-[#0ea5e9] transform -rotate-4 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  ABOUT
                </motion.h2>
              </div>

              {/* US */}
              <div className="relative -mt-3 ml-20">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-[#ef4444] to-[#dc2626] rounded-2xl transform rotate-3"
                  initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                />
                <motion.h2 
                  className="relative px-6 py-3 pl-13 text-4xl md:text-5xl font-benoru uppercase text-[#fbbf24] transform rotate-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                  US
                </motion.h2>
              </div>
            </div>

            {/* Description */}
            <motion.div
              className="space-y-6 text-[#5b21b6] leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              <p className="text-base md:text-lg">
                <span className="font-bold text-lg md:text-xl">The Flea Fair</span> is a community-driven marketplace that brings together small businesses, homegrown brands, artists, creators, and thousands of visitors under one vibrant space. Started in 2021, the fair now welcomes 20,000+ visitors annually, hosts 150+ local businesses, and is powered by a passionate team of 100+ volunteers.
              </p>

              <p className="text-base md:text-lg font-semibold">
                Our mission is simple — support small businesses, promote local talent, and create an experience that the city loves.
              </p>
            </motion.div>

            {/* Socials */}
            <motion.div 
              className="space-y-4" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              <h3 className="text-xl md:text-2xl font-black uppercase text-[#5b21b6]">
                FOLLOW US ON SOCIALS
              </h3>

              <motion.div className="flex gap-4" variants={staggerContainer}>
                <motion.a
                  href="https://instagram.com/thefleafair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.a>

                <motion.a
                  href="https://facebook.com/thefleafair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1877f2] flex items-center justify-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
                </motion.a>

                <motion.a
                  href="https://youtube.com/@thefleafair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ff0000] flex items-center justify-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column – Grid */}
          <motion.div
            className="grid grid-cols-3 gap-3 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="bg-[#0ea5e9] h-32 sm:h-40 md:h-48 rounded-tr-[60px]" variants={rotateIn} />

<motion.div className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl" variants={scaleIn}>
  <img src={gridImages[0]} className="w-full h-full object-cover" />
</motion.div>

<motion.div className="bg-[#fbbf24] h-32 sm:h-40 md:h-48 rounded-tl-[60px]" variants={rotateIn} />

<motion.div className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl" variants={scaleIn}>
  <img src={gridImages[1]} className="w-full h-full object-cover" />
</motion.div>

<motion.div className="h-32 sm:h-40 md:h-48 flex items-center justify-center" variants={scaleIn}>
  <img src="/grid logo.png" className="w-full h-full object-contain" />
</motion.div>

<motion.div className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl" variants={scaleIn}>
  <img src={gridImages[2]} className="w-full h-full object-cover" />
</motion.div>

<motion.div className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl" variants={scaleIn}>
  <img src={gridImages[3]} className="w-full h-full object-cover" />
</motion.div>

<motion.div className="bg-[#ec4899] h-32 sm:h-40 md:h-48 rounded-tr-[60px]" variants={rotateIn} />

<motion.div className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl" variants={scaleIn}>
  <img src={gridImages[4]} className="w-full h-full object-cover" />
</motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}