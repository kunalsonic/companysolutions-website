import type { Metadata } from "next";
import Link from "next/link";
import ServiceConsultForm from "@/components/ServiceConsultForm";
import { 
  Briefcase, 
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
  Percent,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "LLP Registration in India | Limited Liability Partnership | Company Solutions",
  description:
    "Register your Limited Liability Partnership (LLP) in 8–10 days with expert Company Secretary support. Includes DPIN, DSC, LLP Agreement drafting, FiLLiP MCA filing, and PAN/TAN.",
  keywords: [
    "llp registration in india",
    "limited liability partnership registration",
    "llp registration mohali",
    "llp registration chandigarh",
    "llp agreement drafting",
    "fillip form mca",
    "llp compliance services",
  ],
  alternates: {
    canonical: "/services/llp-registration",
  },
  openGraph: {
    title: "LLP Registration in India | Company Solutions",
    description:
      "Form your Limited Liability Partnership online. Low compliance cost, limited liability, and professional partnership flexibility.",
    url: "https://companysolutions.in/services/llp-registration",
  },
};

export default function LlpRegistrationPage() {
  const llpFaqs = [
    {
      q: "What is the minimum number of partners required for an LLP?",
      a: "An LLP requires a minimum of 2 partners. At least two partners must be designated partners, and at least one designated partner must be a resident of India. There is no upper limit on the maximum number of partners.",
    },
    {
      q: "Is there a minimum capital requirement for an LLP?",
      a: "No. There is no minimum capital requirement to incorporate an LLP. Partners can contribute any amount agreed upon in the LLP agreement (e.g., ₹1,000, ₹10,000, or more).",
    },
    {
      q: "Is a statutory audit mandatory for every LLP?",
      a: "No! Unlike Private Limited companies where annual audit is mandatory, an LLP is exempt from statutory audit if its annual turnover does not exceed ₹40 Lakhs and its capital contribution does not exceed ₹25 Lakhs.",
    },
    {
      q: "What is an LLP Agreement and why is it mandatory?",
      a: "The LLP Agreement defines the mutual rights, duties, profit-sharing ratios, capital contribution, and operational rules between partners and the LLP. It must be drafted, executed, and filed with the Registrar of Companies (ROC) via Form 3 within 30 days of incorporation.",
    },
    {
      q: "Can a salaried individual or professional become a partner in an LLP?",
      a: "Yes, subject to their employment contract. Professionals like chartered accountants, lawyers, architects, software consultants, and real estate developers frequently choose LLPs.",
    },
  ];

  const llpSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "LLP Registration Services",
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
      "Complete Limited Liability Partnership (LLP) incorporation services including partner DPIN, DSC, FiLLiP filing, and customized LLP Agreement drafting.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: llpFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(llpSchema) }}
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
          <span className="text-blue-400 font-medium">LLP Registration</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Low Annual Compliance & Full Protection</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
                Limited Liability Partnership (LLP) Registration
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Combine the flexibility of a traditional partnership with the limited liability benefits of a corporate body. Ideal for professionals, consultancies, agencies, and small businesses seeking low regulatory overhead.
              </p>

              {/* Core Deliverables Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                {[
                  "2 Class-3 Digital Signatures (DSC)",
                  "2 Designated Partner Identification Numbers (DPIN)",
                  "LLP Name Approval (RUN-LLP / FiLLiP)",
                  "Customized LLP Agreement Drafting",
                  "Certificate of Incorporation from ROC",
                  "LLP PAN & TAN Allotment",
                  "Filing of Form 3 with ROC",
                  "Zero-Balance Bank Account Setup",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Timeline: <strong>8–10 Working Days</strong></span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>No Audit Under ₹40L Turnover</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-5">
              <ServiceConsultForm
                serviceName="Limited Liability Partnership (LLP)"
                badgeText="Free LLP Name Check Available"
                buttonText="Check Name & Request Quote"
                accentColor="emerald"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose LLP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Key Advantages of an LLP Structure
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Why thousands of business owners and professional partners choose an LLP over a traditional partnership firm:
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Shielded Personal Assets",
                desc: "No partner is liable for another partner's misconduct, negligence, or unauthorized debts. Liability is limited strictly to agreed contribution.",
              },
              {
                icon: Percent,
                title: "No Mandatory Audit",
                desc: "Unlike Pvt Ltd companies, an LLP requires no statutory CA audit unless annual turnover exceeds ₹40 Lakhs or capital exceeds ₹25 Lakhs.",
              },
              {
                icon: Briefcase,
                title: "No Dividend Distribution Tax",
                desc: "Profits distributed to partners are completely tax-free in the hands of the partners under the Indian Income Tax Act.",
              },
              {
                icon: Scale,
                title: "Operational Flexibility",
                desc: "Internal governance is determined solely by the customized LLP Agreement, offering massive flexibility in profit sharing and voting.",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
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
              Frequently Asked Questions on LLP Registration
            </h2>
            <p className="text-slate-600 text-sm">
              Clear answers from our certified Company Secretaries.
            </p>
          </div>

          <div className="space-y-4">
            {llpFaqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                  <span className="text-emerald-600">Q{i + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 to-emerald-950 rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-900/50">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Have Questions About Your Partnership Structure?</h3>
              <p className="text-xs text-emerald-200">
                Speak directly with our Company Secretary in Zirakpur / Mohali.
              </p>
            </div>
            <a
              href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20have%20questions%20regarding%20LLP%20registration."
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
