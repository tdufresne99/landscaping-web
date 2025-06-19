"use client";
import Image from "next/image";
import DarkLogoImage from "@/assets/logo_dark_text.png";
import LightLogoImage from "@/assets/logo_light_text.png";


interface LogoProps {
  className?: string;
  dark?: boolean;
}
const Logo = ({ className = "max-w-32", dark = true }: LogoProps) => {
  return (
    <Image
      src={dark? DarkLogoImage : LightLogoImage}
      alt="ÉcoHarmonie Paysages Logo"
      className={`p-3 ${className}`}
      priority
    />
  );
};
export default Logo;
