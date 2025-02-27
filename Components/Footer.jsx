"use client";
import React from "react";
import {
  IconPhone,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
const nav = "/FooterGvt.png";
export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg1 mt-auto">
      <div className="w-full wave bg2" />
      <div className="bg2">
        <div className="container-width mx-auto px-4">
          <hr className="my-4 border-black" />

          <div className="flex flex-wrap justify-between items-start gap-4">
            {/* Contact Information - Left Side */}
            <div className="flex flex-col gap-1 sm:gap-2">
              <a
                href="https://wa.me/919033535655"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white text-black rounded-full hover:bg-background/80 hover:backdrop-blur-md hover:shadow-md transition-all duration-300">
                  <IconBrandWhatsapp
                    size={16}
                    className="sm:w-[18px] sm:h-[18px]"
                  />
                  <span className="text-sm sm:text-base">Gravity Films</span>
                </div>
              </a>

              <a
                href="https://instagram.com/gravityfilmsin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white text-black rounded-full hover:bg-background/80 hover:backdrop-blur-md hover:shadow-md transition-all duration-300">
                  <IconBrandInstagram
                    size={16}
                    className="sm:w-[18px] sm:h-[18px]"
                  />
                  <span className="text-sm sm:text-base">@gravityfilmsin</span>
                </div>
              </a>

              <a
                href="tel:+919033535655"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white text-black rounded-full hover:bg-background/80 hover:backdrop-blur-md hover:shadow-md transition-all duration-300">
                  <IconPhone size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-sm sm:text-base">+91 903 3535655</span>
                </div>
              </a>

              <a
                href="mailto:info@gravityfilms.space"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white text-black rounded-full hover:bg-background/80 hover:backdrop-blur-md hover:shadow-md transition-all duration-300">
                  <IconMail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-sm sm:text-base">
                    info@gravityfilms.space
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/gravityfilms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white text-black rounded-full hover:bg-background/80 hover:backdrop-blur-md hover:shadow-md transition-all duration-300">
                  <IconBrandLinkedin
                    size={16}
                    className="sm:w-[18px] sm:h-[18px]"
                  />
                  <span className="text-sm sm:text-base">
                    linkedin.com/company/gravityfilms
                  </span>
                </div>
              </a>
            </div>

            {/* Logo and Company Info - Right Side */}
            <div className="flex items-center sm:flex-col sm:items-end gap-2  sm:mt-16">
              <img
                src={nav}
                width={40}
                height={40}
                className="object-contain sm:w-[100px] sm:h-[100px]"
                alt="Gravity Films logo"
              />
              <div className="flex gap-2 sm:flex-col sm:items-end">
                <p className="text-black text-xs sm:text-base">
                  Gravity Films™
                </p>
                <p className="text-black text-xs sm:text-base">
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>

          <hr className="my-4 border-black" />
        </div>
      </div>
    </footer>
  );
}
