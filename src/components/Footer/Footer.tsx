import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import Contact from "@/components/Contact/Contact";

const Footer = () => {
  return (
    <footer className="px-6 flex flex-col items-left justify-start bg-foreground p-4">
      <div className="basis-full">
        <Logo dark={false} className="max-w-34" />
      </div>
      <Socials className="w-full h-16" />
      <Navigation className="pl-2" listClassName="flex-col" listItemClassName="text-background underline" />
      <Contact className="mt-6"/>
    </footer>
  );
};

export default Footer;
