"use client";

import React from "react";
import { motion, easeInOut } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface PricingCardProps {
  planName: string;
  price: string;
  priceDetail: string;
  description: string;
  features: string[];
  isHighlighted: boolean;
  buttonText: string;
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

export const PricingCard = ({
  planName,
  price,
  priceDetail,
  description,
  features,
  isHighlighted,
  buttonText,
}: PricingCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative h-full w-full rounded-3xl p-[1px] overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 animate-[spin_6s_linear_infinite]",
          "bg-[conic-gradient(from_90deg_at_50%_50%,#50E3C2_0%,#4A90E2_30%,#50E3C2_100%)]",
          isHighlighted ? "opacity-100 blur-3xl" : "opacity-40 blur-2xl"
        )}
      />
      <div className="relative flex h-full flex-col rounded-[23px] bg-black/95 p-8 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white">{planName}</h3>
        <p className="mt-4 flex items-baseline">
          <span className="text-6xl font-bold tracking-tight text-white">{price}</span>
          <span className="ml-1 text-xl font-semibold text-neutral-400">{priceDetail}</span>
        </p>
        <p className="mt-5 text-base text-neutral-300">{description}</p>
        <div className="my-8 h-px w-full bg-neutral-800" />
        <ul className="space-y-4 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-6 w-6 flex-shrink-0 text-teal-400" />
              <span className="text-neutral-200">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-10">
          <button
            className={cn(
              "w-full rounded-full py-3 font-semibold tracking-wide transition-all duration-300",
              isHighlighted
                ? "bg-white text-black hover:scale-105"
                : "border border-neutral-600 bg-neutral-800 text-white hover:bg-neutral-700"
            )}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};