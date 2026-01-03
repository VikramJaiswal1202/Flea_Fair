"use client";
import React from "react";
import { motion } from "framer-motion";

export const StickerCluster: React.FC = () => {
  const scaleIn = {
    initial: { scale: 0.7, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
  };

  return (
    <section className="w-full flex justify-center md:justify-start items-center px-4 sm:px-6 md:px-8 lg:px-12 mt-10 md:mt-0">
      {/* Cluster wrapper with improved responsive sizing */}
      <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[640px] aspect-[1.1/1]">

        <motion.img
          src="/SMALL_BUISNESS.png"
          alt="Small Business"
          className="absolute bottom-[28%] left-[10%] w-[78%] sm:w-[76%] md:w-[78%] -rotate-[2deg] z-20"
          {...scaleIn}
        />

        <motion.img
          src="/FOOD.png"
          alt="Food"
          className="absolute top-[4%] left-[6%] w-[62%] sm:w-[60%] md:w-[62%] -rotate-[6deg] z-30"
          {...scaleIn}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        />

        <motion.img
          src="/&.png"
          alt="And"
          className="absolute top-[14%] left-[50%] w-[20%] sm:w-[18%] md:w-[20%] rotate-[4deg] z-40"
          {...scaleIn}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        />

        <motion.img
          src="/music.png"
          alt="Music"
          className="absolute top-[26%] left-[28%] w-[63%] sm:w-[61%] md:w-[63%] -rotate-[2deg] z-20"
          {...scaleIn}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        />

        <motion.img
          src="/left.png"
          alt="Left decoration"
          className="absolute top-[6%] left-[-8%] sm:left-[-6%] md:left-[-8%] w-[16%] sm:w-[15%] md:w-[16%] -rotate-[8deg] z-10"
          {...scaleIn}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        />

        <motion.img
          src="/right.png"
          alt="Right decoration"
          className="absolute bottom-[30%] right-[-4%] sm:right-[-3%] md:right-[-4%] w-[15%] sm:w-[14%] md:w-[15%] rotate-[8deg] z-10"
          {...scaleIn}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        />
      </div>
    </section>
  );
};