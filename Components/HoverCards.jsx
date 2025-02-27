"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

//  data
const datas = [
  {
    title: "INDIVIDUALS",
    text: "We offer personalized services for individuals, including film making, photography, graphics design, and content writing. Elevate your personal projects with our professional expertise.",
    color: "white",
    image: "./alpha.svg",
  },
  {
    title: "SMALL BUSINESSES",
    text: "Boost your small business with our website development, digital marketing, and brand building services. Our creative solutions help you stand out and grow effectively.",
    color: "white",
    image: "./beta.svg",
  },
  {
    title: "LARGE ENTERPRISES",
    text: "For large enterprises, we provide scalable services like advanced VFX, high-end cinematography, and comprehensive tech support to maintain your competitive edge.",
    color: "white",
    image: "./gamma.svg",
  },
];

// global variables
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

// main function
export default function HoverCards() {
  return (
    <div className=" p-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 ">
        We Provide Exceptional Services for All!
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, type: "spring" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {datas.map((data, index) => (
          <HoverCard key={index} data={data} />
        ))}
      </motion.div>
    </div>
  );
}

// textAnimation
const AnimatedText = ({ text }) => {
  return (
    <motion.h3
      className="text-xl font-bold text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.h3>
  );
};

// card Hover effect
const HoverCard = ({ data }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative rounded-xl bg-[#292929] p-[1px] cursor-pointer"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundColor: data.color,
        }}
        className="h-full p-5 rounded-xl border border-[#252525] grid gap-4 relative"
      >
        <div style={{ transform: "translateZ(60px)" }}>
          <AnimatedText text={data.title} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          style={{ transform: "translateZ(50px)" }}
          className="text-[black] mb-24" // Increased bottom margin
        >
          {data.text}
        </motion.p>

        {/* Larger SVG container */}
        <div
          className="lg: bottom[-200px]"
          style={{
            position: "absolute",
            bottom: "5px",
            right: "20px",
            width: "200px", // Increased from 100px
            height: "200px", // Increased from 100px
            backgroundImage: `url(${data.image})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            transform: "translateZ(40px)",
            opacity: 0.9, // Added slight transparency
          }}
        />
      </div>
    </motion.div>
  );
};
