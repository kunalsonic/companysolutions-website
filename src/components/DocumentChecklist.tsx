"use client";

import { useState } from "react";
import { CheckCircle2, User, Building, FileBadge, AlertCircle } from "lucide-react";

export default function DocumentChecklist() {
  const [activeTab, setActiveTab] = useState<"directors" | "office">("directors");

  const directorDocs = [
    {
      title: "PAN Card (Mandatory)",
      desc: "For Indian nationals, PAN card is mandatory for DIN allocation and SPICe+ filing. (Passport for Foreign Nationals/NRIs).",
      required: true,
    },
    {
      title: "Identity Proof",
      desc: "Aadhaar Card, Passport, Voter ID Card, or Driving License with clear photo and name matching PAN exactly.",
      required: true,
    },
    {
      title: "Recent Address Proof (Under 2 Months)",
      desc: "Bank Account Statement (with recent transactions), Electricity Bill, Telephone/Mobile Bill, or Gas Bill.",
      required: true,
    },
    {
      title: "Passport Size Photograph",
      desc: "Clear digital passport-size photograph with white background for DSC application.",
      required: true,
    },
    {
      title: "Digital Signature Certificate (DSC)",
      desc: "Don't have one? We provide Class 3 Digital Signatures with USB cryptographic tokens as part of the package.",
      required: false,
    },
  ];

  const officeDocs = [
    {
      title: "Utility Bill (Electricity / Gas / Water)",
      desc: "Must not be older than 2 months and must clearly show the complete address and owner's name.",
      required: true,
    },
    {
      title: "No Objection Certificate (NOC) from Owner",
      desc: "A signed consent letter from the property owner permitting the company to use the premises as its registered office (we provide the draft).",
      required: true,
    },
    {
      title: "Rent Agreement / Lease Deed",
      desc: "If the premises are rented or leased, a notarized rent agreement between property owner and director/company.",
      required: true,
    },
    {
      title: "Commercial or Residential Address Allowed",
      desc: "Note: In India, a residential address (even the home of one of the directors) is 100% legally acceptable as a registered office.",
      required: false,
    },
  ];

  return (
    <section id="documents" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            No Surprises
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Checklist of Documents Required
          </h2>
          <p className="text-base text-slate-600">
            All documents can be submitted as soft copies (scanned PDFs or clear smartphone photos). No physical paper mailing needed.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-10 flex justify-center">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex gap-2">
            <button
              onClick={() => setActiveTab("directors")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "directors"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <User className="w-4 h-4" />
              <span>For Directors & Shareholders</span>
            </button>
            <button
              onClick={() => setActiveTab("office")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "office"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building className="w-4 h-4" />
              <span>For Registered Office Address</span>
            </button>
          </div>
        </div>

        {/* Checklist Content */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {(activeTab === "directors" ? directorDocs : officeDocs).map((doc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-blue-300 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm">{doc.title}</h3>
                  {doc.required ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Required
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Included by us
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Tip */}
        <div className="mt-8 max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-xs text-blue-900">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Important Pro-Tip:</strong> The name on your PAN Card and Bank Statement must match character-by-character. If there is a spelling mismatch, our team assists you in getting it corrected or filing an affidavit to avoid MCA rejection.
          </div>
        </div>

      </div>
    </section>
  );
}
