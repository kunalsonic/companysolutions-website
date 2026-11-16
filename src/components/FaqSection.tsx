"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export const faqsData = [
  {
    question: "What are the minimum requirements to register a Private Limited Company in India?",
    answer:
      "To register a Private Limited Company, you need at least two directors (at least one must be a resident of India), two shareholders (directors can also be shareholders), and a registered office address in India. There is no minimum paid-up capital requirement (you can start with as little as ₹1,000 or ₹10,000).",
  },
  {
    question: "Can one person register a company in India?",
    answer:
      "Yes! Under the Companies Act, 2013, a single individual can incorporate a 'One Person Company' (OPC). An OPC gives the founder limited liability protection while retaining 100% control, though appointing a nominee director is legally required.",
  },
  {
    question: "How long does the entire company registration process take?",
    answer:
      "Typically, the entire process takes 7 to 10 working days. This includes obtaining Class-3 Digital Signature Certificates (DSC) in 1 day, Name Approval via SPICe+ Part A in 1-2 days, and SPICe+ Part B incorporation approval with PAN/TAN in 3-5 working days, subject to MCA portal processing times.",
  },
  {
    question: "Is physical presence required at the MCA or Registrar of Companies (ROC) office?",
    answer:
      "No. The entire company registration process is 100% online and paperless. You do not need to visit any government office or our premises physically. All documents and signatures are uploaded electronically through DSC tokens on the official Ministry of Corporate Affairs (MCA) portal.",
  },
  {
    question: "What is the difference between a Private Limited Company and an LLP?",
    answer:
      "A Private Limited company can issue equity shares, easily raise venture capital/angel funding, and ESOPs, but has higher annual statutory compliances. A Limited Liability Partnership (LLP) offers lower annual compliance costs and has no mandatory statutory audit if turnover is under ₹40 Lakhs and capital is under ₹25 Lakhs, making it ideal for service firms and partnerships.",
  },
  {
    question: "Can a residential address be used as the registered office of a company?",
    answer:
      "Yes. A rented or owned residential address (including your home or flat) can be legally registered as your company's registered office. You only need a recent utility bill (electricity, water, or gas bill) and a signed No Objection Certificate (NOC) from the property owner.",
  },
  {
    question: "Can an NRI or Foreign National register a company in India?",
    answer:
      "Yes, foreign nationals and NRIs can easily register a Private Limited Company in India under the 100% FDI Automatic Route for most business sectors. The only requirement is that at least one director on the board must be an Indian resident (stayed in India for ≥ 182 days in the previous financial year).",
  },
  {
    question: "What mandatory compliances must be completed after incorporation?",
    answer:
      "Mandatory post-incorporation compliances include: 1) Opening a corporate bank account and depositing initial capital, 2) Filing Form INC-20A (Commencement of Business) within 180 days, 3) Appointing the first statutory auditor via Form ADT-1 within 30 days, and 4) Annual filing of Form AOC-4 and MGT-7.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600">
            Got questions regarding company formation, MCA rules, or legal compliances? Here are answers from our certified Company Secretaries.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-blue-600 text-sm font-semibold">Q{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-3">
          <h3 className="font-bold text-slate-900">Have a specific question about your company setup?</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our legal team provides immediate clarification on naming rules, capital structure, and taxation.
          </p>
          <div className="pt-1">
            <a
              href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20have%20a%20question%20regarding%20company%20registration."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
            >
              <span>Ask Our CS on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
