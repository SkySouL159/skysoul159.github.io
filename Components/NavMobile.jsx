"use client";
import React from "react";
import Link from "next/link";
import {
  CleanHandsOutlined,
  WorkOutline,
  InfoOutlined,
} from "@mui/icons-material";
import { usePathname } from "next/navigation"; // Add this import

export function NavMobile() {
  const pathname = usePathname(); // Get current route

  // Check if current path matches
  const isActive = (path) => pathname === path;

  return (
    <div className="flex justify-between items-center gap-2 max-w-screen-sm mx-auto">
      <Link
        href="/servicess"
        className={`flex items-center flex-1 px-2 py-2 rounded-full bg-white text-center text-sm transition-all duration-300 ${
          isActive("/servicess")
            ? "shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            : "hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        }`}
      >
        <CleanHandsOutlined fontSize="small" />
        Services
      </Link>
      <Link
        href="/portfolio"
        className={`flex items-center flex-1 px-2 py-2 rounded-full bg-white text-center text-sm transition-all duration-300 ${
          isActive("/portfolio")
            ? "shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            : "hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        }`}
      >
        <WorkOutline fontSize="small" />
        Portfolio
      </Link>
      <Link
        href="/aboutus"
        className={`flex items-center flex-1 px-2 py-2 rounded-full bg-white text-center text-sm transition-all duration-300 ${
          isActive("/aboutus")
            ? "shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            : "hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        }`}
      >
        <InfoOutlined fontSize="small" />
        About Us
      </Link>
    </div>
  );
}
