import { Award, Clock, FileCheck, Headphones, CheckCircle } from "lucide-react";

export default function TrustBar() {
  const stats = [
    {
      icon: FileCheck,
      value: "1,200+",
      label: "Companies Incorporated",
      subtext: "Startups & SMEs across India",
    },
    {
      icon: Clock,
      value: "7-10 Days",
      label: "Average Turnaround",
      subtext: "Fast-track MCA filing",
    },
    {
      icon: Award,
      value: "100%",
      label: "Statutory Compliance",
      subtext: "By certified CS & CA professionals",
    },
    {
      icon: Headphones,
      value: "Dedicated CS",
      label: "Personal Legal Manager",
      subtext: "One-on-one direct phone support",
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand guarantee banner */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Digital Signature Certificates (DSC Class 3) included</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Director Identification Numbers (DIN) included</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Drafting of MOA & AOA by Company Secretaries</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>PAN, TAN & Zero-Balance Current Account Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
