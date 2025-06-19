"use client";

import Link from "next/link";
import { Button } from "@/ui/button";

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonLink: string;
  className?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
}

export default function CallToAction({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  className = "text-theme-light text-center bg-theme-dark",
  buttonVariant = "default",
  buttonSize = "default",
}: CallToActionProps) {
  return (
    <div
      className={`w-full py-4 px-8 flex flex-col ${className}`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {subtitle && <p className="text-md mb-6">{subtitle}</p>}
      <Link href={buttonLink}>
        <Button variant={buttonVariant} size={buttonSize}>{buttonLabel}</Button>
      </Link>
    </div>
  );
}
