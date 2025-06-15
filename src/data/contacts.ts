import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export const CONTACTS = [
  {
    label: "LinkedIn",
    sub: "Let’s connect professionally! 🚀",
    href: "https://www.linkedin.com/in/fredericonicola/",
    icon: FaLinkedin,
    iconClass: "text-blue-600",
    color: "hover:bg-blue-100/10",
  },
  {
    label: "Email",
    sub: "Drop me a line, I love tech talk! ✉️",
    href: "mailto:fredericonicoladev@gmail.com",
    icon: FaEnvelope,
    iconClass: "text-amber-400",
    color: "hover:bg-yellow-100/10",
  },
  {
    label: "GitHub",
    sub: "See my code playground! 🛠️",
    href: "https://github.com/fredericonicola",
    icon: FaGithub,
    iconClass: "text-gray-300",
    color: "hover:bg-gray-100/10",
  },
];
