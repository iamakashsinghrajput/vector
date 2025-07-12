"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { FlipUnit } from "./FlipUnit";

const font = Inter({ subsets: ["latin"] });

const ShinyButton = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <button className={cn("relative inline-block overflow-hidden rounded-lg p-[1px] group", className)}>
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-50 px-8 py-3 text-sm font-medium text-black backdrop-blur-3xl group-hover:bg-slate-100 transition-colors duration-200">
        {children}
      </span>
    </button>
);

export function HeroSection() {
  const initialTime = 12 * 3600 + 59 * 60 + 59;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const [h1, h2] = hours.split("");
  const [m1, m2] = minutes.split("");
  const [s1, s2] = seconds.split("");

  return (
    <div className={cn("relative w-full overflow-hidden bg-black antialiased", font.className)}>
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -bottom-24 left-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-800 via-purple-900 to-transparent blur-3xl opacity-30"></div>
      <div className="absolute -top-24 right-0 h-64 w-64 translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-transparent blur-3xl opacity-30"></div>

      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 pt-12 pb-24 text-center">
        <div className="mb-6 flex items-center gap-4">
          <span className="rounded-md bg-red-600 px-3 py-1 text-sm font-bold text-white">PRICE DROP</span>
          <span className="text-lg text-neutral-300">From <s className="text-neutral-500">$295</s> - $39 Only</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-7xl">
          Convert Raster Images <br /> Into <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Vector Images</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-400">
          Convert JPG, PNG, GIF Files into PDF, SVG, EPS Vectors in just a click.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ShinyButton>BUY NOW</ShinyButton>
          <button className="rounded-lg border border-neutral-700 bg-black px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800">
            Social Proof
          </button>
        </div>

        <div className="mt-20 flex items-end justify-center gap-2 md:gap-4">
          <div className="flex flex-col items-center gap-y-3">
              <div className="flex gap-2">
                <FlipUnit digit={h1} />
                <FlipUnit digit={h2} />
              </div>
              <span className="text-xs font-medium tracking-widest text-neutral-400">HOURS</span>
          </div>
          <span className="pb-8 text-4xl font-bold text-neutral-600 md:pb-10">:</span>
          <div className="flex flex-col items-center gap-y-3">
              <div className="flex gap-2">
                <FlipUnit digit={m1} />
                <FlipUnit digit={m2} />
              </div>
              <span className="text-xs font-medium tracking-widest text-neutral-400">MINUTES</span>
          </div>
          <span className="pb-8 text-4xl font-bold text-neutral-600 md:pb-10">:</span>
          <div className="flex flex-col items-center gap-y-3">
              <div className="flex gap-2">
                <FlipUnit digit={s1} />
                <FlipUnit digit={s2} />
              </div>
              <span className="text-xs font-medium tracking-widest text-neutral-400">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
}