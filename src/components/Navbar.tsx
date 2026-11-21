"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ChevronDown, Building2, FileSpreadsheet, UserCog, Copyright, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 200);
  };

  const handleDropdownClose = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesDropdown(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToQuote = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const quoteEl = document.getElementById("quote-form");
      if (quoteEl) {
        e.preventDefault();
        quoteEl.scrollIntoView({ behavior: "smooth", block: "start" });
        const firstInput = quoteEl.querySelector("input, select") as HTMLElement | null;
        if (firstInput) firstInput.focus();
      }
    }
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Official Brand Logo */}
          <Link href="/" onClick={scrollToTop} className="flex items-center gap-3 group shrink-0">
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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="h-full flex items-center group cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                onClick={handleDropdownClose}
                className={`flex items-center gap-1 text-sm font-semibold py-2 transition-colors ${
                  servicesDropdown ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-blue-600" : "text-slate-400 group-hover:text-blue-600"
                  }`}
                />
              </Link>

              {/* 4-Column Mega-Menu Dropdown on Cursor Hover */}
              <div
                className={`absolute top-full left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 pt-2 z-50 transition-all duration-200 ${
                  servicesDropdown
                    ? "opacity-100 visible pointer-events-auto translate-y-0"
                    : "opacity-0 invisible pointer-events-none -translate-y-1"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6">
                  <div className="grid grid-cols-4 gap-6">
                  {/* Col 1: Registration */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                        Incorporation
                      </span>
                    </div>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/services/company-registration"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Private Limited Company
                          <span className="block text-[11px] font-normal text-slate-500">Most popular for startups</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/llp-registration"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          LLP Registration
                          <span className="block text-[11px] font-normal text-slate-500">Partnership firms</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          One Person Company
                          <span className="block text-[11px] font-normal text-slate-500">Solo entrepreneurs</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          Section 8 (NGO Company)
                          <span className="block text-[11px] font-normal text-slate-500">Non-profit foundations</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Col 2: Annual ROC */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                        Annual ROC & CS
                      </span>
                    </div>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/services/annual-compliance"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                        >
                          Annual ROC Filings
                          <span className="block text-[11px] font-normal text-slate-500">Form AOC-4 & MGT-7</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/annual-compliance"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                        >
                          Director e-KYC (DIR-3)
                          <span className="block text-[11px] font-normal text-slate-500">Mandatory annual DIN KYC</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/annual-compliance"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                        >
                          Commencement of Business
                          <span className="block text-[11px] font-normal text-slate-500">INC-20A bank mandate</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/annual-compliance"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                        >
                          Secretarial Registers & AGM
                          <span className="block text-[11px] font-normal text-slate-500">Board minutes & resolutions</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Col 3: Company Changes */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                        <UserCog className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                        Corporate Changes
                      </span>
                    </div>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 transition-colors"
                        >
                          Add or Remove Director
                          <span className="block text-[11px] font-normal text-slate-500">Form DIR-12 filing</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 transition-colors"
                        >
                          Registered Office Shift
                          <span className="block text-[11px] font-normal text-slate-500">Form INC-22 address change</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 transition-colors"
                        >
                          Increase Share Capital
                          <span className="block text-[11px] font-normal text-slate-500">Form SH-7 capital expansion</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 transition-colors"
                        >
                          Company Name Change
                          <span className="block text-[11px] font-normal text-slate-500">RUN & INC-24 approval</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Col 4: Tax & IP */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Copyright className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                        Tax, IP & Finance
                      </span>
                    </div>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/services/trademark-registration"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
                        >
                          Trademark (TM-A) Filing
                          <span className="block text-[11px] font-normal text-slate-500">Brand & logo protection</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
                        >
                          GST Registration & Returns
                          <span className="block text-[11px] font-normal text-slate-500">Monthly GSTR filings</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
                        >
                          Bookkeeping & Accounting
                          <span className="block text-[11px] font-normal text-slate-500">Tally / Zoho ledger support</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#services"
                          onClick={handleDropdownClose}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
                        >
                          MSME (Udyam) & IEC
                          <span className="block text-[11px] font-normal text-slate-500">Govt subsidies & import export</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar inside Mega Menu */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50 -mx-6 -mb-6 px-6 py-3.5 rounded-b-3xl">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Need immediate guidance?</span>
                    <a href="tel:+917340743407" className="font-bold text-blue-600 hover:underline">
                      Call Advisor: +91 73407 43407
                    </a>
                  </div>
                  <Link
                    href="/services"
                    onClick={handleDropdownClose}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                  >
                    <span>View All 25+ Services Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
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
              href="/#quote-form"
              onClick={scrollToQuote}
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
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToTop(e);
            }}
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
