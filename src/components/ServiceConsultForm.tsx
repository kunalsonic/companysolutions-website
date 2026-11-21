"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ServiceConsultFormProps {
  serviceName: string;
  badgeText?: string;
  buttonText?: string;
  accentColor?: "blue" | "emerald" | "amber" | "indigo";
}

export default function ServiceConsultForm({
  serviceName,
  badgeText = "Free Name Search & Eligibility Check",
  buttonText = "Check Availability & Request Quote",
  accentColor = "blue",
}: ServiceConsultFormProps) {
  const [formData, setFormData] = useState({
    proposedName: "",
    fullName: "",
    phone: "",
    state: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const colorStyles = {
    blue: {
      btn: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 shadow-blue-500/25",
      ring: "focus:ring-blue-600",
      badge: "bg-blue-50 text-blue-700 border-blue-200",
    },
    emerald: {
      btn: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 shadow-emerald-500/25",
      ring: "focus:ring-emerald-600",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    amber: {
      btn: "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 shadow-amber-600/25",
      ring: "focus:ring-amber-500",
      badge: "bg-amber-50 text-amber-800 border-amber-200",
    },
    indigo: {
      btn: "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 shadow-indigo-600/25",
      ring: "focus:ring-indigo-600",
      badge: "bg-indigo-50 text-indigo-800 border-indigo-200",
    },
  }[accentColor];

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setLoading(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: serviceName,
          fullName: formData.fullName,
          phone: formData.phone,
          state: formData.state,
          proposedName: formData.proposedName,
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
    <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${colorStyles.badge}`}>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        {badgeText}
      </div>

      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        Request Custom Quote & Consultation
      </h2>
      <p className="text-xs text-slate-600 mt-1 mb-5">
        Speak with our senior advisor for {serviceName}.
      </p>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Consultation Request Received!</h3>
          <p className="text-xs text-slate-600">
            Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our consultant will contact you on <strong className="text-slate-900">{formData.phone}</strong> shortly.
          </p>
          <a
            href={`https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(serviceName)}.%20Name:%20${encodeURIComponent(formData.fullName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors mt-2"
          >
            <span>Connect on WhatsApp Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Proposed Entity / Brand Name
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Tech Solutions"
              value={formData.proposedName}
              onChange={(e) => setFormData({ ...formData, proposedName: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 ${colorStyles.ring}`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 ${colorStyles.ring}`}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 ${colorStyles.ring}`}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                State / City
              </label>
              <input
                type="text"
                placeholder="e.g. Mohali / Punjab"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 ${colorStyles.ring}`}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 px-6 rounded-xl text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all mt-2 ${colorStyles.btn}`}
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-center text-slate-500">
            Direct Helpline: <a href="tel:+917340743407" className="font-bold text-blue-600 hover:underline">+91 73407 43407</a>
          </p>
        </form>
      )}
    </div>
  );
}
