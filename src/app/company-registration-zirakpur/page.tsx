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
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company Registration in Zirakpur | Savitry Tower VIP Road | Company Solutions",
  description:
    "Fast company registration (Pvt Ltd, LLP, OPC) in Zirakpur with certified CS legal advisors at Savitry Tower, VIP Road. Walk-in or 100% online MCA filings in 7–10 days. Call +91 73407 43407.",
  keywords: [
    "company registration in zirakpur",
    "private limited company registration zirakpur",
    "company secretary in zirakpur",
    "ca on vip road zirakpur",
    "savitry tower vip road company registration",
    "llp registration zirakpur",
    "gst registration zirakpur",
  ],
  alternates: {
    canonical: "/company-registration-zirakpur",
  },
  openGraph: {
    title: "Company Registration in Zirakpur | Company Solutions",
    description:
      "Direct legal advisory at Savitry Tower, VIP Road, Zirakpur. Fast-track company registration, GST, and ROC compliance for businesses across Zirakpur & Mohali.",
    url: "https://www.companysolutions.in/company-registration-zirakpur",
  },
};

export default function CompanyRegistrationZirakpurPage() {
  const localFaqs = [
    {
      q: "Where is Company Solutions office located in Zirakpur?",
      a: "Our corporate advisory office is located at 401, Ground Floor, Savitry Tower, VIP Road, Zirakpur, Mohali, Punjab - 140603 (near Savitry Enclave). Founders are welcome to visit our office for in-person consultations from Monday to Saturday, 9:30 AM to 7:00 PM.",
    },
    {
      q: "Can I register my business online without visiting the office?",
      a: "Absolutely. While you are always welcome at our VIP Road office, our entire incorporation process is 100% paperless and digital. You can submit documents over WhatsApp or email, complete video-KYC for your DSC, and receive your Certificate of Incorporation digitally.",
    },
    {
      q: "Can I use a commercial or residential address on VIP Road / PR7 Road as registered office?",
      a: "Yes. Whether you own or rent a shop, commercial office space, or a residential flat in Zirakpur (e.g. on VIP Road, PR7 Airport Road, Dhakoli, Baltana, or Ambala Highway), it is fully valid for MCA registration with a utility bill and owner NOC.",
    },
    {
      q: "What other legal services do you provide in Zirakpur?",
      a: "In addition to Private Limited and LLP registrations, we provide end-to-end corporate services: GST registration & monthly return filing, Trademark brand protection (TM-A), Udyam MSME registration, Import Export Code (IEC), and Annual ROC compliance (AOC-4 & MGT-7).",
    },
    {
      q: "What is the cost of company registration in Zirakpur?",
      a: "Under the MCA SPICe+ initiative, Central Government ROC filing fees are waived for companies with authorized capital up to ₹10 Lakhs. The overall cost only includes Punjab state stamp duty, 2x Digital Signature Certificates (DSC), DIN fees, and our transparent CS drafting fee. We provide an exact written quote with zero hidden charges.",
    },
  ];

  const localHubs = [
    { name: "VIP Road Commercial Belt", area: "Savitry Towers, commercial plazas, retail & services" },
    { name: "PR7 Airport Road & Aerocity Connectivity", area: "Modern showrooms, logistics, high-growth commercial hubs" },
    { name: "Chandigarh - Ambala National Highway", area: "Established business plazas, auto dealerships, warehousing" },
    { name: "Dhakoli & Baltana", area: "Local traders, micro-enterprises & residential startups" },
    { name: "Peer Muchalla & Panchkula Extension", area: "Cross-border retail, tech consultancies & clinics" },
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
            name: "Company Solutions - Company Registration Zirakpur",
            url: "https://www.companysolutions.in/company-registration-zirakpur",
            logo: "https://www.companysolutions.in/logo.png",
            telephone: "+917340743407",
            email: "info@companysolutions.in",
            areaServed: [
              { "@type": "City", name: "Zirakpur" },
              { "@type": "City", name: "Dhakoli" },
              { "@type": "City", name: "Baltana" },
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
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:30",
                closes: "19:00",
              },
            ],
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
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                Headquarters at Savitry Tower, VIP Road
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Company Registration in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Zirakpur</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Partner with certified Company Secretaries & corporate legal advisors based right here on <strong>VIP Road, Zirakpur</strong>. Fast, paperless MCA company incorporation with complete support from name reservation to bank account opening in <strong>7–10 days</strong>.
              </p>

              {/* Local Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
                  <div className="text-lg font-bold text-blue-400">VIP Road HQ</div>
                  <div className="text-xs text-slate-400">In-Person Consultation</div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
                  <div className="text-lg font-bold text-emerald-400">100% Online</div>
                  <div className="text-xs text-slate-400">Zero Paperwork Delay</div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 col-span-2 sm:col-span-1">
                  <div className="text-lg font-bold text-amber-400">Complete Suite</div>
                  <div className="text-xs text-slate-400">GST, TM & ROC Compliance</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/917340743407?text=Hi%20Company%20Solutions,%20I%20want%20to%20register%20a%20company%20in%20Zirakpur"
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
                serviceName="Private Limited Company (Zirakpur)"
                badgeText="Savitry Tower VIP Road Advisory"
                buttonText="Request Zirakpur Quote & Visit"
                accentColor="blue"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Physical Office Presence Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                Physical Office & Verified Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Visit Our Advisory Office on VIP Road, Zirakpur
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Unlike faceless online portals, <strong>Company Solutions</strong> operates from a permanent physical office in Savitry Tower on VIP Road. You can sit down with our legal advisors to discuss shareholding structures, founder vesting, partnership deeds, and taxation strategies.
              </p>
              
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Registered Address:</div>
                    <div className="text-sm font-bold text-slate-900">
                      401, Ground Floor, Savitry Tower, VIP Road, Zirakpur, Mohali, Punjab 140603
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200/80 text-xs">
                  <div>
                    <span className="text-slate-500">Office Timings:</span>
                    <div className="font-semibold text-slate-900">Mon – Sat (9:30 AM – 7:00 PM)</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Direct Contact:</span>
                    <div className="font-semibold text-slate-900">+91 73407 43407</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zirakpur Business Belts We Serve */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                Local Commercial Hubs in Zirakpur
              </h3>
              <p className="text-xs text-slate-400">
                Full legal, secretarial, and tax compliance coverage across:
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

      {/* 4-Step Local Registration Process */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Simple 4-Step Registration Roadmap
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From initial document submission to Certificate of Incorporation in 7–10 working days:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "KYC & Name Check",
                desc: "Send Aadhaar, PAN & electricity bill. We run name availability checks on MCA database within 2 hours.",
              },
              {
                step: "02",
                title: "Digital Signatures",
                desc: "Class-3 DSC tokens generated for all proposed directors via instant video-verification.",
              },
              {
                step: "03",
                title: "SPICe+ MCA Submission",
                desc: "Custom MOA/AOA drafted and submitted directly to ROC Punjab & Chandigarh on MCA V3.",
              },
              {
                step: "04",
                title: "COI, PAN, TAN Issued",
                desc: "Certificate of Incorporation with CIN, PAN & TAN allotted. Corporate bank account opened.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-2">
                <span className="text-2xl font-black text-blue-600/30">{s.step}</span>
                <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
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
              Zirakpur Business Registration FAQs
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
            <h3 className="text-2xl font-bold">Start Your Business with Local Zirakpur Experts</h3>
            <p className="text-sm text-blue-100 max-w-xl mx-auto">
              Get an accurate quote calculated for your exact capital and state stamp duties. Speak with our certified secretarial advisors today.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917340743407?text=Hi%20Company%20Solutions,%20I%20want%20to%20visit%20your%20Zirakpur%20office%20for%20company%20registration"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                Schedule Visit via WhatsApp
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
