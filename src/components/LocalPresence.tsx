import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function LocalPresence() {
  const localHubs = [
    { city: "Chandigarh", info: "Sector 17, 34, 35, Industrial Area Phase 1 & 2" },
    { city: "Mohali (SAS Nagar)", info: "Phase 7, 8, 8B, CP67, Bestech Business Towers" },
    { city: "Zirakpur", info: "VIP Road, Chandigarh-Ambala Highway, PR7 Airport Road" },
    { city: "Panchkula", info: "Sector 5, 8, 20, MDC Sector 4 & Industrial Area" },
    { city: "Kharar & New Chandigarh", info: "Kharar Main, Sunny Enclave, Eco City" },
    { city: "Pan-India Services", info: "Delhi NCR, Mumbai, Bengaluru, Hyderabad & All States" },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              Local Authority &bull; Global Standard
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Leading Corporate Advisory in Chandigarh Tricity & Punjab
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              While our registration and secretarial compliance services are 100% digital across India, our corporate headquarters are strategically located in <strong className="text-slate-900">Zirakpur (Mohali)</strong>. Founders and directors across the Tricity can also visit our office for in-person legal consultations.
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Registered Office Address</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    401, Ground Floor, Savitry Tower, VIP Road, Zirakpur, Mohali, Punjab 140603, India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200/60">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Direct Line</div>
                    <a href="tel:+917340743407" className="text-xs font-bold text-slate-900 hover:text-blue-600">
                      +91 73407 43407
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Official Email</div>
                    <a href="mailto:info@companysolutions.in" className="text-xs font-bold text-slate-900 hover:text-blue-600">
                      info@companysolutions.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hubs Grid */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">
              Serving Startups Across Regional Hubs
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fast-track MCA filings and same-day DSC issuance across:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localHubs.map((hub, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/70 hover:border-blue-500/50 transition-colors"
                >
                  <div className="text-sm font-bold text-blue-400 flex items-center justify-between">
                    <span>{hub.city}</span>
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {hub.info}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Office Hours: Mon – Sat (9:30 AM – 7:00 PM)</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Open Now
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
