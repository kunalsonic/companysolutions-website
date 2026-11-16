import type { Metadata } from "next";
import Link from "next/link";
import ServiceConsultForm from "@/components/ServiceConsultForm";
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
  FileText,
  HelpCircle,
  MapPin,
  Landmark,
  Scale,
  Award,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company Registration in Chandigarh | Pvt Ltd & LLP Advisory | Company Solutions",
  description:
    "Fast, paperless company registration (Pvt Ltd, LLP, OPC) in Chandigarh with certified CS & CA advisors. Complete MCA SPICe+ filing under ROC Punjab & Chandigarh (Corporate Bhawan, Sector 27-B). Call +91 73407 43407.",
  keywords: [
    "company registration in chandigarh",
    "private limited company registration chandigarh",
    "llp registration chandigarh",
    "roc chandigarh registration",
    "company secretary in chandigarh",
    "startup registration chandigarh it park",
    "ca in chandigarh for company incorporation",
  ],
  alternates: {
    canonical: "/company-registration-chandigarh",
  },
  openGraph: {
    title: "Company Registration in Chandigarh | Company Solutions",
    description:
      "Expert company incorporation in Chandigarh. Fast-track SPICe+ MCA filing, DSC, DIN, PAN, TAN & corporate bank account. Trusted by 1,200+ founders.",
    url: "https://www.companysolutions.in/company-registration-chandigarh",
  },
};

export default function CompanyRegistrationChandigarhPage() {
  const localFaqs = [
    {
      q: "Which ROC office handles company registrations in Chandigarh?",
      a: "All corporate registrations in Chandigarh are governed by the Registrar of Companies (ROC), Punjab & Chandigarh, located at Corporate Bhawan, Plot No. 4-B, Sector 27-B, Madhya Marg, Chandigarh - 160019. Filings are submitted 100% digitally through the MCA V3 portal.",
    },
    {
      q: "Can I register a company using a residential flat or rented home in Chandigarh?",
      a: "Yes. Under MCA rules, any residential address in Chandigarh (e.g. Sector 15, 20, 35, 40, Manimajra, etc.) can serve as your official registered office. You only need a recent electricity or water bill (not older than 2 months), rent agreement (if rented), and an owner NOC.",
    },
    {
      q: "How long does it take to register a Private Limited Company in Chandigarh?",
      a: "With complete KYC documents, name approval via RUN takes 1–2 business days, and complete MCA incorporation certificate issuance takes 5–7 business days through our fast-track CS filing desk.",
    },
    {
      q: "What are the stamp duty charges for company incorporation in Chandigarh?",
      a: "As a Union Territory, Chandigarh has its own stamp duty schedule for MOA and AOA based on your authorized share capital. For companies up to ₹10 Lakh authorized capital, nominal stamp duty applies alongside zero MCA registration fees under the SPICe+ initiative.",
    },
    {
      q: "Do I need to visit the ROC office in Sector 27-B in person?",
      a: "No. The entire process is 100% digital. We generate your Class-3 Digital Signature Certificate (DSC) online, draft all legal declarations, and submit filings to the ROC remotely. You receive your digitally signed Certificate of Incorporation via email.",
    },
  ];

  const localHubs = [
    { name: "IT Park Chandigarh", area: "Rajiv Gandhi Tech Park, Kishangarh" },
    { name: "Industrial Area Phase 1 & 2", area: "Commercial complexes, warehouses, workshops" },
    { name: "Sector 17 & 34", area: "City Center, financial districts, corporate branches" },
    { name: "Sector 26 & Madhya Marg", area: "Institutional area, grain market, professional firms" },
    { name: "Panjab University & PEC", area: "Student entrepreneurs, incubators & innovation centers" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Schema Markup for Local Business & FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Company Solutions - Company Registration Chandigarh",
            url: "https://www.companysolutions.in/company-registration-chandigarh",
            logo: "https://www.companysolutions.in/logo.png",
            telephone: "+917340743407",
            email: "info@companysolutions.in",
            areaServed: [
              { "@type": "City", name: "Chandigarh" },
              { "@type": "AdministrativeArea", name: "Chandigarh Union Territory" },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "401, Ground Floor, Savitry Tower, VIP Road",
              addressLocality: "Zirakpur",
              addressRegion: "Punjab",
              postalCode: "140603",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 30.6425,
              longitude: 76.8173,
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Chandigarh Tricity Corporate Advisory
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Company Registration in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Chandigarh</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Register your Private Limited Company, LLP, or OPC in Chandigarh in just <strong>7–10 days</strong>. Complete SPICe+ MCA filings prepared and submitted directly under the jurisdiction of the <strong>Registrar of Companies (ROC), Punjab & Chandigarh</strong>.
              </p>

              {/* Local Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
                  <div className="text-lg font-bold text-blue-400">ROC Sector 27</div>
                  <div className="text-xs text-slate-400">Direct ROC Jurisdiction</div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
                  <div className="text-lg font-bold text-emerald-400">100% Online</div>
                  <div className="text-xs text-slate-400">Zero Physical Visits</div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 col-span-2 sm:col-span-1">
                  <div className="text-lg font-bold text-amber-400">1,200+ Startups</div>
                  <div className="text-xs text-slate-400">Registered in Tricity</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/917340743407?text=Hi%20Company%20Solutions,%20I%20want%20to%20register%20a%20company%20in%20Chandigarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+917340743407"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  +91 73407 43407
                </a>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-5">
              <ServiceConsultForm
                serviceName="Private Limited Company (Chandigarh)"
                badgeText="Chandigarh Fast-Track Incorporation"
                buttonText="Request Chandigarh Quote & Consult"
                accentColor="blue"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Local ROC Office & Jurisdiction Context */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                <Landmark className="w-3.5 h-3.5" />
                Statutory Authority & Jurisdiction
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Corporate Governance Under ROC Punjab & Chandigarh
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every business registered in the Union Territory of Chandigarh falls under the direct statutory oversight of the <strong>Registrar of Companies (ROC), Punjab & Chandigarh</strong>, administered by the Ministry of Corporate Affairs (MCA), Government of India.
              </p>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Official ROC Address:</div>
                <div className="text-sm font-semibold text-slate-900">
                  Registrar of Companies (ROC), Punjab & Chandigarh
                </div>
                <div className="text-xs text-slate-600">
                  Corporate Bhawan, Plot No. 4-B, Sector 27-B, Madhya Marg, Chandigarh – 160019
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Our seasoned legal team handles everything directly with ROC standards — name availability clearance (RUN), SPICe+ Part A & B preparation, customized MOA/AOA, and issue of Certificate of Incorporation (COI) with CIN.
              </p>
            </div>

            {/* Chandigarh Business Hubs We Serve */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Chandigarh Startup & Business Hubs We Serve
              </h3>
              <p className="text-xs text-slate-400">
                Whether you operate from a commercial co-working space, tech park, or residential home office, we handle registrations across:
              </p>

              <div className="space-y-3 pt-2">
                {localHubs.map((hub, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">{hub.name}</div>
                      <div className="text-xs text-slate-400">{hub.area}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Complete Incorporation Deliverables */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              All-Inclusive Incorporation Kit for Chandigarh Founders
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Everything required to launch, invoice clients, hire staff, and accept investments legally:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Certificate of Incorporation (COI)",
                desc: "Official birth certificate of your company with Corporate Identification Number (CIN) issued by MCA.",
              },
              {
                title: "2x Class-3 Digital Signatures (DSC)",
                desc: "Encrypted USB token DSCs for directors to sign MCA filings and tax documents legally.",
              },
              {
                title: "Director Identification Numbers (DIN)",
                desc: "Unique lifelong DINs registered with MCA for up to 3 founding directors.",
              },
              {
                title: "Custom MOA & AOA Drafting",
                desc: "Bespoke Memorandum & Articles of Association customized for your specific business objects & equity.",
              },
              {
                title: "Company PAN & TAN Allotment",
                desc: "Direct tax registration cards dispatched to your registered address for banking & TDS filings.",
              },
              {
                title: "Zero-Balance Corporate Bank Account",
                desc: "Direct integration with ICICI, HDFC, or Axis Bank with zero minimum balance opening support.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Chandigarh Company Registration Queries Answered
            </h2>
          </div>

          <div className="space-y-4">
            {localFaqs.map((faq, index) => (
              <div key={index} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-blue-600 font-extrabold">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl text-white text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold">Ready to Incorporate Your Company in Chandigarh?</h3>
            <p className="text-sm text-blue-100 max-w-xl mx-auto">
              Get an accurate quote calculated for your exact capital and state stamp duties. Speak with our certified secretarial advisors today.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917340743407?text=Hi%20Company%20Solutions,%20I%20need%20a%20quotation%20for%20company%20registration%20in%20Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                Get Custom Quote via WhatsApp
              </a>
              <Link
                href="/services"
                className="px-6 py-3 rounded-xl bg-blue-800 text-white font-semibold text-sm hover:bg-blue-900 transition-colors"
              >
                Browse All 29 Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
