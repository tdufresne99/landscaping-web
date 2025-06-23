import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import Contact from "@/components/Contact/Contact";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-left justify-start bg-foreground p-4">
      <div className="basis-full">
        <Logo dark={false} className="max-w-40" />
      </div>
      <Socials />
      <Navigation className="text-background" />
      <Contact className="mt-6"/>
    </footer>
  );
};

export default Footer;
