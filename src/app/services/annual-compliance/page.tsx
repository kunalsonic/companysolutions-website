import type { Metadata } from "next";
import Link from "next/link";
import ServiceConsultForm from "@/components/ServiceConsultForm";
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  FileText, 
  AlertTriangle, 
  Users, 
  Award, 
  Sparkles,
  ChevronRight,
  Calendar,
  Building2,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "Annual ROC Compliance & Filing Services in India | Company Solutions",
  description:
    "Avoid hefty MCA penalties with end-to-end Annual ROC Filings (Form AOC-4, MGT-7, Form 11, Form 8) and Director DIR-3 KYC support by certified Company Secretaries.",
  keywords: [
    "annual roc compliance services",
    "aoc 4 filing",
    "mgt 7 filing india",
    "dir 3 kyc filing",
    "roc filing consultants mohali",
    "company secretary for annual compliance",
    "llp form 11 form 8 filing",
  ],
  alternates: {
    canonical: "/services/annual-compliance",
  },
  openGraph: {
    title: "Annual ROC Compliance Services in India | Company Solutions",
    description:
      "Comprehensive secretarial compliance, statutory filing, and MCA annual returns for Private Limited and LLP companies.",
    url: "https://companysolutions.in/services/annual-compliance",
  },
};

export default function AnnualCompliancePage() {
  const complianceFaqs = [
    {
      q: "What happens if a company fails to file Form AOC-4 or MGT-7 on time?",
      a: "The Ministry of Corporate Affairs (MCA) imposes a severe daily penalty of ₹100 per day per form with no maximum cap. In addition, persistent non-compliance can lead to disqualification of directors for 5 years and striking off of the company name by the ROC.",
    },
    {
      q: "What is DIR-3 KYC and who must file it?",
      a: "Every individual holding an active Director Identification Number (DIN) or DPIN must file Form DIR-3 KYC annually before September 30th. If missed, the DIN is deactivated by MCA and a late penalty fee of ₹5,000 per DIN is levied to reactivate it.",
    },
    {
      q: "What are the mandatory annual filings for an LLP?",
      a: "Every LLP must file two statutory forms annually: 1) Form 11 (Annual Return) within 60 days of the end of the financial year (due by May 30th), and 2) Form 8 (Statement of Account & Solvency) within 30 days from the end of 6 months of financial year (due by October 30th).",
    },
    {
      q: "Is annual ROC filing mandatory even if there were zero business transactions?",
      a: "Yes! Even if your company or LLP was dormant, had zero revenue, or did not conduct any business, filing annual statutory returns with the ROC is legally mandatory under the Companies Act, 2013.",
    },
    {
      q: "What is Form INC-20A (Commencement of Business)?",
      a: "Every company incorporated after November 2, 2018 must file Form INC-20A within 180 days of incorporation, certifying that subscribers have deposited their agreed share capital into the company bank account.",
    },
  ];

  const complianceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Annual ROC Compliance Services",
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
      "Statutory annual filings, AOC-4, MGT-7, Form 11, Form 8, and DIR-3 KYC secretarial compliance for Indian companies and LLPs.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: complianceFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(complianceSchema) }}
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
          <span className="text-blue-400 font-medium">Annual ROC Compliance & Secretarial Filings</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero Late Fees &bull; 100% MCA Compliance</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
                Annual ROC Compliance & Secretarial Filings
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Protect your company from severe daily fines (₹100/day) and director disqualification. Our practicing Company Secretaries handle your annual returns, financial statements, AGM minutes, and director KYC seamlessly.
              </p>

              {/* Core Deliverables Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                {[
                  "Filing of Form AOC-4 (Financial Statements)",
                  "Filing of Form MGT-7/7A (Annual Return)",
                  "Annual Director eKYC (DIR-3 KYC)",
                  "Preparation of Notice & Minutes of AGM",
                  "Drafting of Directors' Report & Resolutions",
                  "LLP Form 11 & Form 8 Filings",
                  "Maintenance of Statutory Registers",
                  "Commencement of Business (INC-20A)",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Timely Tracking Before MCA Due Dates</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Handled by Certified Company Secretaries</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-5">
              <ServiceConsultForm
                serviceName="Annual ROC Compliance"
                badgeText="Avoid ₹100/Day Late Penalties"
                buttonText="Check Compliance Status & Get Quote"
                accentColor="amber"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Compliance Calendar & Deadlines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Annual ROC Filing Calendar for Indian Entities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key mandatory statutory deadlines under the Companies Act, 2013 and LLP Act, 2008:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                due: "May 30th",
                form: "LLP Form 11",
                entity: "Limited Liability Partnerships",
                desc: "Annual Return of the LLP detailing partner count and contributions.",
              },
              {
                due: "September 30th",
                form: "DIR-3 KYC",
                entity: "All DIN & DPIN Holders",
                desc: "Mandatory annual KYC for directors. Deactivation and ₹5,000 fine if delayed.",
              },
              {
                due: "October 30th",
                form: "Form AOC-4 / LLP Form 8",
                entity: "Pvt Ltd & LLPs",
                desc: "Filing of Balance Sheet, Profit & Loss account, and Director's report.",
              },
              {
                due: "November 29th",
                form: "Form MGT-7 / 7A",
                entity: "Private Limited Companies",
                desc: "Annual Return containing shareholding pattern and board meeting records.",
              },
            ].map((cal, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-bold mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Due: {cal.due}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{cal.form}</h3>
                <div className="text-xs font-semibold text-blue-600 mb-2">{cal.entity}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{cal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions on Annual ROC Compliance
            </h2>
            <p className="text-slate-600 text-sm">
              Critical compliance advice from our certified Company Secretaries.
            </p>
          </div>

          <div className="space-y-4">
            {complianceFaqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                  <span className="text-amber-600">Q{i + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 to-amber-950 rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-amber-900/50">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Unsure About Your Pending MCA Compliances?</h3>
              <p className="text-xs text-amber-200">
                Our legal team will check your company status on the MCA Master Data portal for free.
              </p>
            </div>
            <a
              href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20want%20to%20check%20my%20company's%20pending%20ROC%20compliances."
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
