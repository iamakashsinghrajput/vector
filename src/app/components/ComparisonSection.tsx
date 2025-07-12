// app/components/ComparisonSection.tsx

"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  easeInOut,
} from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { ChevronsLeftRight } from "lucide-react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxShape = ({
  className,
  speed = 100,
}: {
  className: string;
  speed?: number;
}) => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, speed);
  return (
    <motion.div style={{ y }} className={className}>
    </motion.div>
  );
};

export function ComparisonSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easeInOut },
  },
};
  
  const sliderHandle = (
    <div className="group absolute top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-white bg-black/60 backdrop-blur-sm flex items-center justify-center cursor-ew-resize">
      <ChevronsLeftRight className="h-4 w-4 text-white" />
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-black py-10 lg:py-12">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <ParallaxShape className="absolute top-1/4 left-[15%] h-6 w-6 bg-neutral-800 rounded-full opacity-50" speed={100} />
      <ParallaxShape className="absolute top-1/2 right-[18%] h-12 w-4 bg-neutral-800 rounded-full opacity-50 -rotate-45" speed={-80} />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          variants={itemVariants}
        >
          Stop wasting your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            creativity
          </span>
        </motion.h2>
        <motion.p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300" variants={itemVariants}>
          Being printers ourselves we understand how important vector images are
          and how easy is to print them or use them rather than knocking our head
          with some low resolution image.
        </motion.p>
        
        <motion.div className="mt-6" variants={itemVariants}>
          <div className="inline-block rounded-lg bg-gradient-to-tr from-neutral-800 to-neutral-900 p-1 shadow-lg shadow-black/30">
            <div className="rounded-md border border-white/10 bg-neutral-950 p-1">
                <ReactCompareSlider
                  handle={sliderHandle}
                  itemOne={<ReactCompareSliderImage src="/images/astronaut-raster.png" alt="Pixelated Raster Image" />}
                  itemTwo={<ReactCompareSliderImage src="/images/astronaut-vector.png" alt="Smooth Vector Image" />}
                  className="w-full max-w-lg rounded-sm overflow-hidden"
                />
            </div>
            <div className="mt-0.5 h-1.5 w-1/4 mx-auto bg-neutral-700 rounded-b-sm"></div>
          </div>
        </motion.div>

        <motion.div className="mt-3 flex justify-around max-w-xs mx-auto" variants={itemVariants}>
          <div className="text-center">
            <p className="text-sm font-semibold text-white">RASTER</p>
            <p className="text-xs bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              pixelated
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-white">VECTOR</p>
            <p className="text-xs bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              smooth
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}