"use client";

import React, { ComponentType, SVGProps } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  Wand2,
  Palette,
  Spline,
  Layers,
  Download,
  Pipette,
  SquarePen,
  Crosshair,
} from "lucide-react";

interface Feature {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  { title: "Fully Automatic Vectorization", icon: Wand2 },
  { title: "Supports up to 64 Colors Now", icon: Palette },
  { title: "Better Optimization of Line-Tracing", icon: Spline },
  { title: "Segmentation Editing Capabilities", icon: Layers },
  { title: "Download Output in SVG, EPS, PDF", icon: Download },
  { title: "Manual Color Selection Palette", icon: Pipette },
  { title: "Edit the Result Within the App", icon: SquarePen },
  { title: "Sub-Pixel Precision", icon: Crosshair },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxShape = ({ className, speed = 200 }: { className: string; speed?: number }) => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, speed);
  return <motion.div style={{ y }} className={className}></motion.div>;
};

const FeatureCard = ({ title, icon: Icon }: Feature) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    className="group relative rounded-xl p-[2px] bg-gradient-to-b from-white/10 to-transparent"
  >
    <div className="flex h-full flex-col items-start gap-4 rounded-[10px] bg-neutral-900 p-6 transition-colors duration-300 group-hover:bg-neutral-800">
      <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-pink-500/20 p-3">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <p className="text-left text-lg font-semibold text-white">{title}</p>
    </div>
  </motion.div>
);

export function FeaturesSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-20 lg:py-32">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <ParallaxShape className="absolute top-10 left-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 to-transparent blur-3xl opacity-30" speed={-150} />
      <ParallaxShape className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-700 to-transparent blur-3xl opacity-30" speed={100} />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.p
          className="text-lg text-neutral-300"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          What all you get with VectorCop if you
        </motion.p>
        <motion.h2
          className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl bg-gradient-to-br from-blue-400 via-pink-400 to-rose-400 bg-clip-text text-transparent"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Purchase it Now
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}