import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import ServiceConsultForm from "@/components/ServiceConsultForm";
import { Clock, Calendar, ChevronRight, User, ShieldCheck, ArrowRight, Share2, BookOpen } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | Company Solutions" };

  return {
    title: `${post.title} | Company Solutions Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://companysolutions.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Company Solutions",
      url: "https://companysolutions.in",
      logo: "https://companysolutions.in/logo.png",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://companysolutions.in/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Header */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-3 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-medium truncate max-w-xs sm:max-w-md">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishedAt}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          <div className="pt-4 flex items-center gap-3 border-t border-slate-800 text-xs">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              CS
            </div>
            <div>
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>{post.author.name}</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-slate-400 text-[11px]">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body + Sticky Consultation Form Sidebar */}
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Article Prose Content (Left Column) */}
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Article Table of Contents</span>
                </h3>
                <ul className="space-y-2 text-xs text-blue-600">
                  {post.content.map((sec, i) => (
                    <li key={i}>
                      <a href={`#section-${i}`} className="hover:underline">
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {post.content.map((sec, i) => (
                <div key={i} id={`section-${i}`} className="space-y-3 pt-2">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {sec.heading}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}

              {/* Author Bio Box */}
              <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                  CS
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-900 text-sm">{post.author.name}</h4>
                    <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Legal Counsel
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Corporate secretarial and legal compliance team at Company Solutions. Specializing in company incorporation, statutory ROC filings, LLP drafting, and trademark enforcement across India.
                  </p>
                </div>
              </div>

              {/* Related Posts */}
              <div className="pt-8 border-t border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Recommended Reading</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map((rel, rIdx) => (
                    <Link
                      key={rIdx}
                      href={`/blog/${rel.slug}`}
                      className="p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group block"
                    >
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Lead Capture Widget (Right Column) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <ServiceConsultForm
                  serviceName={`Inquiry from: ${post.title}`}
                  badgeText="Talk with Company Secretary"
                  buttonText="Request Custom Consultation"
                  accentColor="blue"
                />

                <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-sm text-white">Need Immediate Help?</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our corporate advisory office is located in Zirakpur (Mohali). You can call or chat on WhatsApp directly with our senior legal counsel.
                  </p>
                  <a
                    href="tel:+917340743407"
                    className="block text-center py-2.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors"
                  >
                    Call: +91 73407 43407
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
