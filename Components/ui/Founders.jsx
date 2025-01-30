"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Founders() {
  const founders = [
    {
      name: "Ravi Kumar",
      src: "/Team/dogs/ganesh.jpg",
      hoverSrc:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Founder & Director of Operations",
    },
    {
      name: "Sarthak Patel",
      src: "/Team/dogs/sarthak.jpg",
      hoverSrc:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Creative Director",
    },
    {
      name: "Ganesh Ghutiya",
      src: "/Team/dogs/ganesh.jpg",
      hoverSrc:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Technology Lead",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col gap-4">
        {founders.map(({ name, src, hoverSrc, role }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/10 h-[200px]"
          >
            <div className="flex h-full w-full relative">
              <div
                className="group h-full flex items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ width: "100px", height: "100px" }}
                  whileHover={{ width: "168px", height: "168px" }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg flex-shrink-0 relative"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hoveredIndex === index ? "hover" : "normal"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={hoveredIndex === index ? hoverSrc : src}
                        alt={name}
                        width={400}
                        height={400}
                        className="object-cover h-full w-full"
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                <div className="ml-6 transition-all duration-300 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold sm:text-xl">{name}</h3>
                  <p className="text-slate-600 sm:text-xl">{role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
