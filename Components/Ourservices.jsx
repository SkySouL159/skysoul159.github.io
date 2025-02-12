"use client";
import React, { useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

// Import icons
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import VideocamIcon from "@mui/icons-material/Videocam";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AnimationIcon from "@mui/icons-material/Animation";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import DrawIcon from "@mui/icons-material/Draw";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CampaignIcon from "@mui/icons-material/Campaign";
import LanguageIcon from "@mui/icons-material/Language";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

// Service Data
const services = [
  { id: "film_making", title: "Film Making", icon: <MovieFilterIcon /> },
  { id: "cinematography", title: "Cinematography", icon: <VideocamIcon /> },
  { id: "directing", title: "Directing", icon: <TheaterComedyIcon /> },
  { id: "editing", title: "Editing", icon: <ContentCutIcon /> },
  { id: "vfx_cgi", title: "VFX / CGI", icon: <ViewInArIcon /> },
  { id: "animations", title: "Animations", icon: <AnimationIcon /> },
  { id: "photography", title: "Photography", icon: <LocalSeeIcon /> },
  { id: "graphics_design", title: "Graphics Design", icon: <DrawIcon /> },
  { id: "music_sounds", title: "Music / Sounds", icon: <MusicNoteIcon /> },
  {
    id: "digital_marketing",
    title: "Digital Marketing",
    icon: <CampaignIcon />,
  },
  {
    id: "website_development",
    title: "Website Development",
    icon: <LanguageIcon />,
  },
  {
    id: "app_development",
    title: "App Development",
    icon: <StayCurrentPortraitIcon />,
  },
  {
    id: "content_writing",
    title: "Content Writing",
    icon: <StickyNote2Icon />,
  },
  { id: "tech_support", title: "Tech Support", icon: <SupportAgentIcon /> },
  {
    id: "brand_building",
    title: "Brand Building",
    icon: <TipsAndUpdatesIcon />,
  },
  { id: "visual_art", title: "Visual Art", icon: <AutoFixHighIcon /> },
];

// Shuffle Function
const shuffleArray = (array) => {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// Main Component
const OurServices = () => {
  return (
    <div className="container-width mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center lg:text-4xl">
        Our Services
      </h2>
      <section className="w-full pt-3 pb-12 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-8 gap-2 h-auto sm:h-[500px]">
          {services.map((service) => (
            <div key={service.id}>
              <div className="h-full flex items-center gap-3 p-4 rounded-md border hover:border-gray-700 hover:text-gray-300 transition">
                <div className="text-2xl text-black">{service.icon}</div>
                <p className="flex-grow text-black truncate">{service.title}</p>
                <ArrowForwardIcon className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Shuffle Grid */}
        <div className="sticky top-24">
          <ShuffleGrid />
        </div>
      </section>
    </div>
  );
};

const ShuffleGrid = () => {
  const [shuffledServices, setShuffledServices] = useState([]);

  useEffect(() => {
    setShuffledServices(shuffleArray([...services])); // Shuffle on mount
    const interval = setInterval(() => {
      setShuffledServices(shuffleArray([...services])); // Shuffle every 3s
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[500px]">
      {shuffledServices.map((service) => (
        <motion.div
          key={service.id}
          layout
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center text-white p-4 rounded-md"
          style={{ backgroundColor: "#262626" }}
        >
          {service.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default OurServices;
