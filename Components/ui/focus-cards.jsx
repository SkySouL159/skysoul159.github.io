"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getRandomAnimation = () => {
  const animations = [
    { initial: { x: 300 }, animate: { x: 0 }, exit: { x: -300 } },
    { initial: { x: -300 }, animate: { x: 0 }, exit: { x: 300 } },
    { initial: { y: 300 }, animate: { y: 0 }, exit: { y: -300 } },
    { initial: { y: -300 }, animate: { y: 0 }, exit: { y: 300 } },
  ];
  return animations[Math.floor(Math.random() * animations.length)];
};

const getTransitionDuration = (index) => {
  const durations = [0.3, 0.5, 0.7];
  return durations[index % durations.length];
};

export const Card = React.memo(({ card, index, hovered, setHovered }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animation, setAnimation] = useState(getRandomAnimation());
  const transitionDuration = getTransitionDuration(index);

  // Update animation when changing slides
  const changeSlide = (newIndex) => {
    setCurrentIndex(newIndex);
    setAnimation(getRandomAnimation());
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        changeSlide((prev) => (prev + 1) % card.images.length);
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
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={{
            duration: transitionDuration,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <img
            src={card.images[currentIndex]}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
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
              changeSlide(
                currentIndex === 0 ? card.images.length - 1 : currentIndex - 1
              )
            }
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            onClick={() => changeSlide((currentIndex + 1) % card.images.length)}
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 mx-auto md:px-8 w-full">
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
