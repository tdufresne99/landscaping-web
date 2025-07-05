import { menuLinks } from "@/data/menuLinks";
import Link from "next/link";
import NavigationItem from "./NavigationItem";
import { JSX } from "react";

interface NavigationProps {
  className?: string;
  isAnimated?: boolean;
  listClassName?: string;
  listItemClassName?: string;
}

export default function Navigation({
  className = "",
  isAnimated = false,
  listClassName = "",
  listItemClassName = "",
}: NavigationProps) {
  return (
    <nav className={`${className}`}>
      <ul
        className={`flex justify-items-start gap-0 ${listClassName}`}
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
