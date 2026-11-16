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
  Users, 
  Award, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  Landmark,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "Private Limited Company Registration in India | 100% Online | Company Solutions",
  description:
    "Register your Private Limited Company in 7–10 days with complete support from certified Company Secretaries. Includes DSC, DIN, MOA/AOA drafting, SPICe+ MCA filing, PAN, TAN & zero-balance bank account.",
  keywords: [
    "private limited company registration",
    "pvt ltd company registration india",
    "company registration in mohali",
    "company registration chandigarh",
    "register startup india",
    "mca spice+ company incorporation",
    "company secretary for company registration",
  ],
  alternates: {
    canonical: "/services/company-registration",
  },
  openGraph: {
    title: "Private Limited Company Registration in India | Company Solutions",
    description:
      "Incorporate your Private Limited Company in 7-10 days with end-to-end guidance from CS & CA professionals. 100% online.",
    url: "https://companysolutions.in/services/company-registration",
  },
};

export default function CompanyRegistrationPage() {
  const pvtFaqs = [
    {
      q: "What is the minimum capital required to register a Private Limited Company?",
      a: "There is no minimum paid-up capital required by law under the Companies Act, 2013. You can start a Private Limited Company with an authorized capital as low as ₹1,000 or ₹10,000.",
    },
    {
      q: "How many directors and shareholders are needed?",
      a: "A minimum of 2 directors and 2 shareholders are required. The directors can also be the shareholders. At least one director must be a resident of India (resided in India for 182 days or more during the financial year).",
    },
    {
      q: "Can I register a company using my home or residential address?",
      a: "Yes. A residential property (even if rented) is 100% legally acceptable as a registered office under MCA rules. You only need a recent electricity/utility bill and a No Objection Certificate (NOC) from the property owner.",
    },
    {
      q: "What documents do directors need to provide?",
      a: "Directors need: 1) PAN card (mandatory for Indian nationals), 2) Identity proof (Aadhaar Card, Passport, or Voter ID), 3) Recent address proof (Bank statement or utility bill under 2 months old), and 4) Passport size photograph.",
    },
    {
      q: "How long does the entire incorporation process take?",
      a: "Under normal circumstances, the entire process takes 7 to 10 working days, subject to MCA portal processing speeds and name availability verification.",
    },
    {
      q: "Do I need to visit the MCA or ROC office in person?",
      a: "No physical visit is ever required. The entire process is 100% online and paperless via the Ministry of Corporate Affairs (MCA V3) portal using Class-3 Digital Signatures.",
    },
  ];

  const pvtSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Limited Company Registration",
    provider: {
      "@type": "LegalService",
      name: "Company Solutions",
      telephone: "+917340743407",
      url: "https://companysolutions.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "Comprehensive Private Limited Company incorporation services in India including DSC, DIN, MOA/AOA, SPICe+ MCA filing, and PAN/TAN allotment.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pvtFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pvtSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Header */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-3 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-medium">Private Limited Company Registration</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Most Popular Choice for Indian Startups</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
                Private Limited Company Registration in India
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Launch your startup with India&apos;s most recognized legal business structure. We handle name approval, drafting of MOA & AOA, SPICe+ MCA filing, and post-incorporation setup with complete Company Secretary guidance.
              </p>

              {/* Core Deliverables Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                {[
                  "2 Class-3 Digital Signatures (DSC)",
                  "2 Director Identification Numbers (DIN)",
                  "SPICe+ Part A Name Reservation",
                  "e-MOA & e-AOA Custom Drafting",
                  "Certificate of Incorporation (CIN)",
                  "Company PAN & TAN Allotment",
                  "EPFO & ESIC Registration",
                  "Zero-Balance Corporate Bank Account",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Timeline: <strong>7–10 Working Days</strong></span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Online MCA Compliance</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-5">
              <ServiceConsultForm
                serviceName="Private Limited Company Registration"
                badgeText="Free Name Search & Eligibility Check"
                buttonText="Check Name & Request Custom Quote"
                accentColor="blue"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Private Limited */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Register a Private Limited Company?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A Private Limited entity is the most trusted and preferred corporate structure for startups, institutional investors, and fast-scaling enterprises.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Limited Liability Protection",
                desc: "Personal assets of directors and shareholders remain 100% protected. Financial liability is strictly capped to unpaid share capital.",
              },
              {
                icon: TrendingUp,
                title: "Fundraising & VC Ready",
                desc: "The only entity structure favored by Venture Capitalists, Angel Investors, and banks for equity financing and ESOP issuance.",
              },
              {
                icon: Landmark,
                title: "Separate Legal Entity",
                desc: "A Pvt Ltd company is legally independent of its founders. It can own assets, sign contracts, incur liabilities, and sue in its own name.",
              },
              {
                icon: Scale,
                title: "Perpetual Succession",
                desc: "The company continues its existence uninterrupted irrespective of changes in management, share transfers, or retirement of directors.",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step by Step Breakdown */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase">
              End-to-End MCA Roadmap
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              The 4-Stage Incorporation Workflow
            </h2>
            <p className="text-slate-600 text-sm">
              Our Company Secretaries execute the full statutory procedure on the MCA V3 portal:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "Step 1",
                title: "DSC & Name Reservation",
                time: "Days 1–2",
                details: "Procure Class 3 Digital Signature Certificates (DSC) and file RUN / SPICe+ Part A for company name approval.",
              },
              {
                num: "Step 2",
                title: "MOA & AOA Drafting",
                time: "Days 3–4",
                details: "Professional drafting of Memorandum of Association (MOA) and Articles of Association (AOA) tailored to your business model.",
              },
              {
                num: "Step 3",
                title: "SPICe+ Part B Filing",
                time: "Days 5–7",
                details: "Comprehensive electronic filing on MCA V3 portal along with DIR-2 consents, INC-9 declarations, and Agile-PRO form.",
              },
              {
                num: "Step 4",
                title: "COI, PAN & TAN Issued",
                time: "Days 7–10",
                details: "The Registrar of Companies (ROC) issues your official Certificate of Incorporation containing CIN, PAN, and TAN.",
              },
            ].map((st, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase">
                      {st.num}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{st.time}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Documents Checklist for Incorporation
            </h2>
            <p className="text-slate-600 text-sm">
              All documents can be submitted electronically as scanned copies or smartphone photos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>From Directors & Shareholders</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>PAN Card:</strong> Mandatory for all Indian directors and shareholders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Identity Proof:</strong> Aadhaar Card, Passport, Voter ID, or Driving License.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Address Proof:</strong> Bank statement or utility bill (under 2 months old).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Passport Photo:</strong> Digital color photograph with plain background.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>For Registered Office Address</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Electricity / Gas / Water Bill:</strong> Under 2 months old in owner&apos;s name.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>No Objection Certificate (NOC):</strong> Signed by property owner (draft provided by us).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Rent Agreement:</strong> If rented, a copy of the lease agreement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Commercial or Residential:</strong> Both are 100% legally acceptable.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions on Pvt Ltd Registration
            </h2>
            <p className="text-slate-600 text-sm">
              Common questions answered by our certified Company Secretaries.
            </p>
          </div>

          <div className="space-y-4">
            {pvtFaqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                  <span className="text-blue-600">Q{i + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-12 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Ready to Register Your Private Limited Company?</h3>
              <p className="text-xs text-blue-200">
                Get free company name search and talk with our legal advisory team in Zirakpur / Mohali.
              </p>
            </div>
            <a
              href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20want%20to%20register%20a%20Private%20Limited%20Company."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shrink-0 transition-colors shadow-lg"
            >
              WhatsApp Us: +91 73407 43407
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
