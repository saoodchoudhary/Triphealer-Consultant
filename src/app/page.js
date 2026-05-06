import HeroSection        from "@/components/home/HeroSection";
import TrustStrip         from "@/components/home/TrustStrip";
import ServicesSection    from "@/components/home/ServicesSection";
import DualHighlight      from "@/components/home/DualHighlight";
import HospitalVisualStrip from "@/components/home/HospitalVisualStrip";
import WhyTriphealer      from "@/components/home/WhyTriphealer";
import CTASection         from "@/components/home/CTASection";

export const metadata = {
  title: "Triphealer – Gulf Visa, Recruitment & Medical Treatment India",
  description:
    "Triphealer connects Gulf employers with skilled manpower and assists Gulf patients seeking quality medical treatment in India.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-slate-900">
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <DualHighlight />
      <HospitalVisualStrip />
      <WhyTriphealer />
      <CTASection />
    </main>
  );
}