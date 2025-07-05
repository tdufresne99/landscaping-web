"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
  href: string;
  name: string;
  isAnimated?: boolean;
  className?: string;
}

export default function NavigationItem({
  href,
  name,
  className = "",
  isAnimated = false,
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={`w-fit ${className} pt-2 transition-all duration-50 ${
        isAnimated
          ? isActive
            ? "px-4 border-t-4 border-accent"
            : "px-4 hover:border-t-4 hover:border-accent border-transparent"
          : ""
      }`}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
}
