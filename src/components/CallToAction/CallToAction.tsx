"use client";

import Link from "next/link";
import { Button } from "@/ui/button";

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonLink: string;
  className?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "dark"
    | "light";
  buttonSize?: "default" | "sm" | "lg" | "xlg" | "icon";
}

export default function CallToAction({
  title,
  subtitle,
  buttonLabel,
  buttonLink = "#",
  className = "text-theme-light text-center bg-theme-dark",
  buttonVariant = "default",
  buttonSize = "default",
}: CallToActionProps) {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <h2 className="text-lg lg:text-2xl font-semibold mb-4">{title}</h2>
      {subtitle && <p className="text-md mb-6">{subtitle}</p>}
      <div>
        <Link href={buttonLink}>
          <Button variant={buttonVariant} size={buttonSize}>
            {buttonLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
}
