import { menuLinks } from "@/data/menuLinks";
import Link from "next/link";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <nav>
      <ul className={`p-4 ${className}`}>
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
