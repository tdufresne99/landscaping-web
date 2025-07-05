import { menuLinks } from "@/data/menuLinks";
import Link from "next/link";
import NavigationItem from "./NavigationItem";
import { JSX } from "react";

interface NavigationProps {
  className?: string;
  itemsPosition?: "start" | "center" | "end" | "stretch";
  growthDirection?: "horizontal" | "vertical";
  gapSize?: "gap-0" | "gap-2" | "gap-4" | "gap-6" | "gap-8" | "gap-10";
  isAnimated?: boolean;
  listItemClassName?: string;
}

export default function Navigation({
  className = "",
  itemsPosition = "start",
  growthDirection = "vertical",
  gapSize = "gap-0",
  isAnimated = false,
  listItemClassName = "",
}: NavigationProps) {
  return (
    <nav className={`p-4 ${className}`}>
      <ul
        className={`flex ${
          growthDirection === "horizontal" ? "flex-row" : "flex-col"
        } ${gapSize} justify-items-${itemsPosition}`}
      >
        {menuLinks !== null &&
          menuLinks?.length > 0 &&
          menuLinks.map((link) => (
            <NavigationItem
              key={link.name}
              href={link.url}
              name={link.name}
              isAnimated={isAnimated}
              className={listItemClassName}
            />
          ))}
      </ul>
    </nav>
  );
}
