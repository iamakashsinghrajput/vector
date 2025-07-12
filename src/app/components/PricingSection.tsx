// app/components/NewPricingSection.tsx

"use client";

import React from "react";
import { motion, easeInOut } from "framer-motion";
import { PricingCard, PricingCardProps } from "./PricingCard";

const plans: PricingCardProps[] = [
  {
    planName: "Monthly",
    price: "$19",
    priceDetail: "Billed monthly. Cancel anytime.",
    description: "Perfect for casual users who want to try out the service.",
    features: [
      { text: "Fully automatic vectorization" },
      { text: "Up to 1,000 images per month" },
      { text: "Standard email support" },
      { text: "Access to current version" },
    ],
    isHighlighted: false,
    buttonText: "Get Started",
    videoSrc: "/monthly_video.mp4",
  },
  {
    planName: "Lifetime Deal",
    price: "$39",
    priceDetail: "One-time payment, own it forever.",
    description: "Best value for users who want unlimited access and priority support.",
    features: [
      { text: "All features from previous sections" },
      { text: "Unlimited vectorizations" },
      { text: "Priority customer support" },
      { text: "Access to all future updates" },
      { text: "Dedicated Discord channel access" },
    ],
    isHighlighted: true,
    buttonText: "Purchase Now",
    videoSrc: "/lifetime_video.mp4",
  },
];

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

export function PricingSection() {
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
          The <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Right Price</span> For You
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300"
          variants={itemVariants}
        >
          Choose the plan that fits your creative workflow. Get lifetime access and never worry about recurring fees again.
        </motion.p>

        <div className="mt-16 grid items-stretch gap-12 lg:grid-cols-2">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}