"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroBannerProps {
  imageSrc: StaticImageData | string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  height?: string;
  overlayColor?: string;
}

export default function HeroBanner({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  height = "h-64",
  overlayColor = "bg-black/50",
}: HeroBannerProps) {
  return (
    <div className={`relative w-full ${height} shadow-xl`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover brightness-90"
        priority
      />
      <div className={`absolute inset-0 flex items-center`}>
        <div
          className={`px-8 py-4 flex items-center justify-center text-theme-light ${overlayColor} h-1/2 w-3/4 lg:w-1/2`}
        >
          <h2 className={`text-md lg:text-4xl  text-center font-medium`}>
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          {subtitle && <p className={`text-md mt-2`}>
            {subtitle.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            </p>}
        </div>
      </div>
    </div>
  );
}
