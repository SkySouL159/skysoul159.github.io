"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ThreeDCard } from "@/Components/ui/ThreeDCard";

export function Paraleximages() {
  const images = [
    "/Gallery/img1.jpg", // Update paths for GitHub Pages
    "/Gallery/img2.jpg",
    "./Gallery/img2.jpg",
    "./Gallery/img2.jpg",
    "./Gallery/img2.jpg",
    "./Gallery/img3.jpg",
    "./Gallery/img4.jpg",
    "./Gallery/img5.jpg",
    "./Gallery/img6.jpg",
    "./Gallery/img7.jpg",
    "./Gallery/img8.jpg",
    "./Gallery/img9.jpg",
    "./Gallery/img10.jpg",
    // "./Gallery/img11.jpg",
  ].map((path) => (path.startsWith("/") ? "." + path : path));

  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (e) => {
    e.target.src = "./Gallery/fallback.jpg"; // Add a fallback image
    console.error("Image failed to load:", e.target.src);
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
        <div className="columns-1 gap-2 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4">
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
              {!imagesLoaded[index] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
              )}
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={600}
                priority={index < 2} // Prioritize loading first 2 images
                loading={index < 2 ? "eager" : "lazy"}
                onError={handleImageError}
                className="transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-200 shadow-lg hover:shadow-xl grayscale hover:grayscale-0"
                onLoad={() => handleImageLoad(index)}
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
          <ThreeDCard imageSrc={hoveredImage} width={800} height={600} />
        </div>
      )}
    </div>
  );
}
