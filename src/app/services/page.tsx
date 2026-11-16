import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  Briefcase, 
  UserCheck, 
  FileSpreadsheet, 
  Copyright, 
  Receipt, 
  RefreshCw, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Scale, 
  FileCheck, 
  Users, 
  Landmark, 
  FileText, 
  AlertCircle, 
  Globe2, 
  Award, 
  Lock, 
  TrendingUp, 
  BadgePercent,
  Search
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Corporate Legal, Registration & Secretarial Services | Company Solutions",
  description:
    "Explore our complete directory of 25+ corporate services: Private Limited, LLP, OPC, Section 8, Annual ROC filings, director changes, GST, bookkeeping, and trademark registration in India.",
  keywords: [
    "corporate legal services directory",
    "company registration services punjab",
    "roc compliance services mohali",
    "secretarial services chandigarh",
    "gst and trademark services india",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Corporate Legal & Secretarial Services Directory | Company Solutions",
    description:
      "Full directory of corporate incorporation, statutory filings, legal documentation, and tax compliance services.",
    url: "https://companysolutions.in/services",
  },
};

export default function ServicesDirectoryPage() {
  const departments = [
    {
      id: "formation",
      title: "1. Company & Business Entity Formation",
      tagline: "Incorporate with limited liability, investor readiness, and statutory MCA compliance.",
      icon: Building2,
      accent: "blue",
      services: [
        {
          name: "Private Limited Company",
          badge: "Most Popular",
          badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
          desc: "Ideal for startups, equity fundraising, and ventures seeking venture capital or angel funding.",
          features: ["2 Directors & 2 Shareholders", "SPICe+ Part A & B filing", "Class 3 DSCs & DINs included"],
          deepLink: "/services/company-registration",
        },
        {
          name: "Limited Liability Partnership (LLP)",
          badge: "Low Compliance",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Combines partnership flexibility with limited liability protection and no mandatory audit up to ₹40L.",
          features: ["2 Designated Partners", "Custom LLP Agreement drafting", "Exempt from dividend distribution tax"],
          deepLink: "/services/llp-registration",
        },
        {
          name: "One Person Company (OPC)",
          badge: "Solo Founders",
          badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
          desc: "Full corporate status for solo entrepreneurs with 100% control and limited personal liability.",
          features: ["1 Director & 1 Nominee", "Complete corporate legal protection", "Seamless conversion to Pvt Ltd as you scale"],
          deepLink: "#",
        },
        {
          name: "Section 8 Company (NGO / Non-Profit)",
          badge: "Non-Profit",
          badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
          desc: "For charitable, educational, environmental, and social causes. Eligible for 12A and 80G tax exemptions.",
          features: ["Central Government License", "Eligible for CSR funds & grants", "Zero minimum capital requirement"],
          deepLink: "#",
        },
        {
          name: "Public Limited Company",
          badge: "Large Enterprises",
          badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
          desc: "For large ventures aiming to raise capital from the public and list on stock exchanges.",
          features: ["Minimum 3 Directors & 7 Members", "Unrestricted share transferability", "High public credibility"],
          deepLink: "#",
        },
        {
          name: "Indian Subsidiary (Foreign Companies)",
          badge: "Cross-Border FDI",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Setup wholly owned subsidiaries in India for foreign parents under 100% automatic FDI route.",
          features: ["FDI & RBI reporting (FC-GPR)", "End-to-end secretarial support", "Foreign director KYC facilitation"],
          deepLink: "#",
        },
        {
          name: "Nidhi & Producer Companies",
          badge: "Specialized Sector",
          badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
          desc: "Mutual benefit societies for thrift habits and specialized agricultural producer entities.",
          features: ["Ministry of Corporate Affairs approval", "Statutory rules guidance", "Tailored object drafting"],
          deepLink: "#",
        },
        {
          name: "Partnership & Sole Proprietorship",
          badge: "Small Business",
          badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
          desc: "Fastest entry for local shops, sole trades, and unregistered partnership deeds.",
          features: ["Partnership Deed drafting", "Notarization & Registrar of Firms", "Bank account facilitation"],
          deepLink: "#",
        },
      ],
    },
    {
      id: "changes",
      title: "2. Corporate Secretarial & ROC Changes",
      tagline: "Execute statutory board amendments and filings on the MCA V3 portal with zero delays.",
      icon: RefreshCw,
      accent: "indigo",
      services: [
        {
          name: "Director Appointment & Resignation",
          badge: "Form DIR-12",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Add new executive or independent directors, or legally document director resignation and board exit.",
          features: ["DIR-2 consent & DIR-8 disqualification check", "Board resolution drafting", "MCA DIR-12 electronic filing"],
          deepLink: "#",
        },
        {
          name: "Registered Office Address Change",
          badge: "Form INC-22",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Relocating your registered office within local limits, to another city in the same state, or interstate.",
          features: ["Utility bill & NOC review", "Special resolution & MGT-14 (if needed)", "Regional Director (RD) approvals for interstate"],
          deepLink: "#",
        },
        {
          name: "Increase in Authorized Share Capital",
          badge: "Form SH-7",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Expand your company's capital limits to issue new shares to investors or founders.",
          features: ["Alteration of Capital Clause in MOA", "EGM notice & shareholder approval", "State stamp duty calculation & payment"],
          deepLink: "#",
        },
        {
          name: "Share Transfer & Allotment",
          badge: "Form SH-4 & PAS-3",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Transfer equity between founders/investors or allot fresh shares to new angel investors.",
          features: ["Form SH-4 Securities Transfer Deed", "Stamp duty franking guidance", "Filing of Return of Allotment (PAS-3)"],
          deepLink: "#",
        },
        {
          name: "Company Name & Object Clause Change",
          badge: "Form INC-24 & MGT-14",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Rebrand your company name or expand your Memorandum of Association into new business domains.",
          features: ["RUN name reservation on MCA", "Amendment of MOA Main Object Clause", "Fresh Certificate of Incorporation issuance"],
          deepLink: "#",
        },
        {
          name: "Strike Off & Company Closure",
          badge: "Form STK-2",
          badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
          desc: "Legally wind up defunct or dormant companies to stop recurring annual compliance obligations.",
          features: ["Statement of Accounts & indemnity bond", "Affidavit by all directors", "Permanent removal from ROC Register"],
          deepLink: "#",
        },
      ],
    },
    {
      id: "compliance",
      title: "3. Annual Statutory & MCA Compliances",
      tagline: "Stay 100% compliant with the Companies Act, 2013 and avoid ₹100/day daily penalties.",
      icon: FileSpreadsheet,
      accent: "amber",
      services: [
        {
          name: "Annual ROC Filings (AOC-4 & MGT-7)",
          badge: "Mandatory Filing",
          badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
          desc: "Annual financial statement and return filing for Private Limited companies and LLPs.",
          features: ["Filing of Form AOC-4 & MGT-7/7A", "Directors' Report preparation", "Zero late penalty tracking"],
          deepLink: "/services/annual-compliance",
        },
        {
          name: "Director Annual eKYC (DIR-3 KYC)",
          badge: "Due: Sept 30",
          badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
          desc: "Mandatory yearly identity and contact verification for every DIN and DPIN holder in India.",
          features: ["Web KYC / e-Form DIR-3 KYC", "Avoid ₹5,000 late reactivation fine", "Keeps DIN active on MCA portal"],
          deepLink: "/services/annual-compliance",
        },
        {
          name: "Commencement of Business (INC-20A)",
          badge: "Mandatory in 180 Days",
          badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
          desc: "Certifies that initial capital has been deposited into the company bank account.",
          features: ["Bank statement verification", "Mandatory before commencing business", "Prevents company deregistration"],
          deepLink: "/services/annual-compliance",
        },
        {
          name: "Statutory Auditor Appointment (ADT-1)",
          badge: "Due in 30 Days",
          badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
          desc: "Formal electronic appointment of Chartered Accountant auditor for a 5-year tenure.",
          features: ["Auditor consent & eligibility certificate", "Board resolution & Form ADT-1 submission", "ROC acknowledgment receipt"],
          deepLink: "/services/annual-compliance",
        },
        {
          name: "Statutory Registers & Board Minutes",
          badge: "Secretarial Retainer",
          badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
          desc: "Maintenance of members' register, directors' register, share certificates, and minutes book.",
          features: ["Section 88 & 186 compliance", "Drafting of quarterly Board Minutes", "AGM Notice & Chairman's Speeches"],
          deepLink: "/services/annual-compliance",
        },
      ],
    },
    {
      id: "tax",
      title: "4. Taxation, Accounting & Business Licensing",
      tagline: "Outsource your day-to-day books, tax filings, and startup registrations to experienced CAs.",
      icon: Receipt,
      accent: "emerald",
      services: [
        {
          name: "GST Registration & Return Filing",
          badge: "Taxation",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Obtain your 15-digit GSTIN and ensure timely monthly (GSTR-1, 3B) and annual (GSTR-9) filings.",
          features: ["State-specific GSTIN allotment", "Input Tax Credit (ITC) reconciliation", "E-way bill & e-invoicing guidance"],
          deepLink: "#",
        },
        {
          name: "Accounting & Monthly Bookkeeping",
          badge: "Virtual CFO",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Dedicated cloud accounting (Zoho / Tally / QuickBooks) with bank reconciliation and P&L.",
          features: ["Ledger & voucher posting", "Monthly Profit & Loss reports", "Year-end Balance Sheet preparation"],
          deepLink: "#",
        },
        {
          name: "TDS Computation & 26Q Returns",
          badge: "Direct Tax",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Compute monthly TDS deductions on contractor payments, rent, and professional fees.",
          features: ["Quarterly e-TDS filing (Form 24Q, 26Q)", "Generation of Form 16 & 16A certificates", "Challan ITNS 281 verification"],
          deepLink: "#",
        },
        {
          name: "Startup India (DPIIT) & 80IAC Exemption",
          badge: "Govt Subsidies",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Get officially certified as a Startup by DPIIT to access tax holidays and government tenders.",
          features: ["DPIIT Certificate of Recognition", "Self-certification compliance under 9 labor laws", "Section 80-IAC 3-year tax exemption guidance"],
          deepLink: "#",
        },
        {
          name: "MSME / Udyam Registration",
          badge: "Priority Lending",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Official Micro, Small, and Medium Enterprises registration for priority banking and subsidies.",
          features: ["Instant digital Udyam Certificate", "Collateral-free bank loans eligibility", "Protection against delayed payments"],
          deepLink: "#",
        },
        {
          name: "Import Export Code (IEC)",
          badge: "Global Trade",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "10-digit DGFT license mandatory for importing or exporting goods and services outside India.",
          features: ["DGFT portal submission", "Lifetime validity (no renewals)", "Customs & foreign exchange clearance"],
          deepLink: "#",
        },
      ],
    },
    {
      id: "ip",
      title: "5. Intellectual Property & Corporate Drafting",
      tagline: "Protect your brand name, trademarks, and business contracts with solid legal backing.",
      icon: Copyright,
      accent: "indigo",
      services: [
        {
          name: "Trademark Registration (TM-A)",
          badge: "Brand Protection",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Protect your brand name, logo, or slogan nationwide across Nice Classes 1 to 45.",
          features: ["Use ™ symbol within 24 hours", "Comprehensive availability search report", "10 years national protection"],
          deepLink: "/services/trademark-registration",
        },
        {
          name: "Trademark Objection Replies & Hearings",
          badge: "IP Dispute",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Professional legal responses to examination reports and appearance before the Trademark Examiner.",
          features: ["Section 9 & 11 objection replies", "Affidavit of prior usage & evidence", "Show cause hearing representation"],
          deepLink: "/services/trademark-registration",
        },
        {
          name: "Founders' & Shareholders' Agreements",
          badge: "Legal Drafting",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Water-tight legal agreements covering equity vesting, drag-along, tag-along, and exit clauses.",
          features: ["Founders' equity & IP assignment", "Share Purchase Agreement (SPA)", "Pre-emption & dispute resolution clauses"],
          deepLink: "#",
        },
        {
          name: "Commercial Contracts & NDAs",
          badge: "Business Contracts",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
          desc: "Custom non-disclosure agreements, vendor contracts, employment terms, and client master service agreements (MSA).",
          features: ["Customized by corporate attorneys", "Confidentiality & non-compete clauses", "Limitation of liability & indemnities"],
          deepLink: "#",
        },
      ],
    },
  ];

  return (
    <>
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-3 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-medium">All Services Directory</span>
        </div>
      </div>

      {/* Directory Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>25+ End-to-End Corporate Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Corporate Legal, Registration & Secretarial Services Directory
          </h1>

          <p className="text-base text-slate-300 mt-4 leading-relaxed font-normal">
            Whether you are registering your first startup, executing a director change, filing annual ROC returns, or securing your trademark, explore our complete corporate catalog.
          </p>

          {/* Quick Department Jump Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "formation", label: "Entity Formation" },
              { id: "changes", label: "ROC Changes" },
              { id: "compliance", label: "Annual Compliance" },
              { id: "tax", label: "Tax & Accounting" },
              { id: "ip", label: "IP & Contracts" },
            ].map((btn) => (
              <a
                key={btn.id}
                href={`#${btn.id}`}
                className="px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-semibold transition-all border border-slate-700/80"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {departments.map((dept) => {
            const DeptIcon = dept.icon;
            return (
              <div key={dept.id} id={dept.id} className="scroll-mt-24 space-y-6">
                
                {/* Department Header */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <DeptIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {dept.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {dept.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dept.services.map((srv, sIdx) => {
                    const hasDeepLink = srv.deepLink !== "#";
                    return (
                      <div
                        key={sIdx}
                        className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${srv.badgeColor}`}>
                              {srv.badge}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {srv.name}
                          </h3>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {srv.desc}
                          </p>

                          <ul className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                            {srv.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6 mt-6 border-t border-slate-100">
                          {hasDeepLink ? (
                            <Link
                              href={srv.deepLink}
                              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-blue-600/20"
                            >
                              <span>View Service Details & Process</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          ) : (
                            <a
                              href={`https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20am%20inquiring%20about%20${encodeURIComponent(srv.name)}.%20Please%20share%20details%20and%20quotation.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all border border-slate-200 group-hover:border-blue-600"
                            >
                              <span>Request Custom Quote & Advisory</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}

          {/* Bottom Consultation Box */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                Direct Company Secretary Helpline
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Don&apos;t see the exact corporate filing you need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                We handle custom corporate resolutions, NCLT petitions, legal due diligence, and specialized licenses across India. Speak directly with our senior legal counsel.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:+917340743407"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-lg text-center"
              >
                Call: +91 73407 43407
              </a>
              <a
                href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20have%20a%20custom%20corporate%20filing%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors shadow-lg text-center"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
