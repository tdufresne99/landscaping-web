import { menuLinks } from "@/data/menuLinks";
import Link from "next/link";

interface NavigationProps {
  className?: string;
  growthDirection?: "horizontal" | "vertical";
  gapSize?: "gap-0" | "gap-2" | "gap-4" | "gap-6" | "gap-8" | "gap-10";
}

export default function Navigation({ className = "", growthDirection = "vertical", gapSize = "gap-0" }: NavigationProps) {
  return (
    <nav className={`p-4 ${className}`}>
      <ul className={`flex ${growthDirection === "horizontal" ? "flex-row" : "flex-col"} ${gapSize}`}>
        {menuLinks !== null &&
          menuLinks?.length > 0 &&
          menuLinks.map((link) => (
            <Link key={link.name} href={link.url}>
              <li className="block mt-4 text-left underline hover:text-accent transition-colors duration-150">
                {link.name}
              </li>
            </Link>
          ))}
      </ul>
    </nav>
  );
}
