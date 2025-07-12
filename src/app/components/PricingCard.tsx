"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Info } from "lucide-react";

export interface PricingCardProps {
  planName: string;
  price: string;
  priceDetail: string;
  description: string;
  features: {
    text: string;
    info?: string;
  }[];
  isHighlighted: boolean;
  buttonText: string;
  videoSrc: string;
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: { duration: 0.5, ease: "easeInOut" as any },
  },
};

export const PricingCard = ({
  planName,
  price,
  priceDetail,
  description,
  features,
  buttonText,
  videoSrc,
}: PricingCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative h-full w-full aspect-[866/1154] overflow-hidden"
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
      <div className="relative z-10 flex h-full flex-col p-10 md:p-12">
        <h3 className="text-xl font-semibold text-white">{planName}</h3>
        <p className="mt-4 flex items-baseline">
          <span className="text-6xl font-bold tracking-tight text-white">{price}</span>
          <span className="ml-1 text-xl font-semibold text-neutral-400">{priceDetail}</span>
        </p>
        <p className="mt-5 text-base text-neutral-300">{description}</p>
        <div className="my-8 h-px w-full bg-neutral-700/50" />
        <ul className="space-y-4 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-white" />
                <span className="text-neutral-200">{feature.text}</span>
              </div>
              {feature.info && (
                <Info className="h-4 w-4 text-neutral-500 cursor-pointer" aria-label={feature.info} />
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-10">
          <button
            className={cn(
              "w-full rounded-full py-3 font-semibold tracking-wide transition-all duration-300",
              "text-black bg-white hover:scale-105"
            )}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
