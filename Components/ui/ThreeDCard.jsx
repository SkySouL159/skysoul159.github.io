"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThreeDCard({ imageSrc, width, height }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // Calculate modal size based on the black and white image dimensions
  const maxModalWidth = 400; // Maximum width for the modal
  const maxModalHeight = 500; // Maximum height for the modal

  const aspectRatio = width / height;
  let modalWidth = maxModalWidth;
  let modalHeight = maxModalWidth / aspectRatio;

  // Ensure the modal doesn't exceed max height
  if (modalHeight > maxModalHeight) {
    modalHeight = maxModalHeight;
    modalWidth = maxModalHeight * aspectRatio;
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="relative rounded-xl p-2 border bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] transition-transform duration-500 ease-out transform-gpu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        width: `${modalWidth}px`,
        height: `${modalHeight}px`, // Dynamic height
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageSrc}
          height={modalHeight}
          width={modalWidth}
          className="h-full w-full object-cover rounded-xl transition-shadow duration-500 ease-out"
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
