"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroBannerProps {
  imageSrc: StaticImageData | string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  height?: string;
  textJustify?: "justify-start" | "justify-center" | "justify-end";
  textAlign?: "text-left" | "text-center" | "text-right";
  titleSize?: string;
  subtitleSize?: string;
  overlayColor?: string;
}

export default function HeroBanner({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  height = "h-64",
  textJustify = "justify-center",
  textAlign = "text-left",
  titleSize = "text-xl",
  subtitleSize = "text-md",
  overlayColor = "bg-black/50",
}: HeroBannerProps) {
  return (
    <div className={`relative w-full ${height}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover brightness-90"
        priority
      />
      <div className={`absolute inset-0 flex items-center ${textJustify}`}>
        <div
          className={`px-8 py-4 text-theme-light ${textAlign} ${overlayColor}`}
        >
          <h2 className={`${titleSize} font-medium`}>
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          {subtitle && <p className={`${subtitleSize} mt-2`}>
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
