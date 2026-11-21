"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Consultation Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Ready to Launch Your Company in India?
            </h3>
            <p className="text-sm text-blue-200">
              Get free name check, custom proposal, and complete incorporation support today.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+917340743407"
              className="px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
            >
              Call: +91 73407 43407
            </a>
            <a
              href="https://wa.me/917340743407?text=Hi%20Company%20Solutions,%20I%20want%20to%20register%20my%20company"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: About & NAP */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-xl overflow-hidden bg-white/10 border border-white/20 p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Company Solutions Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  COMPANY<span className="text-blue-500">SOLUTIONS</span>
                </span>
                <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                  Corporate Advisory & Legal Compliance
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Company Solutions is India&apos;s trusted legal-tech platform helping startups, entrepreneurs, and established businesses with company incorporation, secretarial advisory, ROC compliance, trademarks, and taxation.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>401, Ground Floor, Savitry Tower, VIP Road, Zirakpur, Mohali, Punjab 140603, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+917340743407" className="hover:text-white transition-colors">
                  +91 73407 43407
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@companysolutions.in" className="hover:text-white transition-colors">
                  info@companysolutions.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Business Incorporation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company Registration
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/company-registration" className="hover:text-white transition-colors">
                  Private Limited Company
                </Link>
              </li>
              <li>
                <Link href="/services/llp-registration" className="hover:text-white transition-colors">
                  Limited Liability Partnership (LLP)
                </Link>
              </li>
              <li>
                <Link href="#incorporation" className="hover:text-white transition-colors">
                  One Person Company (OPC)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Section 8 NGO Company
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Public Limited Company
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Nidhi & Producer Company
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Wholly Owned Indian Subsidiary
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Secretarial & Compliance */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              ROC & Compliance
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/annual-compliance" className="hover:text-white transition-colors">
                  Annual ROC Filings (AOC-4 & MGT-7)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Director KYC (DIR-3 KYC)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Director Appointment / Resignation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Registered Office Address Change
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Increase in Share Capital
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Company Secretary (CS) Retainer
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Commencement of Business (INC-20A)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tax, IP & Local Hubs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              IP, Tax & Locations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/trademark-registration" className="hover:text-white transition-colors">
                  Trademark Registration (TM-A)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  GST Registration & Returns
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/company-registration-chandigarh" className="hover:text-white transition-colors text-blue-400 font-medium">
                  Company Registration Chandigarh
                </Link>
              </li>
              <li>
                <Link href="/company-registration-mohali" className="hover:text-white transition-colors text-blue-400 font-medium">
                  Company Registration Mohali
                </Link>
              </li>
              <li>
                <Link href="/company-registration-zirakpur" className="hover:text-white transition-colors text-blue-400 font-medium">
                  Company Registration Zirakpur
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Pan-India Legal Support
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> Company Solutions (companysolutions.in) is a privately operated corporate legal, secretarial, and compliance advisory firm. We are not a government body or affiliated with the Ministry of Corporate Affairs (MCA), but assist entrepreneurs and corporate entities in obtaining statutory registrations and filings via certified professionals (CS/CA/Advocates) in strict compliance with the Companies Act, 2013 and applicable Indian laws.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 border-t border-slate-900 pt-6">
          <p>&copy; 2026 Company Solutions. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/blog" className="hover:text-slate-400">Knowledge Hub & Blog</Link>
            <Link href="#contact" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="#contact" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="#contact" className="hover:text-slate-400">Refund Policy</Link>
            <Link href="#contact" className="hover:text-slate-400">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
