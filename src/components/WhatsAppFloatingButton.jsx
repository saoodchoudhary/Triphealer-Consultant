import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "919953889465";
const defaultMessage =
  "Hello Sir, I want to know more about Triphealer services.";

export default function WhatsAppFloatingButton() {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:-translate-y-1 hover:bg-[#1fb85a]"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
