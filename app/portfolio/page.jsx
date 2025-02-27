import { Paraleximages } from "@/Components/Paralexiamges";
import { Compare } from "@/Components/ui/Compare";
import { VideosForPortfolio } from "@/Components/VideosForPortfolio";
import React from "react";
import { Metadata } from "next";

export const metadata = {
  title: "Portfolio - Your Name",
  description: "Showcase of photography and video editing work",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <div className="compare lg:mb-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 lg:text-4xl">
          CINEMATIC EXPERIENCE
        </h2>
        <video
          src="./video/cinematic.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="./thumbnails/cinematic-poster.jpg"
          className="rounded-lg border border-gray-300 shadow-lg lg:w-full lg:h-[75vh] object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 text-center lg:text-4xl mt-8">
        EDITING
      </h2>
      <p className="text-justify text-gray-600 mb-4 px-4 lg:px-8 ">
        Experience the magic of editing with our advanced tools and techniques.
        Compare the before and after images to see the transformation.
      </p>
      <div className="w-full h-[45vh] px-4 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d] lg:h-[60vh]">
        <Compare
          firstImage="./PralexImage/img1.jpg"
          secondImage="./PralexImage/img2.jpg"
          firstImageClassName="object-cover object-left-top w-full "
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg lg:"
          slideMode="hover"
          autoplay={true}
        />
      </div>

      <Paraleximages />
      <VideosForPortfolio />
    </div>
  );
};

export default page;
