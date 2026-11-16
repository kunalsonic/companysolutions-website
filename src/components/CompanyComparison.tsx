"use client";

import { useState } from "react";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";

export default function CompanyComparison() {
  const [selectedType, setSelectedType] = useState<"pvt" | "llp" | "opc">("pvt");

  const comparisonData = [
    {
      parameter: "Minimum Members / Directors",
      pvt: "2 Directors & 2 Shareholders",
      llp: "2 Designated Partners",
      opc: "1 Director & 1 Nominee",
    },
    {
      parameter: "Liability of Owners",
      pvt: "Limited to share capital",
      llp: "Limited to agreed contribution",
      opc: "Limited to share capital",
    },
    {
      parameter: "Foreign Investment (FDI)",
      pvt: "100% Automatic Route (Most sectors)",
      llp: "Allowed under Automatic Route",
      opc: "Not permitted for NRIs/Foreigners",
    },
    {
      parameter: "Fundraising & Venture Capital",
      pvt: "Highest Preference for VCs & Angels",
      llp: "Cannot issue shares / equity",
      opc: "Hard to raise external equity",
    },
    {
      parameter: "Annual ROC Compliance",
      pvt: "Mandatory AGM, AOC-4 & MGT-7",
      llp: "Lower (Form 8 & Form 11)",
      opc: "Simplified annual returns",
    },
    {
      parameter: "Statutory Audit",
      pvt: "Mandatory every financial year",
      llp: "Only if turnover > ₹40L or capital > ₹25L",
      opc: "Mandatory annual audit",
    },
    {
      parameter: "Ideal Business Type",
      pvt: "Startups, Tech ventures, Scalable firms",
      llp: "Consultancies, Agencies, Law/CA firms",
      opc: "Solo entrepreneurs & single creators",
    },
  ];

  return (
    <section id="incorporation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            Smart Decision Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Which Business Structure Fits Your Startup?
          </h2>
          <p className="text-base text-slate-600">
            Compare Private Limited, LLP, and One Person Company to pick the right legal entity for your business growth and tax advantages.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="mt-12 overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                <th className="py-5 px-6 text-sm font-semibold text-slate-900 w-1/4">
                  Feature / Parameter
                </th>
                <th className="py-5 px-6 text-sm font-bold text-blue-700 w-1/4 bg-blue-50/50 border-x border-blue-100">
                  <div className="flex items-center justify-between">
                    <span>Private Limited</span>
                    <span className="text-[10px] uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">
                      Recommended
                    </span>
                  </div>
                </th>
                <th className="py-5 px-6 text-sm font-bold text-slate-900 w-1/4">
                  LLP (Partnership)
                </th>
                <th className="py-5 px-6 text-sm font-bold text-slate-900 w-1/4">
                  One Person Company (OPC)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-800">
                    {row.parameter}
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-blue-50/30 border-x border-blue-100">
                    {row.pvt}
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    {row.llp}
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    {row.opc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Consultation Callout */}
        <div className="mt-8 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Still confused about which structure to register?</h3>
            <p className="text-sm text-blue-200">
              Speak directly with our Company Secretary. We will analyze your business model and recommend the most tax-efficient structure.
            </p>
          </div>
          <a
            href="tel:+917340743407"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-950 font-bold text-sm hover:bg-blue-50 shrink-0 shadow-md transition-all"
          >
            <span>Call Legal Advisor: +91 73407 43407</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
