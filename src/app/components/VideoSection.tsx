// app/components/VideoSection.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full bg-black py-8 lg:py-12 -mb-[300px]">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative mx-auto w-full max-w-3xl px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="group relative cursor-pointer rounded-xl border border-white/10 bg-neutral-900/60 shadow-xl shadow-black/40"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/images/astronaut-vector.png"
            alt="Video preview of an email client UI"
            width={1920}
            height={1080}
            className="rounded-xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
              <Play className="h-8 w-8 text-white" fill="white" />
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative w-full max-w-4xl rounded-lg bg-neutral-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 z-10 text-white/70 transition-colors hover:text-white"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/pBEe_1_r5HY?autoplay=1&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}