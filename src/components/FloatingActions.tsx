"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp on Bottom Right */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20want%20to%20register%20my%20company%20in%20India.%20Please%20help."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all"
          aria-label="Chat with Company Secretary on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
          <MessageCircle className="w-7 h-7" />

          {/* Hover Tooltip */}
          <span className="hidden md:block absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Chat with Advisor on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Call Bar */}
      <nav aria-label="Mobile quick actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center gap-3 shadow-2xl">
        <a
          href="tel:+917340743407"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call: +91 73407 43407</span>
        </a>
        <a
          href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20am%20interested%20in%20company%20registration"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
