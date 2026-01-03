"use client";

import Image from "next/image";
import React from "react";

export const FleaFairLogo: React.FC = () => {
  return (
    <section className="w-full flex justify-center items-center pt-5 pb-6">
      <Image
        src="/fleafairlg.png"
        alt="The Flea Fair"
        width={1500}
        height={450}
        priority
        className="max-w-full h-auto"
      />
    </section>
  );
};
