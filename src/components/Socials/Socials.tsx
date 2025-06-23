import { socialsLinks } from "@/data/socialsLinks";
import Link from "next/link";


const Socials = () => {
    return (
    <div className="text-background flex items-center w-full h-16 pl-3">
        <h3 className="text-xl font-semibold basis-1/2">Nous suivre</h3>
        <div className="flex gap-4">
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