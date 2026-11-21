"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      {/* Top Bar for Direct Contact & Office Details */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Savitry Tower, VIP Road, Zirakpur (Mohali), Punjab 140603</span>
            </div>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">
              Mon – Sat: 9:30 AM – 7:00 PM
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <a
              href="mailto:info@companysolutions.in"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">info@companysolutions.in</span>
            </a>
            <a
              href="tel:+917340743407"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 73407 43407</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Company Solutions Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                  COMPANY<span className="text-blue-600">SOLUTIONS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  INDIA
                </span>
              </div>
              <p className="block text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wide leading-tight">
                Corporate Registration & Secretarial Advisory
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-600 py-2 transition-colors"
                onMouseEnter={() => setServicesDropdown(true)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </Link>

              <div
                className="absolute top-full -left-20 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <div className="space-y-1">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    Company Formation
                  </div>
                  <Link
                    href="/services/company-registration"
                    className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    Private Limited Registration
                    <span className="block text-xs font-normal text-slate-500">Most popular for startups & fundraising</span>
                  </Link>
                  <Link
                    href="/services/llp-registration"
                    className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    LLP Registration
                    <span className="block text-xs font-normal text-slate-500">Best for professional partnerships</span>
                  </Link>
                  <Link
                    href="/#incorporation"
                    className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    One Person Company (OPC)
                    <span className="block text-xs font-normal text-slate-500">Single founder with limited liability</span>
                  </Link>

                  <div className="border-t border-slate-100 my-2"></div>
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    Compliance & Tax
                  </div>
                  <Link
                    href="/services/annual-compliance"
                    className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    Annual ROC Filings & Secretarial
                    <span className="block text-xs font-normal text-slate-500">AOC-4, MGT-7 & Director KYC</span>
                  </Link>
                  <Link
                    href="/services/trademark-registration"
                    className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    Trademark & IP Registration
                    <span className="block text-xs font-normal text-slate-500">Brand & logo legal protection</span>
                  </Link>

                  <div className="border-t border-slate-100 my-2"></div>
                  <Link
                    href="/services"
                    className="block px-3 py-2.5 rounded-xl text-xs font-bold text-center bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    Explore All 25+ Services Directory &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/917340743407?text=Hi%20Company%20Solutions,%20I%20want%20to%20register%20my%20company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
            >
              <span>WhatsApp</span>
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg transition-all"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-blue-600 bg-blue-50"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-slate-900 bg-slate-100 hover:bg-slate-200"
          >
            All Services Directory (25+ Services) &rarr;
          </Link>
          <Link
            href="/services/company-registration"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            Private Limited Company Registration
          </Link>
          <Link
            href="/services/llp-registration"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            LLP Registration
          </Link>
          <Link
            href="/services/annual-compliance"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            Annual ROC Filings & Compliance
          </Link>
          <Link
            href="/services/trademark-registration"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            Trademark & Brand Registration
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-blue-600 hover:bg-slate-50"
          >
            Knowledge Hub & Blog
          </Link>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+917340743407"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-medium"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: +91 73407 43407</span>
            </a>
            <a
              href="https://wa.me/917340743407"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-medium"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
