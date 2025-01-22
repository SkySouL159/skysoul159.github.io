"use client";
import React from "react";
import { PinContainer } from "@/Components/ui/3d-pin";

export function Map() {
  return (
    <div className="h-[20rem] w-72 flex items-center justify-center">
      <PinContainer
        title="Location of Gravity Films"
        href="https://maps.app.goo.gl/ya5vhXJA29HZLBN69"
        containerClassName=""
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.8412394038532!2d73.01316181371138!3d20.257120111563857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cb360f36347b%3A0xbef572bfddf82f9a!2sGravity%20Films!5e0!3m2!1sen!2sin!4v1719391451700!5m2!1sen!2sin"
          loading="lazy"
          className="lg:w-50 lg:h-56 w-68 h-56 "
          style={{
            border: 0,
          }}
        ></iframe>
      </PinContainer>
    </div>
  );
}
