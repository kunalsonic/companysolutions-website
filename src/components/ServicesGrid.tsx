"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Briefcase, 
  UserCheck, 
  HeartHandshake, 
  FileSpreadsheet, 
  UserCog, 
  ShieldCheck, 
  BookOpen, 
  UserPlus, 
  MapPin, 
  TrendingUp, 
  FileEdit, 
  Copyright, 
  Receipt, 
  Calculator, 
  Award,
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  MessageCircle
} from "lucide-react";

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<"formation" | "compliance" | "changes" | "tax_ip">("formation");

  const categories = [
    {
      id: "formation",
      label: "Start a Business",
      subLabel: "Pvt Ltd, LLP, OPC & NGO",
      icon: Building2,
      count: "4 Structures",
    },
    {
      id: "compliance",
      label: "Annual ROC & CS",
      subLabel: "AOC-4, MGT-7 & Director KYC",
      icon: FileSpreadsheet,
      count: "Mandatory Filings",
    },
    {
      id: "changes",
      label: "Company Changes",
      subLabel: "Directors, Office & Capital",
      icon: UserCog,
      count: "MCA Amendments",
    },
    {
      id: "tax_ip",
      label: "Tax, Accounts & IP",
      subLabel: "Trademark, GST & Bookkeeping",
      icon: Copyright,
      count: "Brand & Finance",
    },
  ];

  const servicesData = {
    formation: [
      {
        icon: Building2,
        title: "Private Limited Company",
        tagline: "Most Preferred for Startups & Investors",
        timeline: "7–10 Working Days",
        badge: "Most Popular",
        badgeColor: "bg-blue-600 text-white",
        features: [
          "2 Class-3 Digital Signatures (DSC)",
          "2 Director Identification Numbers (DIN)",
          "Drafting of customized MOA & AOA by CS team",
          "PAN, TAN & Zero-Balance Corporate Account",
          "Free Name Reservation & SPICe+ MCA filing",
        ],
        pageUrl: "/services/company-registration",
        quoteService: "Private Limited Company",
      },
      {
        icon: Briefcase,
        title: "Limited Liability Partnership (LLP)",
        tagline: "Low Annual Compliance for Partners",
        timeline: "8–12 Working Days",
        badge: "Low Compliance",
        badgeColor: "bg-emerald-600 text-white",
        features: [
          "2 Designated Partner Identification Numbers (DPIN)",
          "Class-3 DSC for Designated Partners",
          "Drafting of tailored LLP Agreement (Form 3)",
          "No mandatory statutory audit up to ₹40L turnover",
          "Filing on MCA Portal with zero physical visits",
        ],
        pageUrl: "/services/llp-registration",
        quoteService: "Limited Liability Partnership (LLP)",
      },
      {
        icon: UserCheck,
        title: "One Person Company (OPC)",
        tagline: "Single Entrepreneur with Limited Liability",
        timeline: "7–10 Working Days",
        badge: "Solo Founders",
        badgeColor: "bg-purple-600 text-white",
        features: [
          "Single individual 100% equity ownership",
          "Separate corporate legal entity protection",
          "Nominee Director appointment documentation",
          "Significantly lower compliance than regular Pvt Ltd",
          "Seamless conversion to Pvt Ltd as business scales",
        ],
        pageUrl: "#",
        quoteService: "One Person Company (OPC)",
      },
      {
        icon: HeartHandshake,
        title: "Section 8 Company (NGO / Non-Profit)",
        tagline: "Charitable, Social & Foundation Entities",
        timeline: "15–20 Working Days",
        badge: "Non-Profit",
        badgeColor: "bg-rose-600 text-white",
        features: [
          "Central Government License for Section 8 status",
          "Eligible for 12A & 80G Income Tax exemptions",
          "Eligible to receive Corporate CSR Grants",
          "No minimum paid-up capital requirement",
          "Professional CS drafting of non-profit MOA/AOA",
        ],
        pageUrl: "#",
        quoteService: "Section 8 (NGO / Non-Profit)",
      },
    ],
    compliance: [
      {
        icon: FileSpreadsheet,
        title: "Annual ROC Filings (AOC-4 & MGT-7)",
        tagline: "Mandatory Annual Compliance for All Companies",
        timeline: "Annual Mandate",
        badge: "Strict Deadlines",
        badgeColor: "bg-amber-600 text-white",
        features: [
          "Filing of Financial Statements (Form AOC-4)",
          "Filing of Annual Return (Form MGT-7 / MGT-7A)",
          "Avoid severe MCA penalties of ₹100 per day",
          "Audit report compilation & XBRL conversion if applicable",
          "Complete verification by practicing Company Secretary",
        ],
        pageUrl: "/services/annual-compliance",
        quoteService: "Annual ROC Filings & Compliance",
      },
      {
        icon: UserCog,
        title: "Director Annual e-KYC (DIR-3 KYC)",
        tagline: "Mandatory for Every DIN Holder in India",
        timeline: "Same-Day Filing",
        badge: "Urgent",
        badgeColor: "bg-red-600 text-white",
        features: [
          "Filing of DIR-3 KYC Web (OTP on registered email & mobile)",
          "Filing of DIR-3 KYC Form with DSC for info changes",
          "Immediate deactivation prevention of Director DIN",
          "Avoid mandatory MCA reactivation penalty of ₹5,000",
          "Verification of passport, Aadhaar, and residential address",
        ],
        pageUrl: "/services/annual-compliance",
        quoteService: "Annual ROC Filings & Compliance",
      },
      {
        icon: ShieldCheck,
        title: "Post-Incorporation MCA Compliances",
        tagline: "Commencement of Business & Auditor Appointment",
        timeline: "Within 30–180 Days",
        badge: "Mandatory",
        badgeColor: "bg-blue-600 text-white",
        features: [
          "Filing of Commencement of Business (Form INC-20A)",
          "Appointment of Statutory Auditor (Form ADT-1)",
          "Allotment & issuance of physical Share Certificates",
          "Payment of State Stamp Duty on Share Certificates",
          "Initial Board Meeting documentation & minutes",
        ],
        pageUrl: "/services/annual-compliance",
        quoteService: "Annual ROC Filings & Compliance",
      },
      {
        icon: BookOpen,
        title: "Secretarial Records & Board Resolutions",
        tagline: "Statutory Registers & Meeting Documentation",
        timeline: "Ongoing",
        badge: "CS Managed",
        badgeColor: "bg-indigo-600 text-white",
        features: [
          "Drafting Notice, Agenda & Minutes of Board Meetings",
          "Annual General Meeting (AGM) documentation",
          "Maintenance of Statutory Registers (Members, Directors)",
          "Director's Report preparation as per Companies Act",
          "Secretarial compliance certification for corporate bank loans",
        ],
        pageUrl: "/services/annual-compliance",
        quoteService: "Annual ROC Filings & Compliance",
      },
    ],
    changes: [
      {
        icon: UserPlus,
        title: "Add or Remove Director (DIR-12)",
        tagline: "Appointment & Resignation of Board Members",
        timeline: "2–4 Working Days",
        badge: "Fast Amendment",
        badgeColor: "bg-cyan-600 text-white",
        features: [
          "Drafting of Board Resolution & Consent Letters (DIR-2)",
          "Drafting of Resignation Letter & Acknowledgment",
          "Filing of Form DIR-12 on the MCA portal",
          "DIN generation for newly appointed director if needed",
          "Updated master data reflect on MCA within 48 hours",
        ],
        pageUrl: "#",
        quoteService: "Director & Company Changes",
      },
      {
        icon: MapPin,
        title: "Registered Office Change (INC-22)",
        tagline: "Local, Inter-City or State-to-State Office Shift",
        timeline: "3–7 Working Days",
        badge: "MCA Approval",
        badgeColor: "bg-emerald-600 text-white",
        features: [
          "Drafting of Board / Special Resolutions for address shift",
          "Preparation of Rent Agreement & NOC from Landlord",
          "Filing of Form INC-22 with electricity/utility bill proofs",
          "Regional Director (RD) approval for inter-state shifts",
          "Official update on MCA master data and GST certificate",
        ],
        pageUrl: "#",
        quoteService: "Director & Company Changes",
      },
      {
        icon: TrendingUp,
        title: "Increase Authorized Share Capital",
        tagline: "Expand Capital to Bring In New Investors or Debt",
        timeline: "4–6 Working Days",
        badge: "Growth Step",
        badgeColor: "bg-purple-600 text-white",
        features: [
          "Drafting of Extraordinary General Meeting (EGM) notice",
          "Alteration of Capital Clause in Memorandum of Association",
          "Filing of Form SH-7 & Form MGT-14 with MCA",
          "Calculation of exact state government stamp duty",
          "Issuance of new shares / fresh allotment documentation",
        ],
        pageUrl: "#",
        quoteService: "Director & Company Changes",
      },
      {
        icon: FileEdit,
        title: "Change Company Name or Object Clause",
        tagline: "Rebrand or Pivot into New Business Activities",
        timeline: "10–14 Working Days",
        badge: "Rebranding",
        badgeColor: "bg-amber-600 text-white",
        features: [
          "Name availability search & reservation via RUN form",
          "EGM notice & special resolution drafting",
          "Filing of Form MGT-14 & Form INC-24 for Central Approval",
          "Fresh Certificate of Incorporation issued by Registrar",
          "PAN, TAN, Bank, and GST amendments assistance",
        ],
        pageUrl: "#",
        quoteService: "Director & Company Changes",
      },
    ],
    tax_ip: [
      {
        icon: Copyright,
        title: "Trademark & Brand Registration (TM-A)",
        tagline: "Protect Your Brand Name, Logo & Tagline Legally",
        timeline: "Same-Day Filing",
        badge: "IP Protection",
        badgeColor: "bg-indigo-600 text-white",
        features: [
          "Comprehensive Trademark Search report across all 45 classes",
          "Drafting & submission of Form TM-A with IP India",
          "Legally use the ™ symbol within 24 hours of filing",
          "Real-time monitoring of application status with Registry",
          "Expert legal response to Examination Reports & Objections",
        ],
        pageUrl: "/services/trademark-registration",
        quoteService: "Trademark & IP Registration",
      },
      {
        icon: Receipt,
        title: "GST Registration & Monthly Filings",
        tagline: "End-to-End Indirect Tax Solutions",
        timeline: "3–5 Working Days",
        badge: "Tax Compliance",
        badgeColor: "bg-emerald-600 text-white",
        features: [
          "New GST Registration with Principal & Additional Places",
          "Monthly / Quarterly GSTR-1 & GSTR-3B return filings",
          "Input Tax Credit (ITC) reconciliation & mismatch detection",
          "Annual GST Return (GSTR-9 & 9C) audit filing",
          "Handling of GST Show-Cause Notices and scrutiny orders",
        ],
        pageUrl: "#",
        quoteService: "GST Registration & Filing",
      },
      {
        icon: Calculator,
        title: "Monthly Bookkeeping & Accounting",
        tagline: "Complete Financial & Ledger Outsourcing",
        timeline: "Monthly Mandate",
        badge: "Full Service",
        badgeColor: "bg-slate-700 text-white",
        features: [
          "Cloud-based bookkeeping in Tally, Zoho Books, or QuickBooks",
          "Bank reconciliation & monthly profit/loss statement",
          "TDS calculation, challan generation & Form 26Q return filing",
          "Advance tax computation and statutory compliance calendar",
          "Preparation of year-end Balance Sheet for CA audit",
        ],
        pageUrl: "#",
        quoteService: "General Inquiry",
      },
      {
        icon: Award,
        title: "MSME (Udyam) & Import Export Code (IEC)",
        tagline: "Government Subsidies & Global Trade Licenses",
        timeline: "24–48 Hours",
        badge: "Govt Benefits",
        badgeColor: "bg-blue-700 text-white",
        features: [
          "Free registration on official Udyam MSME portal",
          "Priority bank lending benefits & lower interest rates",
          "50% government fee discount on Trademark filing for MSMEs",
          "Directorate General of Foreign Trade (DGFT) IEC generation",
          "Lifetime validity of licenses with zero annual renewals",
        ],
        pageUrl: "#",
        quoteService: "General Inquiry",
      },
    ],
  };

  const handleScrollToQuote = (serviceName: string) => {
    if (typeof window !== "undefined") {
      const quoteEl = document.getElementById("quote-form");
      if (quoteEl) {
        quoteEl.scrollIntoView({ behavior: "smooth", block: "start" });
        // Auto-select service in quote dropdown if available
        const select = quoteEl.querySelector("select") as HTMLSelectElement | null;
        if (select) {
          const match = Array.from(select.options).find(opt => opt.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(opt.value.toLowerCase()));
          if (match) {
            select.value = match.value;
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
        const nameInput = quoteEl.querySelector("input[type='text']") as HTMLInputElement | null;
        if (nameInput) nameInput.focus();
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Legal & Company Secretarial Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Corporate Services Tailored to Your Growth Stage
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From incorporating your dream startup to secretarial amendments, annual ROC filings, and trademark protection across India.
          </p>
        </div>

        {/* Category Tabs (Option A) */}
        <div className="mt-12 flex justify-center">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex flex-wrap sm:flex-nowrap gap-1.5 max-w-4xl w-full border border-slate-300/60 shadow-inner">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id as any)}
                  className={`flex-1 min-w-[140px] py-3 px-3.5 rounded-xl text-left transition-all flex items-center gap-3 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-md border border-slate-200/80 scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`text-xs font-bold leading-tight ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                      {cat.label}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5 hidden sm:block">
                      {cat.subLabel}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Services Cards (Option C: Enhanced Layout) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData[activeTab].map((service, index) => {
            const Icon = service.icon;
            const hasDedicatedPage = service.pageUrl !== "#";

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 mb-4 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Timeline Badge (Option C enhancement) */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold mb-4 border border-slate-200/80">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Est. Timeline: {service.timeline}</span>
                  </div>

                  {/* Key Deliverables / Checklist */}
                  <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3.5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons (Direct Quote + Page/WhatsApp) */}
                <div className="pt-5 mt-5 border-t border-slate-100 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleScrollToQuote(service.quoteService)}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-blue-600/20 active:scale-95"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {hasDedicatedPage ? (
                    <Link
                      href={service.pageUrl}
                      className="w-full py-2 px-3 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 font-medium text-[11px] flex items-center justify-center gap-1 transition-colors text-center"
                    >
                      <span>View Full Process & Documents &rarr;</span>
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.%20Please%20share%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg text-emerald-700 hover:bg-emerald-50 font-medium text-[11px] flex items-center justify-center gap-1 transition-colors text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Directory Banner */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-blue-700 font-bold text-sm border-2 border-blue-200 shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore All 25+ Corporate Services (DIR-12, INC-22, GST, Startup India)</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>

      </div>
    </section>
  );
}
