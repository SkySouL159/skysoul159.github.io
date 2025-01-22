import Link from "next/link";
import React from "react";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Socialmedia = () => {
  return (
    <div className="p-4">
      <div className="grid gap-2 grid-cols-2 lg:grid-cols-5">
        <Card
          title="Email"
          subtitle="Mail Us"
          href="mailto:info@gravityfilms.space"
          Icon={IconMail}
          bgColor="#F4F4F4"
          color="#2563EB"
        />
        <Card
          title="Instagram"
          subtitle="Checkout Our Instagram"
          href="https://instagram.com/gravity.films_"
          Icon={IconBrandInstagram}
          bgColor="#F4F4F4"
          color="#E1306C"
        />
        <Card
          title="WhatsApp"
          subtitle="Message Us"
          href="https://wa.me/919033535655"
          Icon={IconBrandWhatsapp}
          bgColor="#F4F4F4"
          color="#25D366"
        />
        <Card
          title="Call Us"
          subtitle="Call Us Now"
          href="tel:+919033535655"
          Icon={IconPhone}
          bgColor="#F4F4F4"
          color="#6366F1"
        />
        <Card
          title="LinkedIn"
          subtitle="Connect With Us"
          href="/team"
          Icon={IconBrandLinkedin}
          bgColor="#F4F4F4"
          color="#0077B5"
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href, bgColor, color }) => {
  return (
    <Link
      href={href}
      passHref
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="p-4 border-[1px] relative overflow-hidden group bg-white hover:shadow-lg transition-all duration-300"
      style={{
        backgroundColor: bgColor,
        borderColor: "#e5e7eb",
        borderRadius: ".6rem",
      }}
    >
      <div
        className="absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 opacity-10"
        style={{
          background: color,
        }}
      />
      <Icon
        size={100}
        className="absolute z-10 -top-12 -right-12 text-9xl group-hover:rotate-12 transition-transform duration-700"
        style={{
          color: `${color}20`,
        }}
      />
      <Icon
        size={24}
        className="mb-2 transition-colors relative z-10 duration-700"
        style={{ color: color }}
      />
      <h3
        className="font-medium text-lg relative z-10 duration-300 group-hover:text-slate-900"
        style={{
          color: "#374151",
        }}
      >
        {title}
      </h3>
      <p
        className="relative z-10 duration-300 text-sm group-hover:text-slate-600"
        style={{
          color: "#6B7280",
        }}
      >
        {subtitle}
      </p>
    </Link>
  );
};

export default Socialmedia;

// Update opacity function for lighter background
function opacity(color) {
  return "#F8FAFC";
}
