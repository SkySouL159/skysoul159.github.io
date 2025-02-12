"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ThreeDCard } from "@/Components/ui/ThreeDCard";

export function Paraleximages() {
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpg",
    "/gallery/img11.jpg",
    "/gallery/img8.jpg",
    "/gallery/img7.jpg",
    "/gallery/img2.jpg",
  ];

  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 });
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageLoad = (event, image) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageDimensions({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <div className="image">
      <h2 className="text-2xl font-bold text-gray-800 text-center lg:text-4xl mt-8">
        GALLERY
      </h2>
      <p className="text-justify text-gray-600 px-4 lg:px-8">
        Discover the art of photo transformation through our professional
        editing showcase. Browse through our collection of before and after
        images to witness the stunning results of our expert retouching and
        enhancement techniques.
      </p>

      <div className="p-5 sm:p-8">
        <div className="columns-1 gap-2 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-visible mb-8"
              onMouseEnter={(e) => {
                if (!isMobile) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredPosition({
                    x: rect.left + rect.width / 2,
                    y: rect.top - 250, // Adjust this value to position the modal higher
                  });
                  setHoveredImage(image);
                }
              }}
              onMouseLeave={() => !isMobile && setHoveredImage(null)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={1080}
                height={720}
                className="transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-200 shadow-lg hover:shadow-xl grayscale hover:grayscale-0"
                onLoad={(e) => handleImageLoad(e, image)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Only show ThreeDCard on non-mobile devices */}
      {!isMobile && hoveredImage && (
        <div
          className="fixed z-50 scale-105 transition-all duration-500 ease-out transform-gpu"
          style={{
            left: `${hoveredPosition.x}px`,
            top: `${hoveredPosition.y}px`,
            opacity: hoveredImage ? 1 : 0,
            transform: `translateX(-50%) translateY(0)`, // Center the modal horizontally
          }}
          onMouseEnter={() => setHoveredImage(hoveredImage)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <ThreeDCard
            imageSrc={hoveredImage}
            width={imageDimensions.width}
            height={imageDimensions.height}
          />
        </div>
      )}
    </div>
  );
}
