"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Add this import

export function ThreeDCard({ imageSrc }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="relative w-auto sm:w-[40rem] h-auto rounded-xl p-2 border bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] transition-transform duration-500 ease-out transform-gpu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageSrc}
          height="1200"
          width="1200"
          className="h-80 w-full object-cover rounded-xl transition-shadow duration-500 ease-out"
          alt="thumbnail"
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
      {!imageLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
