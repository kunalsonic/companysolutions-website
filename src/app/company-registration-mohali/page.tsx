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
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company Registration in Mohali (SAS Nagar) | Pvt Ltd & LLP | Company Solutions",
  description:
    "Fast, paperless company registration (Pvt Ltd, LLP, OPC) in Mohali (SAS Nagar) for IT companies, startups & businesses. 7–10 days MCA SPICe+ approval, DSC, DIN & PAN. Call +91 73407 43407.",
  keywords: [
    "company registration in mohali",
    "private limited company registration mohali",
    "startup registration mohali it park",
    "it company registration mohali phase 8",
    "llp registration sas nagar mohali",
    "company secretary in mohali",
    "best ca in mohali for pvt ltd company",
  ],
  alternates: {
    canonical: "/company-registration-mohali",
  },
  openGraph: {
    title: "Company Registration in Mohali (SAS Nagar) | Company Solutions",
    description:
      "Start your company in Mohali. Dedicated incorporation advisory for IT firms, startups, and manufacturers in Phase 8, IT City, CP67, and Bestech Towers.",
    url: "https://www.companysolutions.in/company-registration-mohali",
  },
};

export default function CompanyRegistrationMohaliPage() {
  const localFaqs = [
    {
      q: "Can I register an IT startup in Mohali without a physical commercial office?",
      a: "Yes. You can incorporate your IT company or software consultancy using any residential address in Mohali (e.g. Sector 68, 70, 71, Phase 3B2, Phase 7, Aerocity, etc.) as your registered office. You only need a recent utility bill and owner NOC. You can later update to a commercial office in Phase 8B or Bestech when you expand.",
    },
    {
      q: "How does Company Solutions help Mohali startups with DPIIT recognition?",
      a: "Once your Private Limited Company is registered, we assist you in securing DPIIT Startup India Recognition, making your Mohali startup eligible for 3-year tax holidays (Section 80-IAC), angel tax exemptions, and preferential public procurement.",
    },
    {
      q: "What is the Punjab state stamp duty for company incorporation?",
      a: "In Punjab, stamp duty on the Memorandum of Association (MOA) and Articles of Association (AOA) is paid digitally through the MCA portal based on the Punjab Stamp Act. Under the Central Government SPICe+ scheme, MCA zero-fee concessions apply for companies with authorized capital up to ₹10 Lakhs, leaving only nominal state stamp duties.",
    },
    {
      q: "How fast can I get a Certificate of Incorporation in Mohali?",
      a: "With our certified Company Secretaries drafting and vetting your SPICe+ filings, DIN, DSC, and Name Approval (RUN) are processed in parallel, typically achieving full incorporation in 5 to 7 working days.",
    },
    {
      q: "Can Company Solutions assist with GST and trademark registration in Mohali?",
      a: "Yes. We provide comprehensive post-incorporation bundles including GST registration with Punjab State Tax jurisdiction, MSME/Udyam registration, and trademark filing (TM-A) to protect your brand name across India.",
    },
  ];

  const localHubs = [
    { name: "Phase 8 & 8B IT Park", area: "QuarkCity, Sebiz Square, major IT & software enterprises" },
    { name: "Bestech Business Towers", area: "Sector 66, Grade-A IT offices, corporate workspaces" },
    { name: "CP67 Mall & Complex", area: "Sector 67, premier commercial suites & consulting offices" },
    { name: "IT City & Aerocity", area: "Sector 82, 83, 101, upcoming tech parks & bio-clusters" },
    { name: "Focal Point & Industrial Area", area: "Phase 7, 8, 9, light engineering, export units & manufacturing" },
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
            name: "Company Solutions - Company Registration Mohali",
            url: "https://www.companysolutions.in/company-registration-mohali",
            logo: "https://www.companysolutions.in/logo.png",
            telephone: "+917340743407",
            email: "info@companysolutions.in",
            areaServed: [
              { "@type": "City", name: "Mohali" },
              { "@type": "City", name: "SAS Nagar" },
              { "@type": "AdministrativeArea", name: "Punjab" },
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
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                Mohali IT City & Startup Incorporation
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Company Registration in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mohali (SAS Nagar)</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Launch your IT, SaaS, or commercial business in Mohali with certified secretarial & corporate legal advisory. Complete incorporation package: <strong>COI, DIN, DSC, PAN, TAN & corporate bank account in 7–10 days</strong>.
              </p>

              {/* Local Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
                  <div className="text-lg font-bold text-blue-400">IT & Startups</div>
                  <div className="text-xs text-slate-400">Specialized ESOP & Equity</div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
                  <div className="text-lg font-bold text-emerald-400">100% Online</div>
                  <div className="text-xs text-slate-400">Doorstep & Digital KYC</div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 col-span-2 sm:col-span-1">
                  <div className="text-lg font-bold text-amber-400">DPIIT Ready</div>
                  <div className="text-xs text-slate-400">Startup Tax Benefits</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/917340743407?text=Hi%20Company%20Solutions,%20I%20want%20to%20register%20a%20company%20in%20Mohali"
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
                serviceName="Private Limited Company (Mohali)"
                badgeText="Mohali Startup & IT Fast-Track"
                buttonText="Request Mohali Quote & Consult"
                accentColor="blue"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Mohali Startup & IT Hub Ecosystem */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                Strategic Tech & Commercial Hub
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Empowering SAS Nagar Founders from Idea to Scale
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Mohali has rapidly evolved into North India&apos;s premier tech corridor, hosting global software exporters, AI ventures, fintech startups, and biomedical hubs. Registering your company as a <strong>Private Limited Entity</strong> provides limited liability shield, credibility for corporate clients, and eligibility for angel/VC funding.
              </p>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Local Jurisdiction & Support:</div>
                <div className="text-sm font-semibold text-slate-900">
                  Registrar of Companies (ROC), Punjab
                </div>
                <div className="text-xs text-slate-600">
                  Filings prepared in compliance with MCA V3, Punjab State Stamp Duty, and Punjab Shops & Commercial Establishment Acts.
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Whether you are establishing a development team at CP67 or setting up an export-oriented IT unit under STPI Mohali, we ensure full compliance from Day 1.
              </p>
            </div>

            {/* Key Mohali Tech & Business Belts */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Key Mohali Business Belts We Serve
              </h3>
              <p className="text-xs text-slate-400">
                Fast-track documentation and advisory across SAS Nagar:
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

      {/* Which Entity Type is Right for Your Mohali Business */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Choose the Best Legal Entity for Your Business
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Our certified Company Secretaries help you choose the ideal corporate structure based on your growth roadmap:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-blue-600 shadow-md relative space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase">
                Most Popular
              </span>
              <h3 className="text-xl font-bold text-slate-900">Private Limited (Pvt Ltd)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Essential for IT companies, startups seeking equity funding, and firms needing maximum corporate credibility.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">✓ Min. 2 Directors & Shareholders</li>
                <li className="flex items-center gap-2">✓ Can issue ESOPs & raise capital</li>
                <li className="flex items-center gap-2">✓ Limited liability protection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
                Low Compliance
              </span>
              <h3 className="text-xl font-bold text-slate-900">Limited Liability Partnership (LLP)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ideal for consulting firms, agencies, professionals, and boutique services wanting partnership flexibility without personal liability.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">✓ Min. 2 Partners, no upper limit</li>
                <li className="flex items-center gap-2">✓ Lower compliance burden than Pvt Ltd</li>
                <li className="flex items-center gap-2">✓ No mandatory statutory audit up to ₹40L</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
                Solo Founders
              </span>
              <h3 className="text-xl font-bold text-slate-900">One Person Company (OPC)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Perfect for single entrepreneurs who want corporate status with complete 100% ownership control.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">✓ 1 Director & 1 Nominee Director</li>
                <li className="flex items-center gap-2">✓ Full limited liability protection</li>
                <li className="flex items-center gap-2">✓ Can easily convert to Pvt Ltd later</li>
              </ul>
            </div>
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
              Mohali Company Registration FAQs
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
            <h3 className="text-2xl font-bold">Register Your Mohali Startup Today</h3>
            <p className="text-sm text-blue-100 max-w-xl mx-auto">
              Get an exact quotation for state stamp duty, DSC, and MCA filing fees. Talk directly with our senior Company Secretaries.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917340743407?text=Hi%20Company%20Solutions,%20I%20need%20a%20quotation%20for%20company%20registration%20in%20Mohali"
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
                Explore All 29 Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
