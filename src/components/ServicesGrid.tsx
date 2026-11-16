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
  CheckCircle2 
} from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Building2,
      title: "Private Limited Company",
      tagline: "Most Preferred for Startups & Investors",
      features: [
        "2 Class-3 Digital Signatures (DSC)",
        "2 Director Identification Numbers (DIN)",
        "Drafting of MOA & AOA by CS team",
        "PAN, TAN & Zero-Balance Bank Account",
        "Free Name Reservation & SPICe+ filing",
      ],
      badge: "Most Popular",
      badgeColor: "bg-blue-600 text-white",
      pageUrl: "/services/company-registration",
    },
    {
      icon: Briefcase,
      title: "Limited Liability Partnership (LLP)",
      tagline: "Low Annual Compliance for Partners",
      features: [
        "2 Designated Partners DPINs",
        "Class-3 DSC for Partners",
        "Drafting of customized LLP Agreement",
        "No mandatory statutory audit up to ₹40L",
        "Filing on MCA Portal with zero hassle",
      ],
      badge: "Low Compliance",
      badgeColor: "bg-emerald-600 text-white",
      pageUrl: "/services/llp-registration",
    },
    {
      icon: UserCheck,
      title: "One Person Company (OPC)",
      tagline: "Sole Entrepreneur with Limited Liability",
      features: [
        "Single individual 100% ownership",
        "Separate legal entity status",
        "Mandatory 1 Nominee Director appointment",
        "Lower compliance compared to Pvt Ltd",
        "Easy conversion to Pvt Ltd as you scale",
      ],
      badge: "Solo Founders",
      badgeColor: "bg-purple-600 text-white",
      pageUrl: "#incorporation",
    },
    {
      icon: FileSpreadsheet,
      title: "Annual ROC Filings & Compliance",
      tagline: "Stay 100% Penal-Free with MCA",
      features: [
        "Filing of Form AOC-4 (Financial Statements)",
        "Filing of Form MGT-7/7A (Annual Return)",
        "Director Annual KYC (DIR-3 KYC)",
        "Preparation of Board Minutes & Resolutions",
        "Statutory Register maintenance",
      ],
      badge: "Mandatory Compliance",
      badgeColor: "bg-amber-600 text-white",
      pageUrl: "/services/annual-compliance",
    },
    {
      icon: Copyright,
      title: "Trademark & Brand Registration",
      tagline: "Protect Your Brand Name & Logo Legally",
      features: [
        "Comprehensive Trademark Search report",
        "Classification of goods & services (1 to 45)",
        "Filing Form TM-A with Trademark Registry",
        "Use ™ symbol within 24 hours of filing",
        "Complete objection handling & replies",
      ],
      badge: "IP Protection",
      badgeColor: "bg-indigo-600 text-white",
      pageUrl: "/services/trademark-registration",
    },
    {
      icon: Receipt,
      title: "Accounting & GST Services",
      tagline: "Complete Financial & Tax Outsourcing",
      features: [
        "Monthly Bookkeeping & Ledger Maintenance",
        "GST Registration & Monthly/Quarterly Filings",
        "TDS Computation, Challans & 26Q Returns",
        "Financial Statement & Balance Sheet prep",
        "Virtual CFO advisory for growing businesses",
      ],
      badge: "Tax & Finance",
      badgeColor: "bg-slate-700 text-white",
      pageUrl: "#contact",
    },
    {
      icon: RefreshCw,
      title: "Director & Company Changes",
      tagline: "Fast Secretarial Amendments",
      features: [
        "Appointment & Resignation of Directors (DIR-12)",
        "Registered Office Address Change (INC-22)",
        "Increase in Authorized Share Capital",
        "Share Transfer & Allotment Documentation",
        "Company Name & Object Clause Change",
      ],
      badge: "Secretarial",
      badgeColor: "bg-cyan-700 text-white",
      pageUrl: "#contact",
    },
    {
      icon: HeartHandshake,
      title: "Section 8 (NGO / Non-Profit)",
      tagline: "Companies for Charitable & Social Causes",
      features: [
        "Central Government License for Section 8",
        "Eligible for 12A & 80G Tax Exemption",
        "CSR Grants & Corporate Funding Eligible",
        "No Minimum Capital Requirement",
        "Professional CS guidance on compliance",
      ],
      badge: "Non-Profit",
      badgeColor: "bg-rose-600 text-white",
      pageUrl: "#contact",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            End-to-End Corporate Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Legal & Company Secretarial Services
          </h2>
          <p className="text-base text-slate-600">
            From incorporating your dream startup to keeping your business 100% compliant with ROC, MCA, and GST laws across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDedicatedPage = service.pageUrl.startsWith("/services/");

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 mb-5">
                    {service.tagline}
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                  {isDedicatedPage ? (
                    <Link
                      href={service.pageUrl}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-blue-600/20"
                    >
                      <span>View Service Details & Process</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Get Custom Quote & Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout to Master Services Catalog */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-blue-700 font-bold text-sm border-2 border-blue-200 shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore All 25+ Corporate Services (DIR-12, INC-22, GST, Startup India)</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>

      </div>
    </section>
  );
}
