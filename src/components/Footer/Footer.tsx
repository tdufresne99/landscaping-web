import Logo from "@/components/Logo/Logo";

const Footer = () => {
  return (
    <footer className="flex items-left justify-start bg-foreground p-4">
      <Logo dark={false} className="max-w-32"/>
    </footer>
  );
};

export default Footer;
