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
        height="h-64 lg:h-158"
      />
      <CallToAction
        title={contactAction.title}
        buttonLabel={contactAction.buttonLabel}
        buttonLink={contactAction.link}
        buttonVariant="light"
        buttonSize="lg"
        className="shadow-xl text-theme-light text-center bg-theme-dark justify-self-center lg:w-3/4 lg:mt-1 h-48 p-8 lg:p-24"
      />
      <div className="lg:flex lg:mt-1 shadow-md">
        <CallToAction
          title={servicesAction.title}
          subtitle={servicesAction.subtitle}
          buttonLabel={servicesAction.buttonLabel}
          buttonLink={servicesAction.link}
          className="text-theme-dark text-left bg-theme-semiLight lg:grow p-8 lg:p-40 lg:mr-1"
          buttonVariant="dark"
          buttonSize="lg"
        />
        <div className="basis-1/2"><Image src={WorkingImage} alt="working" className="brightness-80 object-cover min-h-full" priority /></div>

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
