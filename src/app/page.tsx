import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import EventsSection from "@/components/sections/EventsSection";
import CareerSection from "@/components/sections/CareerSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactsSection from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white page-sibur">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <PublicationsSection />
      <EventsSection />
      <CareerSection />
      <AboutSection />
      <ContactsSection />
    </main>
  );
}
