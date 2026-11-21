"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Star, ArrowRight, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "Private Limited Company",
  });
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: formData.service,
          fullName: formData.name,
          phone: formData.phone,
          state: formData.city,
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-500/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Trust Badges */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>India&apos;s Trusted Corporate Advisory &bull; Mohali &bull; Pan-India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Register Your Company in India in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                7–10 Days
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Fast, paperless, and 100% online company registration handled by certified{" "}
              <strong className="text-white font-semibold">Company Secretaries (CS) & Chartered Accountants</strong>. 
              Get your Certificate of Incorporation, DSC, DIN, PAN, TAN & Bank Account without visiting any government office.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 p-3.5 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>100% Online</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Zero physical visits required anywhere</p>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 p-3.5 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>MCA Compliant</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Official SPICe+ MCA filing</p>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span>Custom Quote</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Tailored to your state & capital</p>
              </div>
            </div>

            {/* Social Proof / Trust Footprint */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">AK</div>
                  <div className="w-9 h-9 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">RS</div>
                  <div className="w-9 h-9 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">PS</div>
                  <div className="w-9 h-9 rounded-full bg-amber-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">MG</div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-400">Over 1,200+ Indian Startups Registered</p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-slate-800"></div>

              <div className="text-left">
                <p className="text-xs text-slate-400">Regional HQ:</p>
                <p className="text-xs font-semibold text-slate-200">Chandigarh &bull; Mohali &bull; Zirakpur</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Lead Capture Form */}
          <div className="lg:col-span-5">
            <div id="quote-form" className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative scroll-mt-28">
              
              {/* Form Header Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Free Company Name Search & Initial Consultation
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Request a Custom Quote
              </h2>
              <p className="text-sm text-slate-600 mt-1 mb-6">
                Receive an accurate, itemized quotation tailored to your state and business needs.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Request Received!</h3>
                  <p className="text-sm text-slate-600">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our consultant will prepare your customized quotation and reach out on <strong className="text-slate-900">{formData.phone}</strong> shortly.
                  </p>
                  <a
                    href={`https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20just%20submitted%20inquiry%20for%20${encodeURIComponent(formData.service)}.%20Name:%20${encodeURIComponent(formData.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors mt-2"
                  >
                    <span>Instant WhatsApp Connect</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 font-medium text-slate-800"
                    >
                      <option value="Private Limited Company">Private Limited Company Registration</option>
                      <option value="Limited Liability Partnership (LLP)">Limited Liability Partnership (LLP)</option>
                      <option value="One Person Company (OPC)">One Person Company (OPC)</option>
                      <option value="Section 8 (NGO / Non-Profit)">Section 8 (NGO / Section 8 Company)</option>
                      <option value="Annual ROC Filings & Compliance">Annual ROC Filings & Compliance</option>
                      <option value="Trademark & IP Registration">Trademark & Brand Registration</option>
                      <option value="GST Registration & Filing">GST Registration & Tax Filing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Mobile / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        City / State
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mohali / Chandigarh"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group transition-all"
                    >
                      <span>Check Company Name & Request Custom Quote</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your privacy is 100% secured. No spam, ever.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
