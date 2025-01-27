"use client";
import React from "react";
import {
  MovieFilterTwoTone,
  VideocamTwoTone,
  TheaterComedyTwoTone,
  ContentCutTwoTone,
  ViewInArTwoTone,
  AnimationTwoTone,
  LocalSeeTwoTone,
  DrawTwoTone,
  MusicNoteTwoTone,
  CampaignTwoTone,
  LanguageTwoTone,
  StayCurrentPortraitTwoTone,
  StickyNote2TwoTone,
  SupportAgentTwoTone,
  TipsAndUpdatesTwoTone,
  AutoFixHighTwoTone,
} from "@mui/icons-material";

export default function ServiceHero() {
  return (
    <div className="min-h-screen p-4">
      <h2 className="text-2xl font-bold text-black text-center mb-4">
        Our Professional Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-4">
        {Data.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-sm bg-opacity-20"
            style={{
              backgroundColor: service.color,
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="text-white/90 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const FILM_MAKING = "film-making";
const CINEMATOGRAPHY = "cinematography";
const DIRECTING = "directing";
const EDITING = "editing";
const VFX_CGI = "vfx-cgi";
const ANIMATIONS = "animations";
const PHOTOGRAPHY = "photography";
const GRAPHICS_DESIGN = "graphics-design";
const MUSIC_SOUNDS = "music-sounds";
const DIGITAL_MARKETING = "digital-marketing";
const WEBSITE_DEVELOPMENT = "website-development";
const APP_DEVELOPMENT = "app-development";
const CONTENT_WRITING = "content-writing";
const TECH_SUPPORT = "tech-support";
const BRAND_BUILDING = "brand-building";
const VISUAL_ART = "visual-art";

export const Data = [
  {
    id: FILM_MAKING,
    title: "Film Making",
    icon: <MovieFilterTwoTone />,
    color: "#111111",
    text: "Providing comprehensive film production services, from conceptualization to final cut.",
  },
  {
    id: CINEMATOGRAPHY,
    title: "Cinematography",
    icon: <VideocamTwoTone />,
    color: "#1a1a1a",
    text: "Offering expert cinematography services to capture stunning visuals for your project.",
  },
  {
    id: DIRECTING,
    title: "Directing",
    icon: <TheaterComedyTwoTone />,
    color: "#202020",
    text: "Professional directing services to bring your creative vision to life.",
  },
  {
    id: EDITING,
    title: "Editing",
    icon: <ContentCutTwoTone />,
    color: "#252525",
    text: "Providing top-notch editing services to create a seamless and engaging narrative.",
  },
  {
    id: VFX_CGI,
    title: "VFX / CGI",
    icon: <ViewInArTwoTone />,
    color: "#111111",
    text: "Enhancing your film with high-quality visual effects and computer-generated imagery.",
  },
  {
    id: ANIMATIONS,
    title: "Animations",
    icon: <AnimationTwoTone />,
    color: "#1a1a1a",
    text: "Creating captivating animations, from 2D cartoons to 3D models.",
  },
  {
    id: PHOTOGRAPHY,
    title: "Photography",
    icon: <LocalSeeTwoTone />,
    color: "#202020",
    text: "Offering professional photography services to capture perfect moments.",
  },
  {
    id: GRAPHICS_DESIGN,
    title: "Graphics Design",
    icon: <DrawTwoTone />,
    color: "#252525",
    text: "Providing creative graphic design services for print and digital media.",
  },
  {
    id: MUSIC_SOUNDS,
    title: "Music / Sounds",
    icon: <MusicNoteTwoTone />,
    color: "#111111",
    text: "Composing, producing, and editing music and sound effects tailored to your needs.",
  },
  {
    id: DIGITAL_MARKETING,
    title: "Digital Marketing",
    icon: <CampaignTwoTone />,
    color: "#1a1a1a",
    text: "Developing and executing effective digital marketing strategies to boost your brand.",
  },
  {
    id: WEBSITE_DEVELOPMENT,
    title: "Website Development",
    icon: <LanguageTwoTone />,
    color: "#202020",
    text: "Building and maintaining engaging and functional websites for your business.",
  },
  {
    id: APP_DEVELOPMENT,
    title: "App Development",
    icon: <StayCurrentPortraitTwoTone />,
    color: "#252525",
    text: "Designing and developing mobile applications tailored to your needs.",
  },
  {
    id: CONTENT_WRITING,
    title: "Content Writing",
    icon: <StickyNote2TwoTone />,
    color: "#111111",
    text: "Crafting compelling and informative content for various platforms.",
  },
  {
    id: TECH_SUPPORT,
    title: "Tech Support",
    icon: <SupportAgentTwoTone />,
    color: "#1a1a1a",
    text: "Providing reliable technical assistance and support for your software and hardware.",
  },
  {
    id: BRAND_BUILDING,
    title: "Brand Building",
    icon: <TipsAndUpdatesTwoTone />,
    color: "#202020",
    text: "Helping you develop and enhance your brand's identity and presence.",
  },
  {
    id: VISUAL_ART,
    title: "Visual Art",
    icon: <AutoFixHighTwoTone />,
    color: "#252525",
    text: "Creating and appreciating various forms of visual art, from paintings to digital illustrations.",
  },
];
