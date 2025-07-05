import React from "react";
import Logo from "@/components/Logo/Logo";
import MobileMenu from "@/components/MobileMenu/MobileMenu.tsx";
import Contact from "../Contact/Contact";
import Socials from "../Socials/Socials";
import Navigation from "../Navigation/Navigation";

const Header = ({}) => (
  <header>
    {/* Top Section */}
    <div className="hidden lg:flex lg:p-6 bg-foreground">
      <div className="basis-1/4"></div>
      <Contact
        growthDirection="horizontal"
        gapSize="gap-10"
        showTitle={false}
        className="flex justify-center items-center font-extrabold basis-2/4"
      />
      <Socials className="basis-1/4" />
    </div>
    {/* Bottom Section */}
    <div className="h-30 lg:h-auto flex justify-between lg:justify-start items-center bg-light">
      <div className="flex items-center ml-4">
        <Logo className="max-w-32 lg:max-w-48" />
      </div>
      <Navigation
        isAnimated={true}
        className="hidden lg:block w-full justify-items-center"
        listClassName="gap-4"
        listItemClassName="text-foreground font-bold"
      />
      <MobileMenu className="lg:hidden" />
    </div>
  </header>
);

export default Header;
