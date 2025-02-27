"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Ourclients = () => {
  let logos = [
    "./ClientLogos/3d.png",
    "./ClientLogos/devkiba.png",
    "./ClientLogos/samadhan.png",
    "./ClientLogos/nift.png",
    "./ClientLogos/cci.png",
    "./ClientLogos/sc_dnhdd.png",
    "./ClientLogos/akshar.png",
    "./ClientLogos/fr.png",
    "./ClientLogos/2dp.png",
    "./ClientLogos/HRMD.png",
    "./ClientLogos/hul.png",
    "./ClientLogos/hzc.png",
    "./ClientLogos/icon.png",
    "./ClientLogos/ig.png",
    "./ClientLogos/mahindra.png",
    "./ClientLogos/haveli.png",
    "./ClientLogos/mf.png",
    "./ClientLogos/miss.png",
    "./ClientLogos/force.png",
    "./ClientLogos/bamboo.png",
    "./ClientLogos/nnj.png",
    "./ClientLogos/scf.png",
    "./ClientLogos/vijay.png",
    "./ClientLogos/visda.png",
  ];

  return (
    <div className="container-width mx-auto  mt-8 mb-4 md:py-12 lg:py-16 lg:mt-0 lg:mx-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 lg:text-4xl">
        Our Valued Connections
      </h2>
      <p className="text-sm sm:text-lg text-gray-500  sm:mt-4 text-center">
        We have worked with some of the best
        <br className="block sm:hidden" />
        companies in the industry to deliver our services.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {logos.map((logo, index) => (
          <motion.div
            key={`logo_slide_${index}`}
            initial={{
              opacity: 0,
              y: index % 2 === 0 ? 50 : -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
              },
            }}
            viewport={{ once: true }}
            className="flex justify-center items-center p-2 sm:p-4 h-24 sm:h-32 w-24 sm:w-32 mx-auto bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={logo}
              alt={logo
                .replace("./ClientLogos/", "")
                .replace(/\.(png|webp)$/, "")}
              width={96}
              height={96}
              className="w-16 sm:w-24 h-16 sm:h-24 object-contain rounded-lg brightness-0 hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ourclients;
