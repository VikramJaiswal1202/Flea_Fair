'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Splash screen variants
const splashSlide = {
  initial: { y: 0 },
  exit: {
    y: '100%',
    transition: {
      duration: 0.8
    }
  }
};

const heroBounce = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 20,
      delay: 0.5
    }
  }
};

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Force scroll to top on page load
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Hide splash screen after all animations complete
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <div className="fixed inset-0 z-9999">
            {/* First Layer - Blue (exits first) */}
            <motion.div
              className="absolute inset-0 bg-[#0ea5e9] z-30"
              initial={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.8, delay: 0 }}
            />

            {/* Second Layer - Yellow (exits second) */}
            <motion.div
              className="absolute inset-0 bg-[#fbbf24] z-20"
              initial={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Third Layer - Pink (exits last) */}
            <motion.div
              className="absolute inset-0 bg-[#ec4899] z-10"
              initial={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        )}
      </AnimatePresence>

      <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#F8F7F5] text-slate-900 font-sans selection:bg-brand-pink selection:text-white relative  ">
        {/* Marquee - constrained to viewport */}
        <motion.div
          className="w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: showSplash ? 0 : 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Marquee />
        </motion.div>

        {/* Navbar with fade in */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: showSplash ? 0 : 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Navbar />
        </motion.div>

        <main className="grow relative flex flex-col items-start justify-start pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 w-full max-w-full overflow-hidden">
          {/* Logo with slide in from left */}
          <motion.div
            className="w-full max-w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: showSplash ? 0 : 1, x: showSplash ? -60 : 0 }}
            transition={{ delay: 2.2, duration: 0.7 }}
          >
            <FleaFairLogo />
          </motion.div>

          {/* Sticker Cluster with scale animation */}
          <motion.div
            className="relative w-full max-w-full mt-5 sm:mt-50 md:mt-8 z-30 md:absolute md:bottom-[250px] md:left-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: showSplash ? 0 : 1, scale: showSplash ? 0.8 : 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
          >
          </motion.div>

          {/* Hero Section with bounce animation */}
          <motion.div
            className="w-full max-w-full mt-6 sm:mt-8 md:mt-10 relative z-20 flex justify-center items-center lg:block lg:justify-start lg:items-start"
            variants={heroBounce}
            initial="hidden"
            animate={showSplash ? "hidden" : "visible"}
          >
            <HeroSection />
          </motion.div>
        </main>

        {/* Second Section with stagger animation */}
        <motion.div
          className="min-h-screen bg-[#F8F7F5] font-sans pb-12 sm:pb-16 md:pb-20  w-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Dotted line */}
          <motion.div
            className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto w-full"
            variants={fadeIn}
          >
            <Dot />
          </motion.div>

          {/* Sponsors with fade in up */}
          <motion.div variants={fadeInUp} className="w-full overflow-hidden">
            <Sponsors />
          </motion.div>

          {/* Dotted line */}
          <motion.div
            className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto w-full"
            variants={fadeIn}
          >
            <Dot />
          </motion.div>

          {/* Info and Grid Section */}
          <motion.main
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-20 mt-8 sm:mt-10 md:mt-12 w-full"
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
            className="w-full flex justify-center mt-8 sm:mt-12 md:mt-20 lg:mt-28 xl:mt-32 px-4 sm:px-6 md:px-8 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="w-full max-w-7xl">
              {/* Responsive Founder's Note */}
              <div className="relative w-full">
                {/* Mobile Layout - Stacked */}
                <motion.div 
                  className="block md:hidden w-full"
                  variants={fadeInUp}
                >
                  <div className="bg-[#60C0FF] rounded-3xl p-6 mb-6 w-full">
                    <motion.h2 
                      className="text-xl font-extrabold mb-4 tracking-wide uppercase text-[#064789]"
                      variants={fadeIn}
                    >
                      FOUNDER'S NOTE
                    </motion.h2>

                    {/* Image with custom polygon clip-path */}
                    <motion.div 
                      className="w-full max-w-[280px] h-[380px] mx-auto mb-6 transition-all duration-300 hover:scale-[1.02]"
                      variants={scaleIn}
                    >
                      <img
                        src="/ankur.jpeg"
                        alt="ANKUR PACHISIA"
                        className="w-full h-full object-cover bg-gray-200"
                        style={{
                          clipPath: 'url(#founder-shape-mobile)',
                          WebkitClipPath: 'url(#founder-shape-mobile)'
                        }}
                      />

                      {/* SVG for custom clip path shape */}
                      <svg className="absolute w-0 h-0" width="0" height="0">
                        <defs>
                          <clipPath id="founder-shape-mobile" clipPathUnits="objectBoundingBox">
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
                    </motion.div>

                    <motion.p 
                      className="text-sm font-bold leading-relaxed mb-4 text-[#f9f9f9]"
                      variants={fadeIn}
                    >
                      The Flea Fair started with one simple goal - to support small businesses and give them the platform they deserve. Today, as our community grows stronger with every edition, our vision is clear: to expand The Flea Fair to more cities and create opportunities for thousands of homegrown entrepreneurs across India.
                      <br /><br />
                      Thank you for being part of this journey.
                    </motion.p>

                    <motion.p 
                      className="text-lg font-extrabold mb-3 uppercase text-[#064789]"
                      variants={fadeIn}
                    >
                      ANKUR PACHISIA
                    </motion.p>

                    <motion.a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="ANKUR PACHISIA's LinkedIn profile"
                      className="inline-block"
                      variants={scaleIn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 fill-[#064789] hover:fill-[#043a5e] transition-colors"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Desktop Layout - Custom responsive version */}
                <motion.div 
                  className="hidden md:block relative py-20 w-full overflow-hidden"
                  variants={fadeIn}
                >
                  <motion.div
                    className="
                      absolute top-1/2 -translate-y-1/2 left-0 bg-[#60C0FF] z-0
                      w-[98%] h-[180px]
                      lg:h-[420px]
                      xl:h-[480px]
                      2xl:h-[420px]
                      rounded-l-[30px]
                      rounded-r-[120px]
                      xl:rounded-r-[160px]
                      2xl:rounded-r-[200px]
                      "
                    variants={slideInLeft}
                  ></motion.div>

                  <motion.div 
                    className="relative z-10 w-full pl-[340px] lg:pl-[420px] xl:pl-[480px] pr-8 lg:pr-16 xl:pr-20"
                    variants={fadeInUp}
                  >
                    <motion.h2 
                      className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-8 tracking-wide uppercase text-[#064789]"
                      variants={fadeIn}
                    >
                      FOUNDER'S NOTE
                    </motion.h2>

                    <motion.p 
                      className="text-sm lg:text-base font-bold leading-relaxed mb-4 text-[#f9f9f9]"
                      variants={fadeIn}
                    >
                      The Flea Fair started with one simple goal - to support small businesses and give them the platform they deserve. Today, as our community grows stronger with every edition, our vision is clear: to expand The Flea Fair to more cities and create opportunities for thousands of homegrown entrepreneurs across India.
                      <br /><br />
                      Thank you for being part of this journey.
                    </motion.p>

                    <motion.p 
                      className="text-xl lg:text-2xl xl:text-3xl font-extrabold mb-3 uppercase text-[#064789]"
                      variants={fadeIn}
                    >
                      ANKUR PACHISIA
                    </motion.p>

                    <motion.a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="ANKUR PACHISIA's LinkedIn profile"
                      className="inline-block"
                      variants={scaleIn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 fill-[#064789] hover:fill-[#043a5e] transition-colors"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </motion.a>
                  </motion.div>

                  {/* Image with custom polygon clip-path */}
                  <motion.div 
                    className="absolute left-4 md:left-6 lg:left-8 xl:left-12 top-1/2 transform -translate-y-1/2 w-[280px] h-[400px] md:w-[300px] md:h-[420px] lg:w-[350px] lg:h-[480px] xl:w-[400px] xl:h-[540px] z-20 transition-all duration-300 hover:scale-[1.02]"
                    variants={scaleIn}
                  >
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
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.main>

          {/* About Us with fade in */}
          <motion.div
            className="w-full overflow-hidden"
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
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <QuickLinksFooter />
        </motion.div>
      </div>
    </>
  );
}