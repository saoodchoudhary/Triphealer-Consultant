// ─── data/homeData.js ───────────────────────────────────────────
import {
  FaHandshake, FaGlobe, FaHospital, FaPassport, FaPlane, FaStar, FaUserTie,
} from "react-icons/fa";
import { MdHealthAndSafety, MdSecurity, MdSupportAgent } from "react-icons/md";

export const stats = [
  { value: "500+",  label: "Successful Placements" },
  { value: "6",     label: "Gulf Countries" },
  { value: "50+",   label: "Hospital Partners" },
  { value: "1000+", label: "Happy Clients" },
];

export const countries = [
  "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman", "Bahrain",
];

export const services = [
  {
    icon: FaPassport,
    title: "Gulf Work Visa Services",
    text: "Saudi Arabia, UAE, Qatar, Kuwait, Oman and Bahrain visa support with documentation and embassy process guidance.",
    href: "/gulf-visas",
    img: "/images/services/gulf-work-visa-services.webp",
  },
  {
    icon: FaUserTie,
    title: "Overseas Recruitment",
    text: "Skilled and unskilled manpower supply with CV shortlisting, interviews, trade tests and joining support.",
    href: "/recruitment-services",
    img: "/images/services/overseas-recruitment.webp",
  },
  {
    icon: FaHospital,
    title: "Medical Treatment in India",
    text: "Hospital appointments, specialist doctors, treatment planning, medical visa help and patient assistance.",
    href: "/medical-treatment-india",
    img: "/images/services/medical-treatment-india.webp",
  },
  {
    icon: FaPlane,
    title: "Travel Support",
    text: "Flight booking, airport pickup, hotel stay, interpreter help and smooth travel coordination.",
    href: "/travel-support",
    img: "/images/services/travel-support.webp",
  },
];

export const trustPoints = [
  { icon: FaHandshake,       title: "Trusted Consultation", text: "Professional guidance for employers, candidates and Gulf families seeking healthcare support in India." },
  { icon: MdSecurity,        title: "Process Clarity",      text: "Clear documentation support, embassy guidance and structured coordination at every step." },
  { icon: MdSupportAgent,    title: "Complete Assistance",  text: "From first inquiry to travel and joining, we stay involved until the process is completed." },
  { icon: MdHealthAndSafety, title: "Patient-Focused Help", text: "Medical travelers receive appointment support, stay planning, language help and follow-up assistance." },
  { icon: FaGlobe,           title: "Pan-Gulf Reach",       text: "Serving clients across major Gulf countries with a focused India connection." },
  { icon: FaStar,            title: "Quality Assurance",    text: "Rigorous background verification and trade tests ensure only qualified candidates are placed." },
];

export const manpowerList = [
  "Skilled Workers",
  "Unskilled Workers",
  "Construction Labor",
  "Drivers, Helpers and Cleaners",
  "Electricians, Plumbers and Welders",
  "Mechanics, Office Staff and Hospitality Staff",
];

export const medicalList = [
  "Heart Treatment",
  "Orthopedic Treatment",
  "Kidney Treatment",
  "Cancer Consultation",
  "IVF / Fertility Support",
  "Dental, Eye and General Surgery",
];