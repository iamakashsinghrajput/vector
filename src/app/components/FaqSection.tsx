// app/components/FaqSection.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";

const faqData = [
  {
    question: "Does VectorCop work with Windows and Mac (OSX)?",
    answer: "Yes! VectorCop is a standalone application that is fully compatible with all recent versions of both Windows and macOS. We ensure seamless performance across both platforms.",
  },
  {
    question: "Why Use Vector Images?",
    answer: "Vector images are infinitely scalable without any loss in quality. This makes them perfect for everything from small web icons to large-format printing like billboards, ensuring your designs are always crisp and professional.",
  },
  {
    question: "Do I get free updates and support?",
    answer: "Absolutely. With the Lifetime Deal, you get access to all future updates for free. Our dedicated support team is also available to help you with any questions or issues you might encounter.",
  },
  {
    question: "What are Vector Images?",
    answer: "Unlike raster images (like JPGs) which are made of pixels, vector images are created with mathematical formulas. This means they can be resized to any dimension without becoming blurry or pixelated.",
  },
  {
    question: "What Fileformats Are Supported?",
    answer: "You can import common raster formats like JPG, PNG, and GIF. VectorCop allows you to export your results into standard vector formats including SVG, EPS, and PDF, which are compatible with all major design software.",
  },
  {
    question: "Do I have to pay any other fees?",
    answer: "No. The Lifetime Deal is a one-time payment. There are no hidden fees, no recurring subscriptions, and no additional costs for updates. You purchase it once and own it forever.",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      className="border-b border-neutral-800"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <MinusCircle className="h-6 w-6 flex-shrink-0 text-purple-400" />
        ) : (
          <PlusCircle className="h-6 w-6 flex-shrink-0 text-neutral-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative w-full bg-black py-20 lg:py-32">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-neutral-400">Have any doubts?</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Have a look at our <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}