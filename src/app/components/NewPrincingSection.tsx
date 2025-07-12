"use client";

import React from "react";
import { motion } from "framer-motion";
import { PricingCard, PricingCardProps } from "./PricingCard";

const plans: PricingCardProps[] = [
  {
    planName: "Common",
    price: "$0",
    priceDetail: "/monthly",
    description: "For individuals and teams getting started with VectorCop.",
    features: [
      { text: "Unlimited users" },
      { text: "Unlimited Huly Objects" },
      { text: "10GB Storage per Workspace", info: "Per Workspace" },
      { text: "10GB Video/Audio Traffic", info: "Per Workspace" },
      { text: "AI — TBD" },
    ],
    isHighlighted: false,
    buttonText: "Start Free",
    videoSrc: "/common_final.mp4",
  },
  {
    planName: "Rare",
    price: "$39",
    priceDetail: "/lifetime",
    description: "For individuals and teams getting started with VectorCop.",
    features: [
      { text: "Unlimited users" },
      { text: "Unlimited VectorCop Objects" },
      { text: "10GB Storage per Workspace", info: "Per Workspace" },
      { text: "10GB Video/Audio Traffic", info: "Per Workspace" },
      { text: "Unlimited vectorizations" },
      { text: "Priority customer support" },
      { text: "Access to all future updates" },
      { text: "Dedicated Discord channel access" },
    ],
    isHighlighted: false,
    buttonText: "Start Free",
    videoSrc: "/rare_final.mp4",
  },
];

import { easeInOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

export function NewPricingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 lg:py-32">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          variants={itemVariants}
        >
          The <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Right Price</span> For You
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300"
          variants={itemVariants}
        >
          Choose the plan that fits your creative workflow. Get lifetime access and never worry about recurring fees again.
        </motion.p>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
