"use client";
import { useState, useEffect } from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { CleanHandsOutlined } from "@mui/icons-material";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
  IconBrandLinkedin,
  IconInfoCircle,
  IconBriefcase2,
} from "@tabler/icons-react";
import { NavMobile } from "@/Components/NavMobile";
import Image from "next/image";
import navicon from "@/public/gravitysmall.png";
import { Link as NextLink } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import

export default function NavbarComponent() {
  const pathname = usePathname(); // Get current route
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if current path matches
  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Rest of your component remains the same until the navigation items:

  return (
    <div className="flex flex-col w-full">
      <Navbar
        isBlurred={isScrolled}
        position="sticky"
        className={`transition-all duration-300 container-width ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
        }`}
        maxWidth="full"
      >
        <div className="w-full">
          <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
            {/* Logo and Text - Both Mobile and Desktop */}
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image src={navicon} alt="Logo" width={50} height={50} />
              </Link>
              <div className="flex flex-col">
                <Link href="/">
                  <p className="font-bold text-lg leading-tight">GRAVITY</p>
                </Link>
                <Link href="/">
                  <p className="font-bold text-sm leading-tight">FILMS</p>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                  <Link
                    href="/servicess"
                    className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive("/servicess")
                        ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                        : "hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    <CleanHandsOutlined />
                    Services
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link
                    href="/portfolio"
                    className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive("/portfolio")
                        ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                        : "hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    <IconBriefcase2 stroke={2} size={24} />
                    Portfolio
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link
                    href="/aboutus"
                    className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive("/aboutus")
                        ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                        : "hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    <IconInfoCircle stroke={2} size={24} />
                    About Us
                  </Link>
                </NavbarItem>
              </NavbarContent>
            )}

            {/* Social Media Icons - Both Mobile and Desktop */}
            <div className="flex items-center gap-1">
              <NextLink
                color="foreground"
                href="https://wa.me/919033535655"
                className="p-1.5 rounded-full hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                <IconBrandWhatsapp stroke={1.5} size={24} />
              </NextLink>
              <NextLink
                color="foreground"
                href="https://instagram.com/gravityfilmsin"
                className="p-1.5 rounded-full hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                <IconBrandInstagram stroke={1.5} size={24} />
              </NextLink>
              <NextLink
                href="mailto:info@gravityfilms.space"
                className="p-1.5 rounded-full hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300"
                color="foreground"
              >
                <IconMail stroke={1.5} size={24} />
              </NextLink>
              <NextLink
                color="foreground"
                href="https://www.linkedin.com/company/gravityfilms"
                className="p-1.5 rounded-full hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                <IconBrandLinkedin stroke={1.5} size={24} />
              </NextLink>
            </div>
          </div>
        </div>
      </Navbar>

      {/* Mobile Navigation Below Navbar */}
      {isMobile && (
        <div className="w-full py-2 px-4 border-t">
          <NavMobile />
        </div>
      )}
    </div>
  );
}
