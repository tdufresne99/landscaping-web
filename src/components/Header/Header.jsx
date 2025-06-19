import React from "react";
import Logo from "@/components/Logo/Logo";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu/MobileMenu.tsx";

const socials = [
  { name: "Facebook", url: "https://facebook.com", icon: "🌐" },
  { name: "Twitter", url: "https://twitter.com", icon: "🐦" },
  { name: "Instagram", url: "https://instagram.com", icon: "📸" },
];

const menuLinks = [
  { name: "Accueil", url: "/" },
  { name: "Services", url: "/" },
  { name: "À propos", url: "/" },
  { name: "Contact", url: "/" },
  { name: "Réservation", url: "/" },
];

const contactInfo = [
  { type: "phone", value: "(123) 456-7890", logo: "📞" },
  { type: "email", value: "ecoharmoniepaysage@gmail.com", logo: "✉️" },
];

const Header = ({
  contacts = contactInfo,
  socialsLinks = socials,
  links = menuLinks,
}) => (
  <header>
    {/* Top Section */}
    <div className="invisible h-0 flex bg-dark">
      <div className="flex flex-col text-light text-base tracking-wide font-bold">
        {contacts.map((info) => (
          <span key={info.type} className="">
            {info.logo} <span className="underline">{info.value}</span>
          </span>
        ))}
      </div>
      <div className="w-1/2">
        {socialsLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-10 no-underline text-dark text-lg"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
    {/* Bottom Section */}
    <div className="h-30 flex justify-between items-center bg-light">
      <div className="flex items-center ml-4">
        <Logo className="max-w-32" />
      </div>
      <MobileMenu menuItems={links} />
    </div>
  </header>
);

export default Header;
