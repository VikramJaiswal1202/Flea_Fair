"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface TransitionProps {
  isTransitioning: boolean;
  onCovered?: () => void;
  onComplete?: () => void;
  text?: string;
}

export default function Transition({ isTransitioning, onCovered, onComplete, text = "Loading..." }: TransitionProps) {
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  // Ensure animation starts ONLY after hydration + mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!isTransitioning) return;

    const run = async () => {
      await controls.start({ y: "0%", transition: { duration: 0.6 } });
      onCovered?.();

      await new Promise(r => setTimeout(r, 300));

      await controls.start({ y: "100%", transition: { duration: 0.6 } });
      onComplete?.();

      controls.set({ y: "-100%" });
    };

    run();
  }, [mounted, isTransitioning]);

  if (!mounted) {
    // Render nothing until client hydration
    return null;
  }

  return (
    <motion.div
      style={{ y: "-100%" }} // ALWAYS start off-screen (SSR and hydration safe)
      animate={controls}
      className="fixed inset-0 z-999 flex items-center justify-center bg-brand-pink text-white text-3xl font-bold"
    >
      {text}
    </motion.div>
  );
}
