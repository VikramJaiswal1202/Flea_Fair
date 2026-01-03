'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Marquee } from '../components/Marquee';
import { FleaFairLogo } from '../components/FleaFairLogo';
import { StickerCluster } from '../components/Stickers';
import { HeroSection } from '../components/HeroSection';
import QuickLinksFooter from '@/components/footer';
import AboutUs from '../components/AboutUs';
import Sponsors from '../components/Sponsors';
import Dot from '../components/Dot';
import InfoSection from '../components/InfoSection';
import GridSection from '../components/GridSection';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
};

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F7F5] text-slate-900 font-sans selection:bg-brand-pink selection:text-white relative">
      {/* Marquee - no animation needed as it's already animated */}
      <Marquee />
      
      {/* Navbar with fade in */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Navbar />
      </motion.div>

      <main className="grow relative flex flex-col items-start justify-start pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
        {/* Logo with slide in from left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          <FleaFairLogo />
        </motion.div>

        {/* Sticker Cluster with scale animation */}
        <motion.div 
          className="relative w-full mt-5 sm:mt-50 md:mt-8 z-30 md:absolute md:bottom-[250px] md:left-20"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <StickerCluster />
        </motion.div>

        {/* Hero Section with fade in up */}
        <motion.div
          className="w-full mt-6 sm:mt-8 md:mt-10 relative z-20 flex justify-center items-center lg:block lg:justify-start lg:items-start"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <HeroSection />
        </motion.div>
      </main>

      {/* Second Section with stagger animation */}
      <motion.div 
        className="min-h-screen bg-[#F8F7F5] font-sans pb-12 sm:pb-16 md:pb-20 mt-16 sm:mt-24 md:mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Dotted line */}
        <motion.div 
          className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-10xl mx-auto"
          variants={fadeIn}
        >
          <Dot />
        </motion.div>

        {/* Sponsors with fade in up */}
        <motion.div variants={fadeInUp}>
          <Sponsors />
        </motion.div>

        {/* Dotted line */}
        <motion.div 
          className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-10xl mx-auto"
          variants={fadeIn}
        >
          <Dot />
        </motion.div>

        {/* Info and Grid Section */}
        <motion.main 
          className="max-w-10xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-20 mt-8 sm:mt-10 md:mt-12"
          variants={staggerContainer}
        >
          {/* Info Section - Sidebar with slide in from left */}
          <motion.div 
            className="w-full lg:w-1/3 lg:sticky lg:top-8 h-fit"
            variants={slideInLeft}
          >
            <InfoSection />
          </motion.div>

          {/* Grid Section - Main Content with slide in from right */}
          <motion.div 
            className="w-full lg:w-2/3"
            variants={slideInRight}
          >
            <GridSection />
          </motion.div>
        </motion.main>

        {/* Founder's Note with fade in up */}
        <motion.main
          className="w-full flex justify-center mt-8 sm:mt-12 md:mt-20 lg:mt-28 xl:mt-32 px-4 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="w-full max-w-[2000px]">
            {/* Responsive Founder's Note */}
            <div className="relative">
              {/* Mobile Layout - Stacked */}
              <div className="block md:hidden">
                <div className="bg-[#60C0FF] rounded-3xl p-6 mb-6">
                  <h2 className="text-xl font-extrabold mb-4 tracking-wide uppercase text-[#064789]">
                    FOUNDER'S NOTE
                  </h2>
                  
                  <div className="w-full max-w-[280px] mx-auto mb-6">
                    <img 
                      src="/ankur.jpeg" 
                      alt="ANKUR PACHISIA" 
                      className="w-full h-auto object-cover rounded-3xl"
                    />
                  </div>
                  
                  <p className="text-sm font-bold leading-relaxed mb-4 text-[#f9f9f9]">
                    The Flea Fair started with one simple goal - to support small businesses and give them the platform they deserve. Today, as our community grows stronger with every edition, our vision is clear: to expand The Flea Fair to more cities and create opportunities for thousands of homegrown entrepreneurs across India.
                    <br /><br />
                    Thank you for being part of this journey.
                  </p>
                  
                  <p className="text-lg font-extrabold mb-3 uppercase text-[#064789]">
                    ANKUR PACHISIA
                  </p>
                  
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="ANKUR PACHISIA's LinkedIn profile"
                    className="inline-block"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 fill-[#064789] hover:fill-[#043a5e] transition-colors" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Desktop Layout - Custom responsive version */}
              <div className="hidden md:block relative py-20 overflow-visible">
                <div className="absolute top-1/2 transform -translate-y-1/2 bg-[#60C0FF] left-0 w-[98%] h-[380px] rounded-r-[120px] rounded-l-[30px] z-0"></div>
                
                <div className="relative z-10 w-full pl-[420px] lg:pl-[480px] pr-16 lg:pr-20">
                  <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-wide uppercase text-[#064789]">
                    FOUNDER'S NOTE
                  </h2>
                  
                  <p className="text-sm lg:text-base font-bold leading-relaxed mb-4 text-[#f9f9f9]">
                    The Flea Fair started with one simple goal - to support small businesses and give them the platform they deserve. Today, as our community grows stronger with every edition, our vision is clear: to expand The Flea Fair to more cities and create opportunities for thousands of homegrown entrepreneurs across India.
                    <br /><br />
                    Thank you for being part of this journey.
                  </p>
                  
                  <p className="text-2xl lg:text-3xl font-extrabold mb-3 uppercase text-[#064789]">
                    ANKUR PACHISIA
                  </p>
                  
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="ANKUR PACHISIA's LinkedIn profile"
                    className="inline-block"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 fill-[#064789] hover:fill-[#043a5e] transition-colors" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Image with custom polygon clip-path */}
                <div className="absolute left-8 lg:left-12 top-1/2 transform -translate-y-1/2 w-[350px] h-[480px] lg:w-[400px] lg:h-[540px] z-20 transition-all duration-300 hover:scale-[1.02]">
                  <img 
                    src="/ankur.jpeg" 
                    alt="ANKUR PACHISIA" 
                    className="w-full h-full object-cover bg-gray-200"
                    style={{
                      clipPath: 'url(#founder-shape-desktop)',
                      WebkitClipPath: 'url(#founder-shape-desktop)'
                    }}
                  />
                  
                  {/* SVG for custom clip path shape */}
                  <svg className="absolute w-0 h-0" width="0" height="0">
                    <defs>
                      <clipPath id="founder-shape-desktop" clipPathUnits="objectBoundingBox">
                        <path d="
                          M 0.08 0 
                          L 0.92 0 
                          Q 1 0 1 0.08 
                          L 0.875 0.90 
                          Q 0.85 1 0.75 0.99 
                          L 0.08 0.955 
                          Q 0 0.95 0 0.87 
                          L 0 0.08 
                          Q 0 0 0.08 0 
                          Z
                        " />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.main>

        {/* About Us with fade in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <AboutUs />
        </motion.div>
      </motion.div>

      {/* Footer with fade in up */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <QuickLinksFooter />
      </motion.div>
    </div>
  );
}