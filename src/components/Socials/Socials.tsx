import { socialsLinks } from "@/data/socialsLinks";
import Link from "next/link";

interface SocialsProps {
  className?: string;
  growthDirection?: "horizontal" | "vertical";
  gapSize?: "gap-2" | "gap-4" | "gap-6" | "gap-8" | "gap-10";
  showTitle?: boolean;
}

const Socials = ({ className, growthDirection = "horizontal", gapSize = "gap-4", showTitle = true }: SocialsProps) => {
  return (
    <div className={`text-background flex items-center ${className}`}>
      {showTitle && <h3 className="text-xl font-semibold basis-auto pr-8">Nous suivre</h3>}
      <div className={`flex ${growthDirection === "horizontal" ? "flex-row" : "flex-col"} ${gapSize}`}>
        {socialsLinks.map(({ name, url, icon: Icon }) => (
          <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark hover:text-accent text-2xl"
          >
            {Icon && <Icon className="w-10 h-10" />}
            </Link>
          ))}
        </div>
      </div>
    )
}

export default Socials;