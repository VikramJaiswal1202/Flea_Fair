import React from 'react';
import Image from 'next/image';
import { motion, easeInOut } from 'framer-motion';

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
    ease: easeInOut,
    delay: 3.2,
  },
};

/* ---------------- Component ---------------- */

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-visible">

      {/* ================= Pink Background (FULL WIDTH - Aligned with Images) ================= */}
      <div className="
        absolute
        left-1/2
        -translate-x-1/2
        w-screen
        bottom-0
        min-h-72 sm:min-h-80 md:min-h-screen lg:min-h-screen xl:min-h-screen
        flex
        justify-center
        items-end
        z-0
        pointer-events-none
      ">
        <Image
          src="/subtract.png"
          alt="Pink background shape"
          width={3000}
          height={1500}
          className="w-screen h-auto opacity-90 object-cover object-bottom"
          priority
        />
      </div>


      <div className="
        relative
        z-20
        max-w-7xl
        mx-auto
        flex
        flex-col
        mt-8 sm:mt-12 md:mt-16 lg:mt-20
        px-4 sm:px-6 md:px-8
      ">

        {/* -------- Sticker Cluster -------- */}
        <div className="
          relative
          w-full
          max-w-[400px] sm:max-w-[420px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px]
          aspect-[1.1/1]
          mb-0 sm:mb-1 md:-mb-8 lg:-mb-12 xl:-mb-20
          pointer-events-none
          z-30
          mx-auto md:mx-0
        ">
          {/* Small Business Sticker */}
          <div>
            <motion.img
              src="/SMALL_BUISNESS.png"
              alt="Small Business"
              className="absolute bottom-[23%] left-[5%] w-[78%] -rotate-2 z-20"
              {...stickerScaleIn}
            />
            <motion.span
              className="font-benoru text-[#5a108a]
                  text-2xl
                  sm:text-2xl
                  md:text-xl
                  lg:text-2xl
                  xl:text-4xl
                  absolute bottom-[31%] left-[9%] w-[78%] -rotate-[9deg] z-20
                  "
              {...stickerScaleIn}
            >
              SMALL BUSINESS
            </motion.span>
          </div>

          {/* Food Sticker */}
          <div>
            <motion.img
              src="/FOOD.png"
              alt="Food"
              className="absolute top-[6%] left-[6%] w-[62%] -rotate-6 z-30"
              {...stickerScaleIn}
              transition={{ delay: 3.3 }}
            />
            <motion.span
              className="font-benoru text-[#39B7FF]
                  text-3xl
                  sm:text-3xl
                  md:text-2xl
                  lg:text-3xl
                  xl:text-5xl
                  absolute top-[13%] left-[11%] w-[62%] -rotate-12 z-30                  
                  "
              {...stickerScaleIn}
              transition={{ delay: 3.3 }}
            >
              FOOD
            </motion.span>
          </div>

          {/* & Symbol */}
          <motion.img
            src="/&2.png"
            alt="And"
            className="absolute top-[14%] left-[57%] w-[20%] rotate-[4deg] z-40"
            {...stickerScaleIn}
            transition={{ delay: 3.4 }}
          />

          {/* Music Sticker */}
          <div>
            <motion.img
              src="/music.png"
              alt="Music"
              className="absolute top-[26%] left-[28%] w-[63%] -rotate-2 z-20"
              {...stickerScaleIn}
              transition={{ delay: 3.35 }}
            />
            <motion.span
              className="font-benoru text-[#EFBA3F]
                  text-3xl
                  sm:text-3xl
                  md:text-2xl
                  lg:text-3xl
                  xl:text-5xl
                  absolute top-[30%] left-[32%] w-[63%] -rotate-2 z-20
                  "
              {...stickerScaleIn}
              transition={{ delay: 3.35 }}
            >
              MUSIC
            </motion.span>
          </div>

          {/* Decorative elements */}
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

        {/* -------- Hero Images - Always Horizontal -------- */}
        <div className="
          relative
          w-full
          flex
          flex-row
          items-end
          justify-center
          gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8
          z-20
        ">

          <motion.div
            className="
              relative
              w-full
              max-w-[180px] sm:max-w-60 md:max-w-96 lg:max-w-2xl xl:max-w-3xl 2xl:max-w-2xl
              shrink-0
            "
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            whileHover={{ rotate: 2 }}
          >
            <Image
              src="/hero2.png"
              alt="Hero Image 2"
              width={800}
              height={800}
              className="w-full h-auto rounded-2xl md:rounded-3xl object-cover"
            />
          </motion.div>

          <motion.div
            className="
              relative
              w-full
              max-w-[200px] sm:max-w-[260px] md:max-w-[420px] lg:max-w-[580px] xl:max-w-[720px] 2xl:max-w-[750px]
              shrink-0
            "
            initial="hidden"
            animate="visible"
            variants={fadeInScale}
            whileHover={{ rotate: -2 }}
          >
            <Image
              src="/hero1.png"
              alt="Hero Image 1"
              width={800}
              height={800}
              className="w-full h-auto rounded-2xl md:rounded-3xl object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};