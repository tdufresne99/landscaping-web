import { contactInfos } from "@/data/contactInfos";

interface ContactProps {
  className?: string;
  growthDirection?: "horizontal" | "vertical";
  gapSize?: "gap-2" | "gap-4" | "gap-6" | "gap-8" | "gap-10";
  showTitle?: boolean;
}

const Contact = ({ className, growthDirection = "vertical", showTitle = true, gapSize = "gap-2" }: ContactProps) => {
  return (
    <div className={`text-background ${className}`}>
      {showTitle && <h3 className="text-xl font-semibold pb-3">Nous contacter</h3>}
      <div className={`flex ${growthDirection === "horizontal" ? "flex-row" : "flex-col"} ${gapSize}`}>
        {contactInfos.map(({ type, value, icon: Icon }) => (
          <div key={type} className="flex items-center gap-2">
            {Icon && <Icon className="w-6 h-6" />}
            <span className="text-md underline">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contact;
