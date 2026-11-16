import type { Metadata } from "next";
import Link from "next/link";
import ServiceConsultForm from "@/components/ServiceConsultForm";
import { 
  Copyright, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  FileText, 
  Lock, 
  Users, 
  Award, 
  Sparkles,
  ChevronRight,
  Search,
  Globe2,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trademark Registration in India | Online Brand Protection | Company Solutions",
  description:
    "Protect your brand name, logo, and slogan legally. File Form TM-A with the Indian Trademark Registry and use the ™ symbol within 24 hours. Full objection & CS support.",
  keywords: [
    "trademark registration in india",
    "online trademark filing",
    "brand name registration",
    "logo registration india",
    "trademark search report",
    "trademark registration mohali",
    "trademark registration chandigarh",
  ],
  alternates: {
    canonical: "/services/trademark-registration",
  },
  openGraph: {
    title: "Trademark Registration in India | Company Solutions",
    description:
      "Secure exclusive legal rights over your brand name, slogan, or logo. Fast TM-A filing and complete objection handling.",
    url: "https://companysolutions.in/services/trademark-registration",
  },
};

export default function TrademarkRegistrationPage() {
  const tmFaqs = [
    {
      q: "When can I legally start using the ™ (TM) symbol?",
      a: "You can start using the ™ symbol immediately after our legal team submits your TM-A application on the IP India portal and obtains the official government filing receipt (typically within 24 hours of document submission).",
    },
    {
      q: "What is the difference between ™ and ® symbols?",
      a: "The ™ symbol indicates that a trademark application has been filed and is pending registration. The ® symbol can only be used once the Registrar of Trademarks officially grants and issues the final Certificate of Trademark Registration.",
    },
    {
      q: "How long is a trademark valid in India?",
      a: "A registered trademark in India is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by filing a renewal application (Form TM-R).",
    },
    {
      q: "What is a Trademark Class?",
      a: "Goods and services are categorized into 45 distinct classes under the Nice Classification system (Classes 1 to 34 are for physical goods, Classes 35 to 45 are for services). Your trademark must be filed under the class matching your specific business operations.",
    },
    {
      q: "What happens if someone files an objection against my trademark?",
      a: "If the trademark examiner raises an objection under Section 9 (distinctiveness) or Section 11 (similarity with existing marks), an examination report is issued. Our legal team drafts and submits a formal written legal reply within the mandatory 30-day window to overcome the objection.",
    },
  ];

  const tmSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Trademark Registration Services",
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
      "End-to-end trademark search, classification, Form TM-A electronic filing, and objection response services across India.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tmFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tmSchema) }}
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
          <span className="text-blue-400 font-medium">Trademark & Brand Registration</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Protect Your Brand Identity Legally</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
                Trademark & Brand Registration in India
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Don&apos;t let competitors copy your hard-earned brand name, logo, or tagline. Secure exclusive nationwide ownership with official trademark registration under the Trade Marks Act, 1999.
              </p>

              {/* Core Deliverables Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                {[
                  "Comprehensive Trademark Search Report",
                  "Appropriate Nice Class Identification (1 to 45)",
                  "Drafting of User Affidavit & Power of Attorney",
                  "Filing of Form TM-A on IP India Portal",
                  "Use ™ symbol within 24 hours of filing",
                  "Regular Application Status Tracking",
                  "Examination Report & Objection Advisory",
                  "Final Trademark Registration Certificate",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span>Use ™ Symbol: <strong>Within 24 Hours</strong></span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Valid for 10 Years Nationwide</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-5">
              <ServiceConsultForm
                serviceName="Trademark & Brand Registration"
                badgeText="Free Trademark Availability Search"
                buttonText="Run Free Search & Request Quote"
                accentColor="indigo"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Why Trademark Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Legal Brand Protection is Essential
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A company registration alone does not protect your brand name. Here is why every growing business needs a trademark:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: "Exclusive Legal Ownership",
                desc: "Prevents competitors, copycats, or counterfeiters from trading under your name or creating confusingly similar logos.",
              },
              {
                icon: Globe2,
                title: "Intangible Asset & Valuation",
                desc: "A registered trademark is intellectual property that builds balance sheet value, can be licensed, franchised, or sold.",
              },
              {
                icon: ShieldCheck,
                title: "E-Commerce Protection",
                desc: "Mandatory for Amazon Brand Registry, Flipkart Brand Protection, and removing unauthorized listings on social media.",
              },
              {
                icon: Scale,
                title: "Right to Legal Action",
                desc: "Only registered trademark holders have the statutory right to file infringement lawsuits and claim civil damages in Indian courts.",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
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

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions on Trademark Filing
            </h2>
            <p className="text-slate-600 text-sm">
              Answers from our trademark and intellectual property attorneys.
            </p>
          </div>

          <div className="space-y-4">
            {tmFaqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                  <span className="text-indigo-600">Q{i + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-indigo-900/50">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Want to Check if Your Brand Name is Available?</h3>
              <p className="text-xs text-indigo-200">
                Send your brand name and industry. We will conduct a free trademark clearance search report.
              </p>
            </div>
            <a
              href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20please%20check%20if%20my%20brand%20name%20is%20available%20for%20trademark."
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
