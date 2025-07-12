"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Slack,
  Dribbble,
  IconProps,
} from "lucide-react";

const socialLinks = [
  { href: "#", icon: Twitter },
  { href: "#", icon: Linkedin },
  { href: "#", icon: Github },
  { href: "#", icon: Youtube },
  { href: "#", icon: Slack },
  { href: "#", icon: Dribbble },
];

const PixelHeartIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 11"
    fill="none"
    {...props}
  >
    <path
      d="M2 0H3V1H4V2H5V3H6V4H7V3H8V2H9V1H10V2H11V5H10V6H9V7H8V8H7V9H6V10H5V9H4V8H3V7H2V6H1V5H0V2H1V1H2V0Z"
      className="fill-current text-orange-400"
    />
  </svg>
);

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
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black">
      <div className="relative pt-20 pb-10 lg:pt-32 lg:pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/cta-bg.jpg"
            alt="Futuristic clock background with light beams"
            fill
            style={{ objectFit: "fill", objectPosition: "center" }}
            quality={100}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="pointer-events-none absolute top-0 left-10 w-full h-full lg:w-[55%] flex items-center justify-center">
          <div className="relative w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] -translate-x-1/4 sm:-translate-x-0 lg:-translate-x-1/3">
            <video
              src="/clock.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full rounded-full"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-7xl px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 lg:gap-12">
            <div className="min-h-[20rem] lg:min-h-[24rem]">
            </div>
            <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
              <motion.h2
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
                variants={itemVariants}
              >
                Join the Movement
              </motion.h2>
              <motion.p
                className="mt-4 max-w-md text-lg text-neutral-300"
                variants={itemVariants}
              >
                Unlock the future of productivity with VectorCop. Remember, this
                journey is just getting started.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center gap-4"
                variants={itemVariants}
              >
                <button className="rounded-full bg-gradient-to-b from-white to-neutral-200 px-8 py-3 font-semibold text-black shadow-[0_0_24px_rgba(255,165,0,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(255,165,0,0.6)]">
                  START NOW
                </button>
                <button className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-neutral-700/50">
                  <Slack className="h-5 w-5 text-white" />
                  JOIN OUR SLACK
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 border-t border-neutral-800 pt-8 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm text-neutral-400">
            Copyright © 2024 VectorCop. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6 text-sm">
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-neutral-500 hover:text-white transition-colors">
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <PixelHeartIcon className="h-4 w-4" />
            <Link 
                href="https://portfolio-lyart-gamma-39.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                    Designed By Akash Studios
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}