"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function VideosForPortfolio() {
  const videoRefs = useRef([]);
  const [loadedVideos, setLoadedVideos] = useState({});
  const [errors, setErrors] = useState({});

  const handleVideoLoad = useCallback((index) => {
    setLoadedVideos((prev) => ({ ...prev, [index]: true }));
  }, []);

  const handleVideoError = useCallback((index, error) => {
    setErrors((prev) => ({ ...prev, [index]: error }));
    console.error(`Error loading video ${index}:`, error);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "50px", // Reduced margin for better performance
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          if (!video.src) video.load();
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }, options);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const videos = [
    {
      src: "./video/v12.mp4", // Update paths for GitHub Pages
      title: "Explore Nature",
      desc: "Discover the beauty of the natural world",
      poster: "./thumbnails/nature-poster.jpg",
    },
    { src: "./video/v2.mp4", title: "Tech Innovations" },
    { src: "./video/v3.mp4", title: "Travel Adventures" },
    { src: "./video/v1.mp4", title: "Culinary Delights" },
    { src: "./video/v5.mp4", title: "Artistic Expressions" },
    { src: "./video/v4.mp4", title: "Swimming" },
    { src: "./video/v6.mp4", title: "Chess" },
    { src: "./video/v7.mp4", title: "Football" },
    { src: "./video/v8.mp4", title: "Cricket" },
  ];

  return (
    <section className=" ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-bold text-gray-800 text-center lg:text-4xl mb-4">
          FEATURED VIDEOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg group
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              {!loadedVideos[index] && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}

              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className={`w-full object-cover ${
                  index === 0 ? "h-full" : "h-48"
                }`}
                loop
                muted
                playsInline
                preload="auto"
                poster={video.poster}
                onLoadedData={() => handleVideoLoad(index)}
                onError={(e) => handleVideoError(index, e)}
                style={{
                  filter: "none",
                  willChange: "contents",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <source src={video.src} type="video/mp4" media="all" />
                <track
                  kind="captions"
                  src={`/captions/${video.title}.vtt`}
                  label="English"
                />
              </video>

              <AnimatePresence>
                {errors[index] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                  >
                    <p className="text-white">Failed to load video</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={false}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300"
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4
                    className={`${
                      index === 0 ? "text-2xl" : "text-xl"
                    } font-bold text-white`}
                  >
                    {video.title}
                  </h4>
                  {video.desc && (
                    <p className="text-white text-sm mt-2">{video.desc}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideosForPortfolio;
