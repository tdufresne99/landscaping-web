import "./globals.css";
import HeroImage from "@/assets/landscaping.jpg";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CallToAction from "@/components/CallToAction/CallToAction";
import Image from "next/image";
import WorkingImage from "@/assets/working.jpg";
import IconCard from "@/components/IconCard/IconCard";
import { RiPlantLine } from "react-icons/ri";

const heroTitle = "Commençons votre \nAménagement";

const contactAction = {
  title: "ÉcoHarmonie Paysage, votre spécialiste paysagiste à Joliette",
  buttonLabel: "Contactez-nous",
  link: "/",
};

const servicesAction = {
  title: "Nos services",
  subtitle:
    "EcoHarmonie Paysages offre une gamme complète de services d'aménagement paysager à Joliette.",
  buttonLabel: "En savoir plus",
  link: "/",
};

const planteIconCard = {
  icon: RiPlantLine,
  title: "Plantes",
  description: "Découvrez notre sélection de plantes adaptées à votre jardin.",
};

export default function Home() {
  return (
    <>
      <HeroBanner
        imageSrc={HeroImage}
        imageAlt="landscaping"
        title={heroTitle}
        height="h-64"
        textJustify="justify-start"
      />
      <CallToAction
        title={contactAction.title}
        buttonLabel={contactAction.buttonLabel}
        buttonLink={contactAction.link}
        buttonSize="lg"
      />
      <div>
        <CallToAction
          title={servicesAction.title}
          subtitle={servicesAction.subtitle}
          buttonLabel={servicesAction.buttonLabel}
          buttonLink={servicesAction.link}
          className="text-theme-dark text-left bg-theme-light"
          buttonVariant= "destructive"
          buttonSize="lg"
        />
        <Image src={WorkingImage} alt="" className="w-full brightness-90" />
      </div>
      <div className="flex flex-wrap justify-center items-center p-8 bg-light">
        <IconCard
          icon={planteIconCard.icon}
          title={planteIconCard.title}
          description={planteIconCard.description}
        />
        <IconCard
          icon={planteIconCard.icon}
          title={planteIconCard.title}
          description={planteIconCard.description}
        />
        <IconCard
          icon={planteIconCard.icon}
          title={planteIconCard.title}
          description={planteIconCard.description}
        />
      </div>
    </>
  );
}
