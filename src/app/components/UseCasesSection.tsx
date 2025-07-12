"use client";

import React, { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import {
  Printer,
  Shirt,
  Scissors,
  LayoutPanelLeft,
  Laptop,
  Camera,
} from "lucide-react";

interface UseCase {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  imageUrl: string;
}

const useCases: UseCase[] = [
  { title: "Screen Printers", icon: Printer, imageUrl: "/images/use-case-screenprint.png" },
  { title: "Merchandise Printers", icon: Shirt, imageUrl: "/images/use-case-merchandise.png" },
  { title: "Embroidery", icon: Scissors, imageUrl: "/images/use-case-embroidery.png" },
  { title: "Large Printers", icon: LayoutPanelLeft, imageUrl: "/images/use-case-largeprint.png" },
  { title: "Digital Marketers", icon: Laptop, imageUrl: "/images/use-case-marketer.png" },
  { title: "Photographers", icon: Camera, imageUrl: "/images/use-case-photographer.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const UseCaseCard = ({ title, icon: Icon, imageUrl }: UseCase) => (
  <motion.div
    className="group relative h-64 w-full overflow-hidden rounded-xl"
    variants={itemVariants}
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
  >
    <Image
      src={imageUrl}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
      <Icon className="h-8 w-8 text-neutral-300 transition-colors group-hover:text-white" />
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
    </div>
  </motion.div>
);

export function UseCasesSection() {
  return (
    <section className="relative w-full bg-black py-20 lg:py-32">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            variants={itemVariants}
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Professionals
            </span>
            , by Professionals
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-neutral-300"
            variants={itemVariants}
          >
            Hence we created{" "}
            <span className="font-semibold text-white">VectorCop</span>, the one
            and only tool which helps you convert any raster image to a vector in
            just one click. Trusted by a wide range of creatives who demand
            quality and efficiency.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}