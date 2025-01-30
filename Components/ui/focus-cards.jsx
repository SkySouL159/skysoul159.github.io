"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Card = React.memo(({ card, index, hovered, setHovered }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % card.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, card.images.length]);

  return (
    <div
      onMouseEnter={() => {
        setHovered(index);
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        setHovered(null);
        setIsPaused(false);
      }}
      className="rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out border-2 border-gray-200 dark:border-gray-800 shadow-lg"
    >
      {/* Image Carousel */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={card.images[currentIndex]}
            alt={card.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Title */}
      <div
        className={`absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 ${
          hovered === index ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>

      {/* Navigation Buttons (Visible on Hover) */}
      {hovered === index && (
        <>
          <button
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? card.images.length - 1 : prev - 1
              )
            }
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % card.images.length)
            }
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
});

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
