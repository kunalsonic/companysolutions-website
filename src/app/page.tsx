import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import CompanyComparison from "@/components/CompanyComparison";
import RegistrationRoadmap from "@/components/RegistrationRoadmap";
import DocumentChecklist from "@/components/DocumentChecklist";
import LocalPresence from "@/components/LocalPresence";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      {/* 1. High-Impact Hero with Instant Lead Capture */}
      <Hero />

      {/* 2. Trust Footprint & Key Statistics */}
      <TrustBar />

      {/* 3. Core Services Grid */}
      <ServicesGrid />

      {/* 4. Decision Matrix: Pvt Ltd vs LLP vs OPC */}
      <CompanyComparison />

      {/* 5. 4-Step Registration Process Timeline */}
      <RegistrationRoadmap />

      {/* 6. Interactive Document Checklist */}
      <DocumentChecklist />

      {/* 7. Regional Hubs & Tricity / Punjab Authority */}
      <LocalPresence />

      {/* 8. Frequently Asked Questions with Rich Schema */}
      <FaqSection />
    </>
  );
}
