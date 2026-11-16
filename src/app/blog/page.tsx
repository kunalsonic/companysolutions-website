import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { BookOpen, Clock, Calendar, ArrowRight, User, Sparkles, ChevronRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Law, Company Registration & Compliance Blog | Company Solutions",
  description:
    "In-depth legal guides, incorporation checklists, and ROC compliance updates for Indian startups and entrepreneurs. Written by certified Company Secretaries.",
  keywords: [
    "company registration blog",
    "startup legal guide india",
    "roc compliance articles",
    "llp registration tips",
    "business legal blog punjab",
  ],
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);

  return (
    <>
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-3 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-medium">Knowledge Hub & Blog</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>LegalTech & Corporate Insights</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Corporate Law, Incorporation & Compliance Blog
          </h1>

          <p className="text-base text-slate-300 mt-4 leading-relaxed font-normal">
            Actionable insights, step-by-step guides, and regulatory updates from practicing Company Secretaries and legal advisors to help your business stay ahead.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Post Card */}
          {featured && (
            <div className="mb-14">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Featured Guide</span>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden grid lg:grid-cols-12 gap-6 p-6 sm:p-8">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featured.readTime}</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featured.publishedAt}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${featured.slug}`}>
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {featured.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      By <strong className="text-slate-900">{featured.author.name}</strong> &bull; {featured.author.role}
                    </div>
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between border border-blue-800/40">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-300">
                      Key Takeaway
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Starting a venture?
                    </h3>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Understand how the SPICe+ MCA filing system consolidates name approval, DIN, PAN, TAN, and bank accounts into a single digital submission.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-blue-800/50">
                    <a
                      href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20read%20your%20incorporation%20guide%20and%20want%20to%20register%20my%20company."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                    >
                      <span>Consult with our CS team</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Remaining Posts */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">All Published Articles</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remaining.map((post, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 text-[11px]">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">{post.publishedAt}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Consultation Callout */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold">Have a specific legal question for your startup?</h3>
              <p className="text-xs text-slate-300 max-w-lg">
                Speak directly with our Company Secretaries in Zirakpur / Mohali. We provide tailored advisory for company registration, ROC filings, and trademark disputes.
              </p>
            </div>
            <a
              href="https://wa.me/917340743407?text=Hello%20Company%20Solutions,%20I%20have%20a%20legal%20question%20from%20your%20blog."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-lg"
            >
              Ask on WhatsApp: +91 73407 43407
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
