"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
  href: string;
  name: string;
  isAnimated?: boolean;
}

export default function NavigationItem({
  href,
  name,
  isAnimated = false,
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={`w-fit px-4 pt-2 transition-all duration-50 ${
        isAnimated
          ? isActive
            ? "border-t-4 border-accent"
            : "hover:border-t-4 hover:border-accent border-transparent"
          : "underline"
      }`}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
}
