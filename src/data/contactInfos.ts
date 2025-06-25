import { ContactItem } from "@/types/contactItem";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const contactInfos: ContactItem[] = [
  { type: "phone", value: "(123) 456-7890", icon: FaPhoneAlt },
  { type: "email", value: "ecoharmoniepaysage@gmail.com", icon: MdEmail },
];
