import { KeyRound, FileText, Send, Award, Clock } from "lucide-react";

export default function RegistrationRoadmap() {
  const steps = [
    {
      step: "01",
      icon: KeyRound,
      title: "DSC & Name Reservation",
      timeline: "Days 1 – 2",
      description:
        "We obtain Class-3 Digital Signature Certificates (DSC) for all directors and file for MCA name approval via SPICe+ Part A with unique naming guidelines.",
      deliverable: "Approved Company Name & DSC Tokens",
    },
    {
      step: "02",
      icon: FileText,
      title: "Drafting MOA & AOA",
      timeline: "Days 3 – 4",
      description:
        "Our Company Secretaries draft your Memorandum of Association (MOA) and Articles of Association (AOA), including your custom business objects and capital structure.",
      deliverable: "Charter Documents (e-MOA & e-AOA)",
    },
    {
      step: "03",
      icon: Send,
      title: "SPICe+ Part B Filing",
      timeline: "Days 5 – 7",
      description:
        "Comprehensive filing on MCA V3 portal covering DIN allotment, Certificate of Incorporation, PAN, TAN, EPFO, ESIC, and corporate bank account opening.",
      deliverable: "MCA Government Submission Receipt",
    },
    {
      step: "04",
      icon: Award,
      title: "Certificate of Incorporation",
      timeline: "Days 7 – 10",
      description:
        "The Registrar of Companies (ROC) issues your official Certificate of Incorporation with your unique 21-digit CIN, PAN, and TAN cards.",
      deliverable: "Official COI, CIN, PAN & TAN",
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Clear, Transparent Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How Company Registration Works in 4 Steps
          </h2>
          <p className="text-base text-slate-400">
            From initial name search to receiving your Certificate of Incorporation, our experienced advisors handle 100% of the government compliance.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-3xl p-6 relative flex flex-col justify-between hover:border-blue-500/50 transition-all group"
              >
                {/* Top Step Number Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-blue-500/40 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-900/50 text-blue-300 text-xs font-medium mb-3">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span>{item.timeline}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 text-xs">
                  <span className="text-slate-500 block uppercase font-semibold text-[10px] tracking-wider">
                    Key Deliverable
                  </span>
                  <span className="text-emerald-400 font-medium">
                    {item.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Footer */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          * Timelines are subject to MCA portal processing speeds and name availability verification. Our team files fast-track submissions to prevent unnecessary resubmissions.
        </div>

      </div>
    </section>
  );
}
