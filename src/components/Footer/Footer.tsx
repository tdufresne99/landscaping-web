import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import Contact from "@/components/Contact/Contact";

const Footer = () => {
  return (
    <footer className="flex flex-col items-left justify-start bg-foreground p-4">
      <div className="basis-full">
        <Logo dark={false} className="max-w-40" />
      </div>
      <Socials className="w-full h-16 pl-3" />
      <Navigation listClassName="flex-col" listItemClassName="text-background underline" />
      <Contact className="mt-6"/>
    </footer>
  );
};

export default Footer;
