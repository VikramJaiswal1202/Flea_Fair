import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ---------------- Animations ---------------- */

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 3 },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 3 },
  },
};

const stickerScaleIn = {
  initial: { scale: 0.7, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    duration: 0.8,
    ease: [0.65, 0, 0.35, 1],
    delay: 3.2,
  },
};

/* ---------------- Component ---------------- */

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* ================= Pink Background (FULL WIDTH) ================= */}
      <div className="
        absolute
        inset-x-0
        bottom-[0%]
        flex
        justify-center
        z-0
        pointer-events-none
      ">
        <div className="
          w-[400%]
          max-w-[3500px]
          
        ">
          <Image
            src="/subtract.png"
            alt="Pink background shape"
            width={3000}
            height={1500}
            className="w-full h-full opacity-90"
            priority
          />
        </div>
      </div>

     
      <div className="
        relative
        z-20
        max-w-15xl
        mx-auto
        flex
        flex-col
        items-center
        justify-center
        mt-8 sm:mt-12 md:mt-16 lg:mt-20
        px-4 sm:px-6 md:px-8
      ">

        {/* -------- Sticker Cluster -------- */}
        <div className="
          relative
          w-full
          max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px]
          aspect-[1.1/1]
          mb-2 sm:mb-3 md:mb-5
          pointer-events-none
          z-30
        ">
          <motion.img
            src="/small_buisness2.png"
            alt="Small Business"
            className="absolute bottom-[23%] left-[5%] w-[78%] -rotate-[2deg] z-20"
            {...stickerScaleIn}
          />

          <motion.img
            src="/food2.png"
            alt="Food"
            className="absolute top-[4%] left-[6%] w-[62%] -rotate-[6deg] z-30"
            {...stickerScaleIn}
            transition={{ delay: 3.3 }}
          />

          <motion.img
            src="/&2.png"
            alt="And"
            className="absolute top-[14%] left-[50%] w-[20%] rotate-[4deg] z-40"
            {...stickerScaleIn}
            transition={{ delay: 3.4 }}
          />

          <motion.img
            src="/music2.png"
            alt="Music"
            className="absolute top-[26%] left-[28%] w-[63%] -rotate-[2deg] z-20"
            {...stickerScaleIn}
            transition={{ delay: 3.35 }}
          />

          <motion.img
            src="/left.png"
            alt="Left decoration"
            className="absolute top-[6%] left-[-8%] w-[16%] -rotate-[8deg] z-10"
            {...stickerScaleIn}
            transition={{ delay: 3.45 }}
          />

          <motion.img
            src="/right.png"
            alt="Right decoration"
            className="absolute bottom-[30%] right-[-4%] w-[15%] rotate-[8deg] z-10"
            {...stickerScaleIn}
            transition={{ delay: 3.5 }}
          />
        </div>

        {/* -------- Hero Images -------- */}
        <div className="
          relative
          w-full
          flex
          flex-col
          md:flex-row
          items-end
          justify-center
          gap-3 sm:gap-4 md:gap-4 lg:gap-6
          z-20
        ">

          <motion.div
            className="
              relative
              w-full
              max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]
              order-2 md:order-1
            "
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Image
              src="/hero2.png"
              alt="Hero Image 2"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl md:rounded-3xl object-cover"
            />
          </motion.div>

          <motion.div
            className="
              relative
              w-full
              max-w-[300px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[569px]
              order-1 md:order-2
            "
            initial="hidden"
            animate="visible"
            variants={fadeInScale}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <Image
              src="/hero1.png"
              alt="Hero Image 1"
              width={569}
              height={569}
              className="w-full h-auto rounded-2xl md:rounded-3xl object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
