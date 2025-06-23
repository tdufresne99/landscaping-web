import { contactInfos } from "@/data/contactInfos";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={`text-background w-full pl-3 ${className}`}>
      <h3 className="text-xl font-semibold pb-3">Nous contacter</h3>
      <div className="flex flex-col gap-2">
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
